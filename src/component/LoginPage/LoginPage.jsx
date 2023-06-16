import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const LoginPage = props => {
    const [showPassword, setShowPassword] = useState(false);
    const [setUsername, setEnteredUsername] = useState("");
    const [Password, SetPassword] = useState("");

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div className="flex flex-col w-full h-screen">
                <div className="h-full grid grid-cols-4">
                    <div className="bg-blue-600 text-center">
                        Ini harusnya gambar
                    </div>
                    <div className="col-span-3">
                        <div className='flex justify-center items-center h-full'>
                            <form className='w-1/2 p-6'>
                                <h2 className='text-2xl mb-10'>Login</h2>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='mb-2 block text-xs'>Email/No.Telepon</label>
                                    <input
                                        type="email"
                                        placeholder='Silahkan Masukkan Email anda'
                                        className='w-full border rounded-lg p-2'>
                                    </input>
                                </div>
                                <div className='mb-4'>
                                    <div className='mb-2 block text-xs flex justify-between'>
                                        <label>Password</label>
                                        <a href='#'>Lupa Password ?</a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Silahkan Masukkan password anda'
                                            className='w-full border rounded-lg p-2' />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                            onClick={toggleShowPassword}
                                        >
                                            {
                                                showPassword ?
                                                    (<EyeIcon className="h-5 w-5" />) : (<EyeSlashIcon className="h-5 w-5" />)
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4'>
                                        Masuk
                                    </button>
                                </div>
                                <h2 className='mt-6 text-center '>
                                    Belum punya akun ?
                                    <Link to="/register" className="text-purple-600 ml-2">Daftar disini</Link>
                                </h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;