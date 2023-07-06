import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import HeaderHistory from "../../components/header/HeaderHistory";
import { BellIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../../components/format_display";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

function getRandomDate(minDate, maxDate) {
  // Convert minimum and maximum dates to timestamps
  const minTimestamp = minDate.getTime();
  const maxTimestamp = maxDate.getTime();

  // Generate a random timestamp between the minimum and maximum timestamps
  const randomTimestamp = Math.floor(Math.random() * (maxTimestamp - minTimestamp + 1)) + minTimestamp;

  // Convert the random timestamp back to a Date object
  const randomDate = new Date(randomTimestamp);

  return randomDate;
}

// Example usage
const minDate = new Date(2023, 7, 6); // January 1, 2023
const maxDate = new Date(2023, 7, 12); // December 31, 2023

const notif = [
  { date: getRandomDate(minDate, maxDate), type: "Notifikasi", field: "Selamat, tiket anda telah terbit. Silahkan cek email anda!" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Hemat 30% untuk pembelian di atas Rp8.000.000 menggunakan Gopay" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Sunday Deals, potongan Rp100.000 untuk 5 pembeli pertama" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Dapatkan Voucher Belanja dengan pembelian tiket min. Rp5.00.000" },
  { date: getRandomDate(minDate, maxDate), type: "Notifikasi", field: "Jangan lupa segera melakukan Check In!" },
  {
    date: getRandomDate(minDate, maxDate),
    type: "Notifikasi",
    field:
      "Diinformasikan penerbangan BDO-0201 dengan rute Surabaya-Bandung mengalami kertelambatan akibat kendala teknis. Cek jadwal perjalanan anda disini",
  },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Family Time! Diskon up to 70%" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Bingung mau ke Bali? Ga usah khawatir diskon up to 15%" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Dapatkan Cashback Rp50.000 untuk pengguna baru" },
  {
    date: getRandomDate(minDate, maxDate),
    type: "Notifikasi",
    field:
      "Diinformasikan penerbangan JOG-1002 dengan rute Jakarta-Yogyakarta mengalami kertelambatan akibat kendala teknis. Cek jadwal perjalanan anda disini",
  },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Promo spesial : diskon 10% dengan pembayaran menggunakan Akulaku" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Rek Ayo Rek : Diskon 25% khusus penerbangan dari atau ke Surabaya" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Jangan lewatkan cashback Rp250.000 bagi pengguna Akulaku" },
  { date: getRandomDate(minDate, maxDate), type: "Promosi", field: "Promo spesial diskon 5% pembelian tiket pulang-pergi" },
  {
    date: getRandomDate(minDate, maxDate),
    type: "Notifikasi",
    field:
      "Diinformasikan penerbangan JKT-1001 dengan rute Batam-Jakarta mengalami kertelambatan akibat kendala teknis. Cek jadwal perjalanan anda disini",
  },
];

const filter = notif.sort((a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateB - dateA;
});

const NotificationPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComplex />
          <HeaderHistory text="Notifikasi" />
          <div className="mb-16 mt-5 max-w-3xl w-full mx-auto">
            <div className="flex justify-center flex-col w-full max-w-screen-lg gap-10 px-4 py-2 m-auto lg:px-8 lg:pt-4">
              {filter.map((item, index) => (
                <div key={index} className="w-full flex flex-row gap-2 border-b border-black/20 pb-4">
                  <div className="w-5 h-5 flex justify-center items-center">
                    <BellIcon className="bg-purple-200 rounded-full p-1" color="white" />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-xs text-gray-500">{item.type}</p>
                      <div className="flex flex-row gap-2 items-center">
                        <p className="text-xs text-gray-500">{formatDate(item.date.toDateString())}</p>
                        <div className={`w-2 h-2 rounded-full ${item.type === "Notifikasi" ? "bg-red-500" : "bg-green-500"}`}></div>
                      </div>
                    </div>
                    <p className="mt-1">{item.field}</p>
                    {item.type === "Promosi" && <p className="text-xs text-gray-500">Syarat dan Ketentuan berlaku!</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NotificationPage;
