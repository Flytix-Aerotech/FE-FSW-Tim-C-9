import { HeadingContainer } from "../../Shared/heading_conteiner";
import AccountSideBar from "./account_sidebar";
import { UpdateAccountForm } from "./update_account_form";


export default function UpdateAccount() {
  return (
    <div>
      <HeadingContainer
        title={"Akun"}
        titleButton={"Beranda"}
        showSearch={false}
        showFilter={false}
        bgColor="bg-purple-300"
      />

      <main className="p-2 mx-[260px] my-2 flex flex-row">
        <AccountSideBar/>
        <UpdateAccountForm/>
      </main>
    </div>
  );
}
