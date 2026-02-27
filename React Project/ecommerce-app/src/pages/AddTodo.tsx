import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import TodoContext from '../TodoContext';

function AddTodo() {
    const { register, handleSubmit } = useForm();
    const { addTodo } = useContext(TodoContext);

    const saveTodo = (formValues: any) => {
        console.log(formValues);
        addTodo(formValues);
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Add Todo</h1>
            <div className="row">
                <div className="col-sm">
                    <form onSubmit={handleSubmit(saveTodo)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" {...register('name')}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" {...register('description')}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Status</label>
                            <select className="form-select" aria-label="Default select example" {...register('status')}>
                                <option selected>Select</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Review">Review</option>
                            </select>
                        </div>
                        <button className="btn btn-success" type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default AddTodo;