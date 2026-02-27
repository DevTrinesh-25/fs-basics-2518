import TodoContext from "../TodoContext";
import { useContext, useState } from 'react';
import DeleteTodo from '../components/DeleteTodo';

function TodoList() {
    const { todos, deleteTodo } = useContext(TodoContext);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Todo List</h1>

            <div className="row">
                {todos.map((todo: any, index: number) => (
                    <div key={index} className="col-sm-6">
                        <div className="card shadow-sm my-2" style={{ height: '290px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Name: <span className="fw-normal">{todo.name}</span></h5>
                                <p className="card-text"><strong>Description:</strong> {todo.description}</p>
                                <p className="card-text"><strong>Status:</strong> {todo.status}</p>
                                <p className="card-text"><small className="text-muted">Created At: {todo.createdAt}</small></p>
                                <button className="btn btn-danger" onClick={() => { setIsDeleteModalVisible(true); setSelectedId(todo.id); }}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isDeleteModalVisible && <DeleteTodo setIsDeleteModalVisible={setIsDeleteModalVisible} selectedId={selectedId}/>}
        </div>
    )
}

export default TodoList;