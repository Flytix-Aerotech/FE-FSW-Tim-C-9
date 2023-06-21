import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { binar } from "../../assets";

const ResetPage = props => {
    const [showPasswordold, setShowPasswordold] = useState(false);
    const [showPasswordnew, setShowPasswordnew] = useState(false);
    const [Password, SetPassword] = useState("");

    const toggleShowPasswordold = () => {
        setShowPasswordold(!showPasswordold);
    }
    const toggleShowPasswordnew = () => {
        setShowPasswordnew(!showPasswordnew);
    }

    

    return (
        <>
            <div className="flex flex-col w-full h-screen">
                <div className="h-full grid grid-cols-4">
                    <div className="col-span-2 h-screen">
                        <img src={binar} className="h-screen" />
                    </div>
                    <div className="col-span-2">
                        <div className='flex justify-center items-center h-full'>
                            <form className='w-3/4 p-6'>
                                <h2 className='text-2xl mb-10'>Reset Password</h2>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='mb-2 block text-xs'>Password lama</label>
                                    <div>
                                    <div className="relative">
                                        <input
                                            type={showPasswordold ? "text" : "password"}
                                            placeholder='Silahkan masukkan password lama'
                                            className='w-full border rounded-lg p-2' />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                            onClick={toggleShowPasswordold}
                                        >
                                            {
                                                showPasswordold ?
                                                    (<EyeIcon className="h-5 w-5" />) : (<EyeSlashIcon className="h-5 w-5" />)
                                            }
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className="mb-2 block text-xs">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPasswordnew ? "text" : "password"}
                                            placeholder='Silahkan masukkan password baru'
                                            className='w-full border rounded-lg p-2' />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                            onClick={toggleShowPasswordnew}
                                        >
                                            {
                                                showPasswordnew ?
                                                    (<EyeIcon className="h-5 w-5" />) : (<EyeSlashIcon className="h-5 w-5" />)
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4'>
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPage;