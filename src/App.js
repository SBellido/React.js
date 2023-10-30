import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreatedTodoButton';

const defaultTodos = [
  { text: 'Superar challenge', completed: true },
  { text: 'Llamar a la familia', completed: true },
  { text: 'Comprar pan y vino', completed: false },
  { text: 'Volver a España', completed: false },
];

function App() {
  // ESTADOS
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

 // ESTADOS DERIVADOS
  const completedTodos = todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    /* CREA COPIA DEL ARREGLO "todos" CON SU CONTENIDO ACTUAL 
    Y AL TODO BUSCADO LO MARCA COMO COMPLETADO*/
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    /* CREA COPIA DEL ARREGLO "todos" CON SU CONTENIDO ACTUAL 
    Y ELIMINA EL TODO CON ONCLICK*/
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    /*BUSCA Y CORTA LA CANTIDAD INDICADA EN ESE INDEX */
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
