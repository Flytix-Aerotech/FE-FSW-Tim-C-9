import { HeadingContainer } from "../../Shared/heading_container";
import FilterSidebar from "../../Shared/filter_sidebar";
import { useState, useEffect } from "react";


  
export const TicketsLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <HeadingContainer
        title={"Pilih Penerbangan"}
        titleButton={"JKT > MLB - 2 Penumpang - Economy".toLowerCase()}
        titleButton2={"Ubah Pencarian"}
        bgColor="bg-purple-300"
        bgColor2="bg-green-500"
      />

      <main className="flex p-2 mx-[260px] my-20">
        <FilterSidebar />
        <div className="relative">
      {isLoading ? (
        <div className="h-2 bg-gray-300">
          <div className="h-full bg-purple-500 animate-slide" />
        </div>
      ) : (
        <div>
          {/* Tampilkan konten setelah loading selesai */}
          <h1>Contoh Konten</h1>
          <p>Ini adalah konten setelah loading selesai.</p>
        </div>
      )}
    </div>
        <div className="pl-10">
          <p>Mencari penerbangan terbaik...</p>
        </div>
        <div className="flex flex-row items-center">
          <img src="illustration _Loading_.png" className="w-auto m-5" alt="" />
        </div>
      </main>
    </div>
  );
};
