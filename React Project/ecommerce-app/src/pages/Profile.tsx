import { useState } from 'react';
import './profile.css';

function Profile() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const name: string = 'Adithya';
    const cityStyles = {
        color: 'green',
        fontSize: '20px'
    };

    const togglePasswordIcon = () => {
        setIsPasswordVisible(!isPasswordVisible);

        console.log(!isPasswordVisible);
    };

    return (
        <div className="my-5">
            <h2 className="text-center">Profile</h2>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h4>Name: <span style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>{name}</span></h4>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h5>City: <span style={cityStyles}>Pune</span></h5>
            </div>

            <i className={`fa-solid ${isPasswordVisible ? 'fa-eye-slash text-danger' : 'fa-eye text-success'} fs-3`}></i>

            <h3>Address: <span className='address'>2C,2nd Floor, Digital Edify, Madhapur, Hyderabad.</span></h3>

            <button onClick={togglePasswordIcon}>Toggle password icon</button>

        </div>
    )

}

export default Profile;