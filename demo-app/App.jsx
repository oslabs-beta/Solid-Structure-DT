import { color } from "d3";
import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import '/style.css'
// import { Show } from "solid-js/web";


//counter component
const Counter = () => {
  const [count, setCount] = createSignal(0); 
  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1); 


  return (
    <div id='counter'>
      <div id='counterBox'> {count}</div>
      <div>
        <button id="decrementBtn" onClick={decrement} type='button'> Decrement </button>
        <button id="incrementBtn" onClick={increment} type="button"> Increment </button>
      </div>
    </div>
  );
};

// //multiply function component
// const Multiply = () => {
//   const [multiply, setMultiply] = createSignal(0)
//   const timesTwo = () => setMultiply(multiply() * 2)
//   return (
//   <div>
//     <button onClick={timesTwo} type="button"> {multiply} </button>
//   </div>
//   );
// };


const ToDo = () => {
  let input; 
  let todoId = 0; 
  const [todos, setTodos] = createStore([]); 

  const addTodo = (text) => {
    setTodos([...todos, {id: ++todoId, text, completed: false}]);
  }

  const toggleTodo = (id) => {
    setTodos(todo => todo.id === id, "completed", completed => !completed);
  }

  return (
    <div id="todo">
    <div>
      <input id="textbox" ref={input} />
      <button id="add"
        onClick = {(e) => {
          if(!input.value.trim()) return; 
          addTodo(input.value); 
          input.value = ""; 
        }}
        >
        Add ToDo
        </button>
    </div>
    <For each = {todos} >
      {(todo) => {
        const { id, text } = todo; 
        console.log(`creating {text}`)
        return <div>
          <input id="checkbox" type = "checkbox"
          checked = {todo.completed}
          onchange = {[toggleTodo, id]}
          />
          <span 
          style = {{"text-decoration": todo.completed ? "line-through" : "none"}}
          >{text}</span>
        </div>
      }}
    </For>
    </div>
  );
};


export const App = () => {

  return (
    <div id="page">
      <div id="title"> Solid Structure Demo </div>
        <div id="counter">
          <Counter />
        </div>
        <div id="todo">
          <ToDo />
        </div>
    </div>
  );
};

// export default App;