import "./App.css";
import { TicketsLoading } from "./components/Pages/Result/tickets_loading";
import { TicketsSoldOut } from "./components/Pages/Result/tickets_sold_out";
import AppRoute from "./config/Routes/approute";

// import SearchModal from "./components/modals/pencarian terkini";
// import ImageContainer from "./components/containers";
// import myImage from "./assets/Rectangle 137.png";
// import ChooseDate from "./components/modals/pilih tanggal";
// import { Navbar } from "./components/navbar";


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <SearchModal/>
      <ImageContainer imageUrl={myImage} altText="Diskon Hari ini 85%" />
      <ChooseDate/> */}
      {/* <TicketsSoldOut/>
      <TicketsLoading/> */}
      <AppRoute/>
    </div>
  );
}

export default App;
