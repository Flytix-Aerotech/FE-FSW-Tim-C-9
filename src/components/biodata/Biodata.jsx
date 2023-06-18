import React from "react";
import { Card, CardBody, Typography, Input, Select, Option, Switch } from "@material-tailwind/react";

const Biodata = () => {
  const [user, setUser] = React.useState(false);
  const [passengerOne, setPassengerOne] = React.useState(false);
  const [passengerTwo, setPassengerTwo] = React.useState(false);
  const [showPassenger, setShowPassenger] = React.useState(false);
  const handleInputUser = () => setUser(!user);
  const handleInputPassengerOne = () => setPassengerOne(!passengerOne);
  const handleInputPassengerTwo = () => setPassengerTwo(!passengerTwo);
  const handleInputShowPassenger = () => setShowPassenger(!showPassenger);

  return (
    <form action="" className="max-w-[500px] w-full">
      <Card className="p-3 border-2 rounded-sm shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Pemesan
        </Typography>
        <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg">
          Isi Data Pemesan
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input label="Nama Lengkap" size="lg" />
          <span className="flex justify-between">
            <p className="text-sm">Punya Nama Keluarga?</p> <Switch id="user" onClick={handleInputUser} />
          </span>
          {user ? <Input label="Nama Keluarga" size="lg" /> : null}
          <Input label="Nomor Telepon" size="lg" />
          <Input label="Email" size="lg" />
        </CardBody>
      </Card>
      <Card className="p-3 mt-4 border-2 rounded-sm shadow-none">
        <Typography variant="h5" color="black" className="pt-2 pb-4">
          Isi Data Penumpang
        </Typography>
        <div className="data-number-one">
          <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg">
            Data Diri Penumpang 1 - Adult
          </Typography>
          <CardBody className="flex flex-col gap-4">
            <Select size="lg" label="Select Version">
              <Option>Mr. </Option>
              <Option>Mrs. </Option>
            </Select>
            <Input label="Nama Lengkap" size="lg" />
            <span className="flex justify-between">
              <p className="text-sm">Punya Nama Keluarga?</p> <Switch id="passengerone" onClick={handleInputPassengerOne} />
            </span>
            {passengerOne ? <Input label="Nama Keluarga" size="lg" /> : null}
            <Input type="date" label="Tanggal Lahir" size="lg" />
            <Input label="Kewarganegaraan" size="lg" />
            <Input label="KTP/Paspor" size="lg" />
          </CardBody>
        </div>
        <span className="flex justify-between mx-6 mt-2 mb-5">
          <p className="text-sm">Tambah Penumpang?</p> <Switch id="showpassenger" onClick={handleInputShowPassenger} />
        </span>
        {showPassenger ? (
          <div className="data-number-two">
            <Typography variant="paragraph" color="white" className="bg-[#3c3c3c] px-4 py-1 rounded-t-lg">
              Data Diri Penumpang 2 - Adult
            </Typography>
            <CardBody className="flex flex-col gap-4">
              <Select size="lg" label="Select Version">
                <Option>Mr. </Option>
                <Option>Mrs. </Option>
              </Select>
              <Input label="Nama Lengkap" size="lg" />
              <span className="flex justify-between">
                <p className="text-sm">Punya Nama Keluarga?</p> <Switch id="passengertwo" onClick={handleInputPassengerTwo} />
              </span>
              {passengerTwo ? <Input label="Nama Keluarga" size="lg" /> : null}
              <Input type="date" label="Tanggal Lahir" size="lg" />
              <Input label="Kewarganegaraan" size="lg" />
              <Input label="KTP/Paspor" size="lg" />
            </CardBody>
          </div>
        ) : null}
      </Card>
    </form>
  );
};

export default Biodata;
