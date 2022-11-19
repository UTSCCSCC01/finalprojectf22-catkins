import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store';
import isStrongPassword from 'validator/lib/isStrongPassword';
import isEmail from 'validator/lib/isEmail';
import axios from "axios";


export default function LoginComponent() {
    const dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [mode, setMode] = useState("Login");

    const [error, setError] = useState("");

    const onPasswordChange = (e) => {
        setUserPassword(e.target.value)
    }

   const onUserNameChange = (e) => {
        setUserEmail(e.target.value)

    }

    const onSubmitRegister = (e) => {

        e.preventDefault();
        if (!isEmail(userEmail)){
            setError("Please provide a valid email!");
            return;
        }
        if (!isStrongPassword(userPassword)){
            setError("Please provide a valid Password! \n\
            it should have at least one capital letter, be 8 char length minimum, \n \
             have at least one special character and at least one number \n \
            ");
            return;
        }

        axios.post("http://localhost:5000/api/register", {
            username: userEmail,
            password:userPassword
        }).then(() => {
            dispatch(loginActions.login(userEmail));
        }).catch((err) => {
            if (err.response.status === 400) {
                setError("This user already exists");
            }
        })

    }

    const onToggleMode = () => {
        setMode(prevState => prevState === "Register" ? 'Login' : 'Register');
    }

    const onSubmitLogin = (e) => {

        e.preventDefault();
        if (!isEmail(userEmail)){
            setError("Please provide a valid email!");
            return;
        }

        axios.post("http://localhost:5000/api/login", {
            username: userEmail,
            password:userPassword
        }).then((res) => {

           if (res.status === 200) return dispatch(loginActions.login(userEmail));
           else return setError('Uknown error happened. Try again');
        }).catch((err) => {
            if (err.response.data === "No user"){
                setError('There is no such user');
            } else if (err.response.data === 'Missing username or password'){
                setError('Missing username or password');
            } else if (err.response.status === 400) {
                setError('Wrong password');
            } else {
                setError('Server error happened. Try again');
            }
        })

    }


  return (
    <>
    <div className=" border border-[#211D1D] border-opacity-25
     w-2/3 p-6 h-1/3 bg-[#0A83F3] flex
     justify-center rounded-xl items-center
     bg-opacity-10">

    <form onSubmit={mode === "Register" ? onSubmitLogin : onSubmitRegister} className='flex w-2/3 flex-col items-center'>
    <label className='m-2 text-lg'>EMAIL</label>
    <input onChange={onUserNameChange} type="text" className='w-full mb-5 border border-[#211D1D] border-opacity-25'></input>
    <label className='text-lg'>PASSWORD</label>
    <input type="password" onChange={onPasswordChange} className='w-full m-2 border border-[#211D1D] border-opacity-25'></input>
    <button type="submit" className='w-1/3 bg-[#C4E8FF] mt-3 rounded-xl p-1 text-xs'>
    {mode === "Register" ? 'Log in' : 'Register' }
    </button>

   </form>



   </div>
   <button onClick={onToggleMode}
     className='w-2/3 bg-[#C4E8FF] my-4 rounded-xl p-1 text-xs'>
        Click here to {mode === "Register" ? 'create a new account ' : 'login to your account ' } instead
        </button>
   <p className='text-2xl text-[#FD0808] mt-2 mx-52 text-center'>{error}</p>

</>
  )
}
