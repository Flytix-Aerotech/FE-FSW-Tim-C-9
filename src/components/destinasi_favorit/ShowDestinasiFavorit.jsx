import { Card, CardBody, Typography } from "@material-tailwind/react";
import { destinasi1 } from "../../assets/images";
import { formatDate, formatRupiah } from "../format_display";

const ShowDestinasiFavorit = ({ items }) => {
  const getDate = (value) => {
    const date = new Date(value);
    const format = date.getDate();
    return format;
  };

  return (
    <div className="w-full max-w-4xl px-4 m-auto mb-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {items?.map((item, i) => (
          <Card key={i} className="w-full mt-6">
            <img src={destinasi1} alt="" className="object-cover h-32 rounded-t-xl" />
            <CardBody className="p-2">
              <Typography variant="small" color="blue-gray" className="mb-2 font-semibold h-10">
                {item?.flight?.departure_location || ""} &rarr; {item?.flight?.arrival_location || ""}
              </Typography>
              <Typography variant="small" color="purple" className="mb-2 font-semibold whitespace-nowrap">
                {item?.flight?.flight_number || ""}
              </Typography>
              <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
                {getDate(item?.flight?.departure_date) || ""} - {formatDate(item?.flight?.arrival_date) || ""}
              </Typography>
              <Typography variant="small" color="black" className="mb-2 font-semibold whitespace-nowrap">
                Mulai dari IDR <span className="text-red-500">{formatRupiah(item?.price) || ""}</span>
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShowDestinasiFavorit;
