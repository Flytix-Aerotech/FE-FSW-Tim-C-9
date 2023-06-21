import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function UpdateAccountForm() {
  return (
    <div className="w-full px-4">
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Ubah Data Profil
          </Typography>

          <div>
            <div className="bg-purple-300 text-white p-3 rounded-tr-lg rounded-tl-lg">
              Data Diri
            </div>
            <form className="mt-3 flex flex-col gap-4">
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Nama Lengkap
                </Typography>
                <Input size="md" label="Nama Lengkap" color="purple" />
              </div>

              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Nomor Telepon
                </Typography>
                <Input size="md" label="Nomor Telepon" color="purple" />
              </div>

              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Email
                </Typography>
                <Input size="md" label="Email" type="email" color="purple" />
              </div>

              <div className="flex flex-row items-center justify-center">
              <Button  size="sm" color="purple" className="w-fit">Simpan</Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
