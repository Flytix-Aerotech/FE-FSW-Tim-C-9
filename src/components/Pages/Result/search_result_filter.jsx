import React from "react";
import { useState } from "react";
import { List, ListItem, ListItemSuffix } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function SearchResultFilter() {
    const [showModal, setShowModal] = React.useState(false);
    const [selected, setSelected] = useState(false);

    const handleItemClick = () => {
        setSelected(!selected);
    };
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open small modal
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <List className="flex">
                                        <ListItem
                                            className={`w-full hover:bg-purple-500 hover:text-white ${
                                                selected
                                                    ? "bg-purple-500 text-white"
                                                    : ""
                                            }`}
                                            onClick={handleItemClick}
                                            $
                                        >
                                            <span className="mr-2 font-bold">
                                                Harga
                                            </span>
                                            <span className="font-sans">
                                                - Termurah
                                            </span>
                                            <CheckCircleIcon className="icon-green h-5 w-5 ml-auto" />
                                        </ListItem>
                                        <hr className="border-t border-gray-300" />
                                        <ListItem className="w-full hover:bg-purple-500 hover:text-white">
                                            <span className="mr-2 font-bold">
                                                Durasi
                                            </span>
                                            <span className="font-italic">
                                                - Terpendek
                                            </span>
                                            <ListItemSuffix>
                                                <CheckCircleIcon className="icon-purple h-5 w-5 ml-auto" />
                                            </ListItemSuffix>
                                        </ListItem>
                                        <hr className="border-t border-gray-300" />
                                        <ListItem className="w-full hover:bg-purple-500 hover:text-white">
                                            <span className="mr-2 font-bold">
                                                Keberangkatan
                                            </span>
                                            <span className="font-italic">
                                                - Paling Awal
                                            </span>
                                            <ListItemSuffix>
                                                <CheckCircleIcon className="icon-purple h-5 w-5 ml-auto" />
                                            </ListItemSuffix>
                                        </ListItem>
                                        <hr className="border-t border-gray-300" />
                                        <ListItem className="w-full hover:bg-purple-500 hover:text-white">
                                            <span className="mr-2 font-bold">
                                                Keberangkatan
                                            </span>
                                            <span className="font-italic">
                                                - Paling Akhir
                                            </span>
                                            <ListItemSuffix>
                                                <CheckCircleIcon className="icon-purple h-5 w-5 ml-auto" />
                                            </ListItemSuffix>
                                        </ListItem>
                                        <hr className="border-t border-gray-300" />
                                        <ListItem className="w-full hover:bg-purple-500 hover:text-white">
                                            <span className="mr-2 font-bold">
                                                Kedatangan
                                            </span>
                                            <span className="font-italic">
                                                - Paling Awal
                                            </span>
                                            <ListItemSuffix>
                                                <CheckCircleIcon className="icon-purple h-5 w-5 ml-auto" />
                                            </ListItemSuffix>
                                        </ListItem>
                                        <hr className="border-t border-gray-300" />
                                        <ListItem className="w-full hover:bg-purple-500 hover:text-white">
                                            <span className="mr-2 font-bold">
                                                Kedatangan
                                            </span>
                                            <span className="font-italic">
                                                - Paling Akhir
                                            </span>
                                            <ListItemSuffix>
                                                <CheckCircleIcon className="icon-purple h-5 w-5 ml-auto" />
                                            </ListItemSuffix>
                                        </ListItem>
                                        <hr className="border-t border-gray-300" />
                                    </List>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-purple-500 text-white active:bg-purple-600 w-full px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Pilih
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
