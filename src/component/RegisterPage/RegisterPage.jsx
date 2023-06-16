import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const RegisterPage = props => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [name, setName] = useState("")


    return (
        <>
            <div className="flex flex-col w-full h-screen ">
                <div className="h-full grid grid-cols-4">
                    <div className="bg-blue-600 text-center">
                        INI GAMBAR GIMANA NASIBNYA ???
                    </div>
                    <div className="col-span-3">
                        <div className="flex justify-center items-center h-screen">
                            <form className="w-1/2">
                                <h2 className="text-2xl mb-8">Daftar</h2>
                                <div className="mb-4">
                                    <label className="text-xs block mb-2">Nama</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Masukkan nama anda"
                                            className="w-full border rounded-lg p-2"
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-xs block mb-2">Email</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Masukkan alamat Email"
                                            className="w-full border rounded-lg p-2"
                                        >
                                        </input>
                                        <div className="absolute top-1/2 right-2 tranform -translate-y-1/2">
                                            <CheckCircleIcon className="h-8 w-8 stroke-red-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-xs block mb-2">No.Telepon</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Masukkan nomor telepon"
                                            className="w-full border rounded-lg p-2"
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-xs block mb-2">Buat Password</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Masukkan password"
                                            className="w-full border rounded-lg p-2"
                                        >
                                        </input>
                                    </div>
                                </div>
                                <button className="w-full bg-purple-600 border rounded-lg p-2">Daftar</button>
                                <h2 className="text-center mt-5">
                                    Sudah punya akun ? <Link to="/login" className="text-purple-600 ml-2"> Login Disini</Link>
                                </h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;