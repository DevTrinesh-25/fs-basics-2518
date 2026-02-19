
import { useForm } from 'react-hook-form';
import { useState } from "react";

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const loginUser = async (formValues: any) => {
        setIsLoading(true);
        setMessage('');
        try {
            const response = await fetch('http://localhost:4000/Login', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });
            const parsedResponse = await response.json();
            if (response.ok) {
                setMessage('Login successful!');
                // Optionally, redirect or store token here
            } else {
                setMessage(parsedResponse.message || 'Login failed');
            }
        } catch (error) {
            setMessage('An error occurred during login');
            console.error("Error during login:", error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="container py-3">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-6">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-4">
                            <h1 className="card-title h4 fw-bold text-center mb-3">Login</h1>
                            {message && (
                                <div className={`alert alert-${message.includes('successful') ? 'success' : 'danger'}`} role="alert">
                                    {message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit(loginUser)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address<span className='text-danger'>*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email address"
                                        {...register('email', {
                                            required: { value: true, message: 'Email is required' },
                                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format' }
                                        })}
                                    />
                                    {errors.email?.message && <p className="text-danger small mb-0">{String(errors.email.message)}</p>}
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
                                    <button type="submit" className="btn btn-success btn-md" disabled={isLoading}>
                                        {isLoading ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Login;