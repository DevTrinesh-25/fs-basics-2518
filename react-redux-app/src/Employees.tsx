import {useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './slices/employees.slice';

function Employees(){
    const dispatch = useDispatch();

    const employees = useSelector((state: any) => {
        return state.employees;
    });

    console.log(employees);
    return(
       <div className='container'>
                   <h2 className='text-center my-4'>Employees</h2>
                   <table className="table">
                       <thead>
                           <tr>
                               <th scope="col">#</th>
                               <th scope="col">Name</th>
                               <th scope="col">Position</th>
                               <th scope="col">Salary</th>
                               <th scope="col">Created At</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {employees.data.map((employees: any, index: number) => (
                           <tr>
                               <th scope="row">{index + 1}</th>
                               <td>{employees.name}</td>
                               <td>{employees.position}</td>
                               <td>{employees.salary}</td>
                               <td>{employees.createdAt}</td>
                               <td>
                                   <i className="fa-solid fa-trash text-danger" onClick={() => dispatch(deleteEmployee(employees.vendorId))}></i>
                               </td>
                           </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
    )
}

export default Employees;