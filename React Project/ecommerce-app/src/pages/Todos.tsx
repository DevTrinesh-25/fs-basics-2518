import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoContext from "../TodoContext";
import { useState } from 'react';

function Todos() {
    const [todos, setTodos] = useState([
        {
          id: 1,
          name: "Complete React Project",
          description: "Finish building the authentication module using Context API.",
          status: "Pending",
          createdAt: "2026-02-20T09:00:00"
        },
        {
          id: 2,
          name: "Study Data Science",
          description: "Revise NumPy and practice statistical functions.",
          status: "In Progress",
          createdAt: "2026-02-19T14:30:00"
        },
        {
          id: 3,
          name: "Workout Session",
          description: "30 minutes cardio and strength training.",
          status: "Completed",
          createdAt: "2026-02-18T06:45:00"
        },
        {
          id: 4,
          name: "Prepare FastAPI Notes",
          description: "Update class notes with advanced authentication examples.",
          status: "Pending",
          createdAt: "2026-02-21T11:15:00"
        },
        {
          id: 5,
          name: "Read AI Research Paper",
          description: "Read and summarize latest trends in LLM architectures.",
          status: "In Progress",
          createdAt: "2026-02-22T20:00:00"
        }]);

    const addTodo = (formValues: any) => {
      setTodos([...todos, { ...formValues, id: todos.length + 1, createdAt: new Date().toISOString() }])
    };

    const deleteTodo = (id: number) => {
      const filteredTodos = todos.filter((todo: any) => todo.id !== id);
      setTodos(filteredTodos);
    }

    return (
        <div className="container">

            <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
                <div className="row">
                    <div className="col-sm-6">
                        <TodoList/>
                    </div>

                    <div className="col-sm-6">
                        <AddTodo/>
                    </div>
                </div>
            </TodoContext.Provider>
        </div>
    )


}

export default Todos;