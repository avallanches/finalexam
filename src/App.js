import React, { useState } from 'react';
import {
  TextField, Select, MenuItem, Box, InputLabel, Typography, Button
} from '@mui/material';
import { Circle } from '@mui/icons-material';

const App = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [list, setList] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const submitRecord = () => {
    const newRecord = { title: text, color: color };
    setList([...list, newRecord]);
    setText('');
  };

  const deleteRecord = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <Box sx={{ maxWidth: 120, mt: 10, pl: 80 }}>
      <TextField label="Text" value={text} onChange={handleTextChange} />
      <InputLabel id="selected">Color</InputLabel>
      <Select value={color} onChange={handleColorChange}>
        <MenuItem value="red">Red</MenuItem>
        <MenuItem value="blue">Blue</MenuItem>
        <MenuItem value="green">Green</MenuItem>
        <MenuItem value="yellow">Yellow</MenuItem>
      </Select>

      <Button variant="contained" onClick={submitRecord} sx={{ mt: 2 }}>
        Add
      </Button>

      {list.map((e, index) => (
        <Typography
          key={index}
          variant="h6"
          style={{ color: 'black', cursor: 'pointer' }}
          onClick={() => deleteRecord(index)}
        >
          <Circle style={{ color: e.color, paddingTop: 10 }}></Circle>
          {e.title}
        </Typography>
      ))}
    </Box>
  );
};

export default App;
