import React, {useState} from "react";
import styled from "styled-components";

import moment from "moment";

const GridWrapper = styled.div`
  display: grid;
  background-color: #dddd;
  grid-template-columns: repeat(7,1fr);
  grid-gap: 1px;
  `;

const TimeCellWrapper = styled.div`
  height: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  `;

const DayWrapper = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
`


const CalendarBody = ({startDay}) => {

    const startHour = moment().startOf('week').hour('9').minute('00').subtract(1,'days')
    const [selectedDay, setSelectedDay] = useState(moment().unix())

    const timeArray = [...Array(24)].map(()=> startHour.add(30, 'minutes').clone())
    const days = [...Array(7)].map(()=> startDay.add(1,'day').clone())

    const selectDay = (e) => setSelectedDay(e.target.value)
    const increaseDay = (timeItem) => {timeItem.add(1,'day')}

    return(
        <>
        <GridWrapper>
            {
                days.map((dayItem ) => (
                    <div key={dayItem.format('dddd')}>
                        <DayWrapper>
                       {dayItem.format('dddd')}
                        </DayWrapper>
                        {
                            timeArray.map((timeItem  ) => (
                                <TimeCellWrapper key={timeItem.format()}>
                                    {increaseDay(timeItem)}
                                  <button value={timeItem.unix()} onClick={(e)=>selectDay(e)}>
                                   {timeItem.format('dd Do HH:mm')}
                                  </button>
                                </TimeCellWrapper>
                            ))
                        }
                    </div>
                ))}
        </GridWrapper>
        </>
    )
}

export default CalendarBody
