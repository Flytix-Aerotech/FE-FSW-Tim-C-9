import { HeadingContainer } from "../../Shared/heading_container";
import FilterSidebar from "../../Shared/filter_sidebar";

export const SearchResultEmpty = () => {
  return (
    <div>
      <HeadingContainer
        title={"Pilih Penerbangan"}
        titleButton={"JKT > MLB - 2 Penumpang - Economy"}
        titleButton2={"Ubah Pencarian"}
        bgColor="bg-purple-300"
        bgColor2="bg-green-500"
      />

      <main className="flex p-2 mx-[260px] my-20">
        <FilterSidebar />
        <div className="flex flex-col items-center">
          <img
            src="Ilustration Result Empty.png"
            className="w-[70%] m-5"
            alt=""
          />
          <div className="text-center m-5">
            <p>Maaf, pencarian Anda tidak ditemukan </p>
            <p className="text-purple-600">Coba cari perjalanan lainnya!</p>
          </div>
        </div>
      </main>
    </div>
  );
};
