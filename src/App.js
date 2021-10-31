import './App.css';
import CalendarBody from "./components/CalendarGrid/CalendarBody";
import moment from "moment";
import React, {useState} from "react";
import 'moment/locale/fi';
import 'moment/locale/cs';
import ControlsBody from "./components/Controls/ControlsBody";

function App() {

    moment.updateLocale('en', {week: {dow: 1}})

    const [startDay, setStartDay] = useState(moment().subtract(1, 'days'))


    return (
        <>
            <ControlsBody startDay={startDay} setStartDay={setStartDay}/>
            <CalendarBody startDay={startDay}/>
        </>
    );
}

export default App;
