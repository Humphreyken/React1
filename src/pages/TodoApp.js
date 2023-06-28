import { useState } from "react"
import Swal from "sweetalert2";


export default function TodoApp() {
    // Create useStates to store the task to be added and the array of tasks
    const [newItem, setNewItem] = useState();
    const [items, setItems] = useState([]);

    // 4. Write a fumction to handle the button click event.
    const addTaskHandler = () => {

        // Check if the input is empty (i.e if there is a new item)
        if (!newItem) {
            Swal.fire("Please enter a task");
            return;
        }

        // 5.Add each task to the array of tasks after the button is clicked
        setItems([...items, { id: Date.now(), newItem}]);
        console.log(items);
    }

    function deleteItemHandler(id) {
        // Filter and retain all the items that do not have the parameter I need
        setItems(items.filter(x => x.id !== id ));
        Swal.fire ("Task deleted");
    }

    return <>
        <h1 className="text-center text-uppercase">Todo App</h1>
        <div className="todo-header dflex flex-wrap justify-content-center m-3 rounded border border-success">

            {/* 2. Add an onChange event to the input */}
            <input onChange={e => setNewItem(e.target.value)} placeholder="Enter Task Description" type="text" className="fs-5 p-3 rounded w-50 me-5" />

            {/* 3. Add an onClick to the button */}
            <button onClick={addTaskHandler} className="btn btn-success p-3 fs-1 w-25 ms-5">Add Task</button>
        </div>


        <div className="tasks">
            {/* 6. Map throuh the tasks and display them on the browser */}

            {
                items.map(x => {
                    return <div key={x.id} className="bg-light text-success fs-1 d-flex justify-content-between m-3 p3 rounded">
                        {x.newItem}  {x.id}

                        {/* 7. Add the delete item Handler to trash the button */}
                        <i onClick={() => deleteItemHandler(x.id)} style={{cursor : "pointer"}} className="fa fa-trash text-danger"></i>
                    </div>

                })
            }


        </div>


    </>
}