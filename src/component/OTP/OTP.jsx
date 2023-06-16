import React, {useState} from "react";

const OTP = props =>{
  return(
    <>
    <header>
      <div className="justify-end">Ini Logo</div>
    </header>
    <div className="flex items-center justify-center h-screen">
      <div className="border-black-600">
        <header>
        <button>tombol.png</button>
        </header>
        <h1 className="text-2xl font-bold mb-4">OTP Input</h1>
        <div className="flex gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-8 h-8 text-center border border-gray-300 rounded"
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default OTP;