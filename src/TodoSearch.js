import './TodoSearch.css';

function TodoSearch() {
  return (
    <input 
      placeholder="Escriba la tarea a realizar" 
      className="TodoSearch" 
      onChange={ (event) =>{
        console.log('Escribiste en el TODO Search')
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    /> 
  );
}

export { TodoSearch };