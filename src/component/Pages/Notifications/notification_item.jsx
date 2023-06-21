import { BellIcon } from "@heroicons/react/24/outline";

export const NotificationItem = ({
  type,
  message,
  additional_msg,
  date,
  readStatus,
  dataIndex,
  totalData,
}) => {
  return (
    <div className="">
      <div className="w-full flex flex-row gap-2 m-6">
        <div className="w-5 h-5 flex justify-center items-center">
          <BellIcon className="bg-purple-200 rounded-full p-1" color="white" />
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-between w-full">
            <p className="text-xs text-gray-500">{type}</p>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-xs text-gray-500">{date}</p>
              <div className={`w-2 h-2 rounded-full ${readStatus ? "bg-red-500" : "bg-green-500"}`}></div>
            </div>
          </div>
          <p>{message}</p>
          {additional_msg !== "" && <p className="text-xs text-gray-500">Syarat dan Ketentuan berlaku!</p>}
        </div>
      </div>
      {dataIndex !== totalData-1 && (
        <hr className="border-solid border-gray-500 m-3 w-full"></hr>
      )}
    </div>
  );
};
