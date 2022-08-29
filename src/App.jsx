import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel, Container, Typography } from '@mui/material';
import Todo from './components/Todo'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from './firebase';
import './scss/main.scss'

function App() {
  const [todos, setTodo] = useState([])

  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy('timestamp', 'desc'));
    (async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map(doc => console.log(doc.data()));
      setTodo(querySnapshot.docs.map(doc => doc.data()));
    })();
  }, [input])

  const addTodo = e => {
    e.preventDefault();
    setTodo([...todos, input]);
    setInput('');
  }

  return (
    <div className='App'>
      <Container>
        <Typography variant='h2' sx={{ mt: 4, mb: 3 }}>TODOS list using React, Firebase</Typography>
        <form>
          <FormControl sx={{ mb: 3 }}>
            <InputLabel>Write a TODO</InputLabel>
            <Input value={input} onChange={e => setInput(e.target.value)}></Input>
          </FormControl>
          <Button type="submit" sx={{ mt: 1, ml: 2 }} onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
        </form>
        <ul>
          {todos.map(({ todo }) => <Todo todo={todo} />)}
        </ul>
      </Container>
    </div>
  )
}

export default App
