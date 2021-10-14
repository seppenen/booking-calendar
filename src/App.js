
import './App.css';
import CalendarBody from "./components/CalendarGrid/CalendarBody";
import moment from "moment";
import HeaderBody from "./components/Header/HeaderBody";
import React from "react";
import 'moment/locale/fi';
import 'moment/locale/cs';


function App() {


  moment.updateLocale('en', {week: {dow:1}})

  const startDay = moment().startOf('week').subtract(1,'days')

  return (
    <>
      <HeaderBody/>

    <CalendarBody startDay={startDay} />
    </>
  );
}

export default App;
