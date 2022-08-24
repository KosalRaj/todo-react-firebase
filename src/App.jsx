import { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './scss/main.scss'

function App() {
  const [todos, setTodo] = useState([
    'Make react app using firebase',
    'Make TODOs using react firebase'
  ])

  const [input, setInput] = useState('');

  const addTodo = e => {
    e.preventDefault();
    setTodo([...todos, input]);
    setInput('');
  }

  return (
    <div className='App'>
      <h1>TODOS list using React, Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}></Input>
        </FormControl>
        <Button type="submit" sx={{ mt: 1 }} onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  )
}

export default App
