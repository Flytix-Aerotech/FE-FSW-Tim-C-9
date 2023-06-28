import { HeadingContainer } from "../../Shared/heading_conteiner";
import OrderDetail from "./order2";
export default function Example() {
  return (
    
    <>
    <div className="flex-col">
    <HeadingContainer
        title={"Riwayat Pemesanan"}
        titleButton={"Beranda"}
        showSearch={true}
        showFilter={true}
        bgColor="bg-purple-300"
      />
    <div className="flex flex-row">
    <div className="flex justify-center">
      <main className="p-8 mx-[260px] my-5 mt-0">
        <strong>Maret 2023</strong>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2">
          <div class="px-6 py-4 border-4 border-purple-600 rounded-lg">
            <div class="font-bold bg-green-500 text-white mb-2 green-issue">Issued</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2">
          <div class="px-6 py-4 border-4 rounded-lg">
            <div class="font-bold bg-red-500 text-white mb-2 green-issue">Unpaid</div>
            <hr class="text-dark" />
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div>
          <p> &nbsp;</p>
        </div>
        <strong>Febuari 2023</strong>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2">
          <div class="px-6 py-4 border-4 rounded-lg">
            <div class="font-bold bg-gray-500 text-white mb-2 gray-cancel">Cancalled</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2">
          <div class="px-6 py-4 border-4 rounded-lg">
            <div class="font-bold bg-green-500 text-white mb-2 green-issue">Issued</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </main>
      <main className="p-8 mx-[260px] my-5 mt-0">
      </main>
    </div>
    <div className="flex justify-center">
      <OrderDetail />
    </div>
    </div>
    </div>
    
    
    </>
  );
}