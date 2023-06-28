import { BrowserRouter, Routes, Route} from "react-router-dom";
import Notification from "../../component/Pages/Notifications/notification";
import { OrderHistory } from "../../component/Pages/Orders/order_history"; 
import UpdateAccount from "../../component/Pages/Account/update_account";
import Example from "../../component/Pages/Orders/order1"; 
import Payment from "../../component/Pages/Orders/coba";

const Approute = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/akun" element={<UpdateAccount/>} />
            <Route path="/Riwayat" element={<OrderHistory/>} />
            <Route path="/Notif" Component={Notification} />
            <Route path="/test" Component={Example} />
            <Route path="/testing" Component={Payment} />
        </Routes>
        </BrowserRouter>
    );
};

export default Approute;