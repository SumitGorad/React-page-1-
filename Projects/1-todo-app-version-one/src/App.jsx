import AppName from "./components.jsx/AppName"
import AddTodo from "./components.jsx/AddTodo"
function App(){
  
  return <center class='todo-container'>
    <AppName />
     <AddTodo />

<div class="row">
    <div class="col-6">
      Buy Milk
    </div>
    <div class="col-4">
    4/10/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
  </div>

  <div class="row">
    <div class="col-6">
      Go To College
    </div>
    <div class="col-4">
    4/10/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
  </div>

</center>


}

export default App