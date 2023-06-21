import { NotificationItem } from "./notification_item";

export const NotificationList = ({ notificationsData }) => {
  return (
    <div>
      {notificationsData?.map((item, idx) => (
        <NotificationItem
          type={item.type}
          message={item.message}
          additional_msg={item.additional_msg}
          date={item.date}
          dataIndex={idx}
          totalData={notificationsData.length}
          readStatus={item.read}
        />
      ))}
    </div>
  );
};
