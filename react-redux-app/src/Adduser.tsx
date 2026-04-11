import { useSelector, useDispatch } from 'react-redux';
import { useEffect, fetchUsers } from './slices/users.slice';
import { useEffect } from 'react';
import { useState } from 'react';

function Users() {
    const dispatch = useDispatch<any>();
    const { isLoading, data } = useSelector((state: any) => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
};

const users = () => {
    const dispatch = useDispatch<any>();

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addUser(formData));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    );
};

export default users;