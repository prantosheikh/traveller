import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Shared/Container/Container';

const Login = () => {
    return (
        <Container>
            <div className='w-72 mx-auto text-center'>
                <h3 className='text-3xl font-semibold my-2'>Log In</h3>
                <p className='text-[20px] font-semibold'>We're glad to see you again!</p>
                <p className='text-base text-gray-700 mt-2'>Don't have an account? <Link className='text-orange-400' to='/signup'> Sign Up!</Link></p>
            </div>

            <div className='w-[50%] mx-auto border my-10 py-10 px-10'>

            </div>
        </Container>
    );
};

export default Login;