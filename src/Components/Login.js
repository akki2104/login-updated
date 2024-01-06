import React from 'react'
import { useRef, useState } from 'react'
import { checkValidData } from '../utils/validation'
import axios from 'axios'
const Login = () => {
  const username = useRef(null)
  const passWord = useRef(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleButtonClick = async () => {
    const message = checkValidData(passWord.current.value)
    if (message) {
      setErrorMessage(message)
    }

    // const email=username.current.value
    // const password=passWord.current.value
    const details = {
      "email":username.current.value,
      "password":passWord.current.value
    }
    try {
      //send details to backend server
      const response = await axios.post("http://localhost:4000/auth/doclogin",details)
      console.log(response.status)
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div>


      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          Login In
        </h1>

        <input
          ref={username}
          type="text"
          placeholder="Username"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={passWord}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          Login
        </button>

      </form>
    </div>

  )
}

export default Login