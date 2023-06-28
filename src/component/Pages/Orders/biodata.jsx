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
    <form action="" className="max-w-[500px]">
        <p className="font-bold">Maret 2023</p>
      <Card>
        <div class="max-w-md rounded overflow-hidden shadow-lg mt-2 w-[500px] h-[200px]">
          <div class="px-2 py-2 border-purple-600 rounded-lg">
            <div class="font-bold bg-green-500 text-white mb-2 green-issue">Issued</div>
            <p class="text-gray-700 text-base">
              Jakarta
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div class="max-w-md rounded overflow-hidden shadow-lg mt-2 w-[500px] h-[200px]">
          <div class="px-2 py-2 border-purple-600 rounded-lg">
            <div class="font-bold bg-red-500 text-white mb-2 green-issue">Issued</div>
            <p class="text-gray-700 text-base">
              Jakarta
            </p>
          </div>
        </div>
      </Card>
      <p className="font-bold py-6">Februari 2023</p>
      <Card>
        <div class="max-w-md rounded overflow-hidden shadow-lg mt-2 w-[500px] h-[200px]">
          <div class="px-2 py-2 border-purple-600 rounded-lg">
            <div class="font-bold bg-green-500 text-white mb-2 green-issue">Issued</div>
            <p class="text-gray-700 text-base">
              Jakarta
            </p>
          </div>
        </div>
      </Card><Card>
        <div class="max-w-md rounded overflow-hidden shadow-lg mt-2 w-[500px] h-[200px]">
          <div class="px-2 py-2 border-purple-600 rounded-lg">
            <div class="font-bold bg-red-500 text-white mb-2 green-issue">Issued</div>
            <p class="text-gray-700 text-base">
              Jakarta
            </p>
          </div>
        </div>
      </Card>
      {/* <Card className="p-3 mt-4 border-2 rounded-sm shadow-none">
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
      </Card> */}
    </form>
  );
};

export default Biodata;