import { useContext } from 'react';
import TodoContext from '../TodoContext';

function DeleteTodo(props: any) {
    const { setIsDeleteModalVisible, selectedId } = props;
    const { deleteTodo } = useContext(TodoContext);

    return (
        <div className="modal d-block" id="exampleModal" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Todo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setIsDeleteModalVisible(false)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure, you want to delete the todo?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIsDeleteModalVisible(false)}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={() => { deleteTodo(selectedId); setIsDeleteModalVisible(false) } }>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeleteTodo;