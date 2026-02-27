import { useForm } from 'react-hook-form';
import { useState } from "react";

interface User {
    email: string;
    fullName: string;
    mobileNo: string;
    password: string;
}

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const [message, setMessage] = useState('');

    const registerUser = async (formValues: User) => {
        setMessage('');
        try {
            const response = await fetch('http://localhost:4000/users/auth', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });
            const parsedresponse = await response.json();
            if (response.ok) {
                setMessage('Registration successful!');
                // Optionally, redirect or store token here
            } else {
                setMessage(parsedresponse.message || 'Registration failed');
            }
        } catch (error) {
            setMessage('Registration failed');
            console.error("Error fetching login:", error);
        }
    };

    return (
        <div className="container py-3">
            <div className="row justify-content-center">
                {/* wider columns for larger form */}
                <div className="col-12 col-sm-16 col-md-9">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-4">
                            <h1 className="card-title h4 fw-bold text-center mb-3">Register</h1>

                            <form onSubmit={handleSubmit(registerUser)}>
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label">Email address<span className='text-danger'>*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email Address"
                                        {...register('email', { 
                                            required: { value: true, message: 'Email is required' }, 
                                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format'} 
                                        })}
                                    />
                                    {errors.email?.message && <p className="text-danger small mb-0">{String(errors.email.message)}</p>}
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="full-name" className="form-label">Full Name<span className='text-danger'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="full-name"
                                        placeholder="Full Name"
                                        {...register('fullName', { 
                                            required: { value: true, message: 'Fullname is required' },
                                            pattern: { value: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/, message: 'Enter a valid full name (letters only, first and last name required)' }
                                        })}
                                    />
                                    {errors.fullName?.message && <p className="text-danger small mb-0">{String(errors.fullName.message)}</p>}
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="mobile-no" className="form-label">Mobile No<span className='text-danger'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile-no"
                                        placeholder="Mobile No"
                                        {...register('mobileNo', { 
                                            required: { value: true, message: 'Mobile No is required' },
                                            pattern: { value: /^(?:\+91|91)?[6-9]\d{9}$/, message: 'Enter a valid Indian mobile number (with or without +91)' }
                                        })}
                                    />
                                    {errors.mobileNo?.message && <p className="text-danger small mb-0">{String(errors.mobileNo.message)}</p>}
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="password" className="form-label">Password<span className='text-danger'>*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        {...register('password', { 
                                            required: { value: true, message: 'Password is required' },
                                            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: 'Use 8+ chars with uppercase, lowercase, digit and special character (!@#$%^&*)' }
                                        })}
                                    />
                                    {errors.password?.type === 'pattern' ? (
                                        <div>
                                            <p className="form-text small mb-0 mt-1 text-danger">Password must have:</p>
                                            <ul className="form-text small list-unstyled mb-0 ps-3 text-danger">
                                                <li>Minimum 8 characters</li>
                                                <li>At least 1 uppercase letter</li>
                                                <li>At least 1 lowercase letter</li>
                                                <li>At least 1 digit</li>
                                                <li>At least 1 special character (e.g. !@#$%^&*)</li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <>
                                            {errors.password?.message && <p className="text-danger small mb-0 mt-1">{String(errors.password.message)}</p>}
                                        </>
                                    )}
                                </div>
                            
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success btn-md">
                                        Register
                                    </button>
                                </div>
                                {message && <div className="mt-3 text-center text-info">{message}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
