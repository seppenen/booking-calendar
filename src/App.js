
import './App.css';
import CalendarBody from "./components/CalendarGrid/CalendarBody";
import moment from "moment";
import HeaderBody from "./components/Header/HeaderBody";
import React, {useState} from "react";
import 'moment/locale/fi';
import 'moment/locale/cs';


function App() {


  moment.updateLocale('en', {week: {dow:1}})

  const [startDay, setStartDay ] = useState(moment().subtract(1,'days'))


  return (
    <>
      <HeaderBody  startDay={startDay} setStartDay={setStartDay}/>

    <CalendarBody startDay={startDay} />
    </>
  );
}

export default App;
