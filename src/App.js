import './App.css';
import './style.css';
import React from 'react';
import { BaseLayout } from './component/Shared/base_layout';
import { OrderHistory } from './component/Pages/Orders/order_history';
import Notification from './component/Pages/Notifications/notification';
import UpdateAccount from './component/Pages/Account/update_account';
import Example from './component/Pages/Orders/order1';
import Approute from './config/route/approute';

// eslint-disable-next-line require-jsdoc
// function App() {
//   return (
//     <Approute/>
//   );
// }

function App() {
  return (
    <>
      <BaseLayout>
        {/* <div className="w-screen h-screen"> */}
          <Approute/>
        {/* </div> */}
      </BaseLayout>
    </>
  );
}

export default App;
