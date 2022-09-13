import React from 'react';
import NewNavbar from '../FrontPage/NewNavbar';
import RegisterForm from './RegisterForm';

const RegisterPage = props => {
    return (
        <div>
            <NewNavbar />
            <div>
                <div className="container-fluid" style={{ backgroundImage: `url(./carwash_main.jpg)`, backgroundSize: 'cover', height: '100vh' }}>
                    <div className="card m-auto" id="register-block" >
                        <div className="card-body text-center">
                            <div className='rounded' id='registerTitle'>
                            <h3 className="card-title mb-2 fw-bold fs-1 py-2">CARWASH</h3>
                            </div>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;