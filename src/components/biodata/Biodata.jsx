import React from "react";
import { Card, CardBody, Typography, Input, Switch, Button } from "@material-tailwind/react";
import SeatPicker from "../seat_picker/SeatPicker";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBookingAction } from "../../config/Redux/action/bookAction";
import { useNavigate, useParams } from "react-router-dom";
import { checklist } from "../../assets/images";

const Biodata = () => {
  const params = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [user, setUser] = React.useState(false);
  const [seat, setSeat] = React.useState([]);
  const adult = localStorage.getItem("adult");
  const baby = localStorage.getItem("baby") || 0;

  const seatpicker = seat.map((item) => {
    return { seat_number: item };
  });

  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "passengers",
  });

  const { isSuccess } = useSelector((state) => state.bookReducer);

  const onSubmit = (value) => {
    const data = {
      books: {
        full_name: value.full_name,
        clan_name: value.clan_name === undefined ? "" : value.clan_name,
        email: value.email,
        phone_number: value.phone_number,
      },
      passengers: value.passengers,
      seats: seatpicker,
    };
    dispatch(addBookingAction(data, history, params.id, adult, baby));
  };

  return (
    <form className="max-w-[500px] w-full" onSubmit={handleSubmit(onSubmit)}>
      <Card className="p-3 border border-black/80 rounded-md shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Pemesan
        </Typography>
        <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg flex justify-between items-center">
          Data Diri Pemesan
          {isSuccess ? <img src={checklist} alt="" className="w-5 h-5" /> : ""}
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input label="Nama Lengkap" size="lg" color="purple" {...register("full_name", { required: true })} />
          <span className="flex justify-between">
            <p className="text-sm">Punya Nama Keluarga?</p> <Switch id="user" color="purple" onClick={() => setUser(!user)} />
          </span>
          {user ? <Input label="Nama Keluarga" size="lg" color="purple" {...register("clan_name")} /> : null}
          <Input label="Nomor Telepon" size="lg" color="purple" {...register("phone_number", { required: true })} />
          <Input label="Email" size="lg" color="purple" {...register("email", { required: true })} />
        </CardBody>
      </Card>
      <Card className="p-3 mt-4 border border-black/80 rounded-md shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Penumpang
        </Typography>
        {fields.map((item, index) => (
          <div key={item.id + 1} className="data-number-one">
            <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg flex justify-between items-center">
              Data Diri Penumpang {index + 1} - Adult
              {isSuccess ? <img src={checklist} alt="" className="w-5 h-5" /> : ""}
            </Typography>
            <CardBody className="flex flex-col gap-4">
              <Input label="Nama Lengkap" size="lg" color="purple" {...register(`passengers.${index}.full_name`, { required: true })} />
              <span className="flex justify-between">
                <p className="text-sm">Punya Nama Keluarga?</p>{" "}
                <Switch id={`passenger${index}`} color="purple" onClick={() => handleOpen(index + 1)} />
              </span>
              {open === index + 1 ? <Input label="Nama Keluarga" size="lg" color="purple" {...register(`passengers.${index}.clan_name`)} /> : null}
              <Input type="date" label="Tanggal Lahir" size="lg" color="purple" {...register(`passengers.${index}.birth_date`, { required: true })} />
              <Input label="Kewarganegaraan" size="lg" color="purple" {...register(`passengers.${index}.nationality`, { required: true })} />
              <Input label="KTP/Paspor" size="lg" color="purple" {...register(`passengers.${index}.nik_number`, { required: true })} />
              <Button color="red" size="sm" type="button" onClick={() => remove(index)} className="w-max ml-auto">
                Hapus Penumpang
              </Button>
            </CardBody>
          </div>
        ))}
        <Button type="button" color="purple" onClick={fields.length <= adult - 1 ? () => append({}) : null}>
          Tambah Penumpang
        </Button>
      </Card>
      <SeatPicker setSeat={setSeat} classType="seat-header" typePrice={`Economy - 64 Seats Available`} disabled={false} />
      <Button type="submit" color="purple" className="mt-4 w-full">
        Simpan
      </Button>
    </form>
  );
};

export default Biodata;
