
import './App.css';
import CalendarBody from "./components/CalendarGrid/CalendarBody";
import moment from "moment";
import HeaderBody from "./components/Header/HeaderBody";
import React from "react";
import 'moment/locale/fi';
import 'moment/locale/cs';


function App() {


  moment.updateLocale('en', {week: {dow:1}})
  const startDay = moment().startOf('week')
  const startHour = moment().startOf('minutes').hour('08').minute('00')

  return (
    <>
      <HeaderBody/>
    <CalendarBody startDay={startDay} startHour={startHour}/>
    </>
  );
}

export default App;
