import React from "react";
import { Card, CardBody, Typography, Input, Select, Option, Switch, Button } from "@material-tailwind/react";
import SeatPicker from "../seat_picker/SeatPicker";

const Biodata = () => {
  const [user, setUser] = React.useState(false);
  const [passenger, setPassenger] = React.useState(false);
  const total = localStorage.getItem("totalPassenger");

  return (
    <form action="" className="max-w-[500px] w-full">
      <Card className="p-3 border-2 rounded-sm shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Pemesan
        </Typography>
        <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg">
          Data Pemesan
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input label="Nama Lengkap" size="lg" color="purple" />
          <span className="flex justify-between">
            <p className="text-sm">Punya Nama Keluarga?</p> <Switch id="user" onClick={() => setUser(!user)} />
          </span>
          {user ? <Input label="Nama Keluarga" size="lg" color="purple" /> : null}
          <Input label="Nomor Telepon" size="lg" color="purple" />
          <Input label="Email" size="lg" color="purple" />
        </CardBody>
      </Card>
      {Array.from({ length: total }, (_, index) => (
        <Card key={index} className="p-3 mt-4 border-2 rounded-sm shadow-none">
          <Typography variant="h5" color="black" className="pt-2 pb-4">
            Isi Data Penumpang
          </Typography>
          <div className="data-number-one">
            <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg">
              Data Diri Penumpang {index + 1} - Adult
            </Typography>
            <CardBody className="flex flex-col gap-4">
              <Select size="lg" label="Select Version" color="purple">
                <Option>Mr. </Option>
                <Option>Mrs. </Option>
              </Select>
              <Input label="Nama Lengkap" size="lg" color="purple" />
              <span className="flex justify-between">
                <p className="text-sm">Punya Nama Keluarga?</p> <Switch id={`passenger${index}`} onClick={() => setPassenger(!passenger)} />
              </span>
              {passenger ? <Input label="Nama Keluarga" size="lg" color="purple" /> : null}
              <Input type="date" label="Tanggal Lahir" size="lg" color="purple" />
              <Input label="Kewarganegaraan" size="lg" color="purple" />
              <Input label="KTP/Paspor" size="lg" color="purple" />
            </CardBody>
          </div>
        </Card>
      ))}
      <SeatPicker />
      <Button type="submit" color="purple" className="mt-4 w-full">
        Simpan
      </Button>
    </form>
  );
};

export default Biodata;
