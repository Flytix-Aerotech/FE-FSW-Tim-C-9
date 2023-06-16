import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const RegisterPage = props => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [name, setName] = useState("")


    return (
        <>
            <div className="flex justify justify-center item-center h-full">
                <form className="w-1/2 p-6">
                    <h2 className="text-2xl mb-10">Daftar</h2>
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
                                <CheckCircleIcon className="h-5 w-5" />
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
                        Sudah punya akun ? <a href="#" className="text-purple-600 ml-2">Masuk Disini</a>
                    </h2>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;