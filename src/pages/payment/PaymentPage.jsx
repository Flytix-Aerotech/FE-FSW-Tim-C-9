import React from "react";
import FlightDetail from "../../components/flight_detail/FlightDetail";
import PaymentMethod from "../../components/payment_method/PaymentMethod";
import NavbarComplex from "../../components/navbar/Navbar";
import HeaderCheckout from "../../components/header/HeaderCheckout";
import { useParams } from "react-router-dom";
import { formatDate } from "../../components/format_display";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";
import PartialLoading from "../../components/loading/PartialLoading";

const Payment = () => {
  const params = useParams();
  const [deadline, setDeadline] = React.useState(null);
  const { isLoading } = useSelector((state) => state.authReducer);
  const paymentLoading = useSelector((state) => state.paymentReducer.isLoading);

  React.useEffect(() => {
    const calculateDeadline = () => {
      const currentTime = new Date();
      const nextDay = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
      setDeadline(nextDay);
    };

    calculateDeadline();

    const timer = setInterval(calculateDeadline, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComplex />
          <HeaderCheckout text={`Selesaikan Pembayaran sampai ${formatDate(deadline)} 23:59`} colorAlert="red" />
          <div className="mb-16">
            <div className="flex flex-wrap justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
              {paymentLoading ? (
                <PartialLoading />
              ) : (
                <>
                  <PaymentMethod />
                  <FlightDetail buttonTrigger={false} text="Booking Code: " code={params.code} />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Payment;
