import { Card, CardBody, Typography } from "@material-tailwind/react";
import { destinasi1, destinasi2 } from "../../assets/images";

const ShowDestinasiFavorit = () => {
  return (
    <div className="w-full max-w-4xl m-auto mb-16">
      <div className="flex flex-wrap justify-center gap-6">
        <Card className="w-[200px] mt-6">
          <img src={destinasi1} alt="" className="object-cover h-32 rounded-t-xl" />
          <CardBody className="p-2">
            <Typography variant="small" color="blue-gray" className="mb-2 font-semibold whitespace-nowrap">
              Solo &rarr; Bali
            </Typography>
            <Typography variant="small" color="purple" className="mb-2 font-semibold whitespace-nowrap">
              Air Asia
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              20 - 30 Maret 2023
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              Mulai dari <span className="text-red-500">IDR 950.000</span>
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-[200px] mt-6">
          <img src={destinasi2} alt="" className="object-cover h-32 rounded-t-xl" />
          <CardBody className="p-2">
            <Typography variant="small" color="blue-gray" className="mb-2 font-semibold whitespace-nowrap">
              Surabaya &rarr; Malang
            </Typography>
            <Typography variant="small" color="purple" className="mb-2 font-semibold whitespace-nowrap">
              Singapore Airline
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              20 - 30 Maret 2023
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              Mulai dari <span className="text-red-500">IDR 950.000</span>
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-[200px] mt-6">
          <img src={destinasi1} alt="" className="object-cover h-32 rounded-t-xl" />
          <CardBody className="p-2">
            <Typography variant="small" color="blue-gray" className="mb-2 font-semibold whitespace-nowrap">
              Makassar &rarr; Papua
            </Typography>
            <Typography variant="small" color="purple" className="mb-2 font-semibold whitespace-nowrap">
              Super Jet
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              20 - 30 Maret 2023
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              Mulai dari <span className="text-red-500">IDR 950.000</span>
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-[200px] mt-6">
          <img src={destinasi2} alt="" className="object-cover h-32 rounded-t-xl" />
          <CardBody className="p-2">
            <Typography variant="small" color="blue-gray" className="mb-2 font-semibold whitespace-nowrap">
              Lampung &rarr; Palu
            </Typography>
            <Typography variant="small" color="purple" className="mb-2 font-semibold whitespace-nowrap">
              Batik Air
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              20 - 30 Maret 2023
            </Typography>
            <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
              Mulai dari <span className="text-red-500">IDR 950.000</span>
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ShowDestinasiFavorit;
