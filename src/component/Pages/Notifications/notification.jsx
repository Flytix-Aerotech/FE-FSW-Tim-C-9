import { HeadingContainer } from "../../Shared/heading_conteiner";
import { NotificationList } from "./notification_list";

var dummyData = [
  {
    type: "Promosi",
    message: "Dapatkan Potongan 50% Tiket!",
    additional_msg: "Syarat dan Ketentuan berlaku!",
    date: "20 Maret, 14:04",
    read: false
  },
  {
    type: "Notifikasi",
    message:
      "Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!",
    additional_msg: "Syarat dan Ketentuan berlaku!",
    date: "5 Maret, 14:04",
    read: true
  },
];

export default function Notification() {
  return (
    <div>
      <HeadingContainer
        title={"Notifikasi"}
        titleButton={"Beranda"}
        showSearch={true}
        showFilter={true}
        bgColor="bg-purple-300"
      />
      <main className="p-2 mx-[260px] my-5">
        <NotificationList notificationsData={dummyData} />
      </main>
    </div>
  );
}
