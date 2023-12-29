import React from "react";
import Header from "./Component/Expense Tracker/Header";
import Balance from "./Component/Expense Tracker/Balance";
import Income from "./Component/Expense Tracker/Income";
import History from "./Component/Expense Tracker/History";
import AddTransection from "./Component/Expense Tracker/AddTransection";
import { useState } from "react";
const App = () => {
  const [historyTransection, setHistoryTransection] = useState([]);
  return (
    <>
      <div className="main_container">
        <div className="header_container">
          <Header />
        </div>
        <div className="sub_container">
          <Balance totalAmount={historyTransection} />
          <Income expense={historyTransection} />
          <History transection={historyTransection} />
          <AddTransection add={setHistoryTransection} />
        </div>
      </div>
    </>
  );
};

export default App;
