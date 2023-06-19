import { HeadingContainer } from "../../Shared/heading_container";

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

export const TicketsSoldOut = () => {
  return (
    <div>
      <HeadingContainer
        title={"Detail Penerbangan"}
        titleButton={"JKT > MLB - 2 Penumpang - Economy".toLowerCase()}
        titleButton2={"Ubah Pencarian"}
        bgColor="bg-purple-300"
        bgColor2="bg-green-500"
        buttonDate={formatDate}
      />

      <main className="p-2 mx-[260px] my-5 justify-center">
        <div className="flex flex-col items-center">
          <img
            src="illustration _Search Engine_.png"
            className="w-[30%] m-5"
            alt=""
          />
          <div className="text-center m-5">
            <p>Maaf Tiket terjual habis!</p>
            <p className="text-purple-600">Coba cari perjalanan lainnya!</p>
          </div>
        </div>
      </main>
    </div>
  );
};
