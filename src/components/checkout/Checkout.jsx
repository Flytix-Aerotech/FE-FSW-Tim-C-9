import React from "react";
import { Card, CardBody, Typography, Input, Button } from "@material-tailwind/react";
import SeatPicker from "../seat_picker/SeatPicker";
import { useDispatch, useSelector } from "react-redux";
import { getBookingAction } from "../../config/Redux/action/bookAction";
import { useParams } from "react-router-dom";
import { checklist } from "../../assets/images";

const Checkout = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [seat, setSeat] = React.useState([]);

  const { book } = useSelector((state) => state.bookReducer);

  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    dispatch(getBookingAction(params.code));
  }, [dispatch, params.code]);

  React.useEffect(() => {
    if (book) {
      setBooks(book);
    }
  }, [book]);

  return (
    <div className="max-w-[500px] w-full">
      <Card className="p-3 border border-black/80 rounded-md shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Pemesan
        </Typography>
        <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg flex justify-between items-center">
          Data Diri Pemesan
          <img src={checklist} alt="" className="h-5 w-5" />
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input label="Nama Lengkap" size="lg" color="purple" value={books?.full_name || ""} readOnly />
          <Input label="Nama Keluarga" size="lg" color="purple" value={books?.clan_name === "" ? "-" : books?.clan_name} readOnly />
          <Input label="Nomor Telepon" size="lg" color="purple" value={books?.phone_number || ""} readOnly />
          <Input label="Email" size="lg" color="purple" value={books?.email || ""} readOnly />
        </CardBody>
      </Card>
      <Card className="p-3 mt-4 border border-black/80 rounded-md shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Penumpang
        </Typography>
        {books?.passengers?.map((item, index) => (
          <div key={index} className="data-number-one">
            <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg flex justify-between items-center">
              Data Diri Penumpang {index + 1} - Adult
              <img src={checklist} alt="" className="h-5 w-5" />
            </Typography>
            <CardBody className="flex flex-col gap-4">
              <Input label="Nama Lengkap" size="lg" color="purple" value={item?.full_name === null ? "-" : item?.full_name} readOnly />
              <Input label="Nama Keluarga" size="lg" color="purple" value={item?.clan_name === null ? "-" : item?.clan_name} readOnly />
              <Input type="date" label="Tanggal Lahir" size="lg" color="purple" value={item?.birth_date === null ? "-" : item?.birth_date} readOnly />
              <Input label="Kewarganegaraan" size="lg" color="purple" value={item?.nationality === null ? "-" : item?.nationality} readOnly />
              <Input label="KTP/Paspor" size="lg" color="purple" value={item?.nik_number === null ? "-" : item?.nik_number} readOnly />
            </CardBody>
          </div>
        ))}
      </Card>
      <SeatPicker
        setSeat={setSeat}
        classType="success-seat-header"
        typePrice={`${books?.ticket?.type_of_class} - ${books?.total_booking || seat} Seats Chosen`}
        disabled={true}
      />
      <Button type="submit" color="gray" className="mt-4 w-full" disabled>
        Simpan
      </Button>
    </div>
  );
};

export default Checkout;
