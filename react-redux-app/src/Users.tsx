import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './slices/users.slice';
import { useEffect } from 'react';
/*import { addUser } from './slices/users.slice';
import { useState } from 'react';*/

function Users() {
    const dispatch = useDispatch<any>();
    const { isLoading, data } = useSelector((state: any) => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Users</h1>
              <button className="btn btn-success mb-4" onClick={() => dispatch(fetchUsers())}>Add User</button>
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {data.map((user: any, index: number) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {user.name.firstname} {user.name.lastname}
                                    </h5>
                                    <p className="card-text"><strong>Username:</strong> {user.username}</p>
                                    <p className="card-text"><strong>Password:</strong> {user.password}</p>
                                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                                    <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Users;