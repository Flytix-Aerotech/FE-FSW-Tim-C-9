import { Button } from "@material-tailwind/react";
import { HeadingContainer } from "../../Shared/heading_conteiner";

export const OrderHistory = () => {
  return (
    <div>
      <HeadingContainer
        title={"Riwayat Pemesanan"}
        titleButton={"Beranda"}
        showSearch={true}
        showFilter={true}
        bgColor="bg-purple-300"
      />

      <main className="p-2 mx-[260px] my-5">
        <div className="flex flex-col items-center">
          <img src="empty_history.png" className="w-[20%] m-5" alt="" />
          <div className="text-center m-5">
            <p className="text-purple-600">Oops! Riwayat pesanan kosong!</p>
            <p>Anda belum melakukan pemesanan penerbangan</p>
          </div>
          <Button size="sm" color="purple" className="w-[20%]">Cari Penerbangan</Button>
        </div>
      </main>
    </div>
  );
};
