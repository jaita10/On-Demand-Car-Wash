import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import VariableForm from './VariableForm';
import { useSelector } from 'react-redux';

const Cmp = (props) => {
    const stage = useSelector(state=>state.stage);
    
    return (
        <>
            {/* <div style={{ height: '80vw', backgroundImage: `url("./TAXI.jpg")`, backgroundSize: 'cover' }}> */}
                {/* <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<VariableForm type='login' />} />
                    <Route path='/login/phone' element={<VariableForm type='phone' /> }/>
                    <Route path='/login/phone/registerCustomer' element={<VariableForm type='customer' /> }/>
                    <Route path='/login/phone/registerDriver' element={<VariableForm type='driver' /> }/>
                    <Route path='/login/phone/registerCustomer/login' element={<VariableForm type='login' />}/>
                    <Route path='/login/phone/registerDriver/login' element={<VariableForm type='login' />}/>
                </Routes> */}
            {/* </div> */}
        </>
    );
}

export default Cmp;