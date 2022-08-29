import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

const Todo = ({ todo }) => {
  return (
    <ListItem>
      <ListItemAvatar />
      <ListItemText primary={todo} secondary={todo} />
    </ListItem>
  )
}

export default Todo;
