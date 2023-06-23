import { HeadingContainer } from "../../Shared/heading_container";
import FilterSidebar from "../../Shared/filter_sidebar";
import React from "react";
import { Chip } from "@material-tailwind/react";
import { FunnelIcon } from "@heroicons/react/24/outline";

export const TicketsLoading = ({ showFilter }) => {
    return (
        <div>
            <HeadingContainer
                title={"Pilih Penerbangan"}
                titleButton=" JKT > MLB - 2 Penumpang - Economy "
                titleButton2={"Ubah Pencarian"}
                bgColor="bg-purple-300"
                bgColor2="bg-green-500"
            />
            <main className="flex p-2 mx-[260px] my-20">
                <FilterSidebar />
                <div className="pl-10">
                    <p className="items-center translate-x-36">
                        Mencari penerbangan terbaik...
                    </p>
                </div>
                <div className="flex flex-row items-center -mr-12">
                    <img
                        src="illustration _Loading_.png"
                        className="w-[65%] -translate-x-11 -translate-y-14"
                        alt=""
                    />
                    {showFilter && (
                        <Chip
                            color="purple"
                            className="rounded-full text-gray-800 "
                            value="Filter"
                            variant="outlined"
                            icon={<FunnelIcon className="text-gray-800" />}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};
