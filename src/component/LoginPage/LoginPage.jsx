import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import { binar } from "../../assets";

const LoginPage = props => {
    const [showPassword, setShowPassword] = useState(false);
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (enteredUsername === "") {
            setAlertMessage("Invalid Username")
        } else if (enteredPassword === "") {
            setAlertMessage("Invalid Password")
        } else {
            setEnteredUsername("")
            setEnteredPassword("")
            setShowAlert(false)
        }

        setShowAlert(true);
    }
    return (
        <>
            <div className="flex flex-row">
                <div className="flex w-full">
                    <img src={binar} className="h-screen" />
                </div>
                <div className="flex w-full justify-center items-center">
                    <form className='w-3/4' onSubmit={handleSubmit}>
                        <h2 className='text-2xl font-bold mb-6'>Masuk</h2>
                        <div className='mb-4'>
                            <label htmlFor='email' className={`mb-2 block text-s ${showAlert && alertMessage === "Invalid Username" ? "text-red-500" : ""}`}>
                                {showAlert && alertMessage === "Invalid Username" ? "Invalid Username" : "Email/No.telpon"}
                            </label>

                            <input
                                type="email"
                                placeholder='Silahkan Masukkan Email anda'
                                className='w-full border-2 rounded-2xl p-2'
                                value={enteredUsername}
                                onChange={(e) => setEnteredUsername(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <div className='mb-2 block text-s flex justify-between'>
                                <label className={`${showAlert && alertMessage === "Invalid Password" ? "text-red-500" : ""}`}>
                                    {showAlert && alertMessage === "Invalid Password" ? "Invalid Password" : "Password"}
                                </label>
                                <Link to="/reset-password">Lupa Password ?</Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Silahkan Masukkan password anda'
                                    className={`w-full border-2 rounded-2xl p-2 ${showAlert && alertMessage === "Invalid Password" ? "border-red-500" : ""}`}
                                    value={enteredPassword}
                                    onChange={(e => setEnteredPassword(e.target.value))}
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    onClick={toggleShowPassword}
                                >
                                    {
                                        showPassword ?
                                            (<EyeIcon className="h-7 w-7" />) : (<EyeSlashIcon className="h-7 w-7" />)
                                    }
                                </button>
                            </div>
                        </div>
                        <div>
                            <button className='w-full bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 mt-4' type="submit">
                                Masuk
                            </button>
                        </div>
                        <h2 className='mt-6 text-center '>
                            Belum punya akun ?
                            <Link to="/register" className="text-purple-600 ml-2">Daftar disini</Link>
                        </h2>
                        {showAlert && (
                            <div className="flex justify-center mt-8">
                                <div className="bg-red-600 p-4 border rounded-2xl">
                                    <p className="text-white">{alertMessage}</p>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;