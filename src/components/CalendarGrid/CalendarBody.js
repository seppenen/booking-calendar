import React, {useEffect, useState} from "react";
import styled from "styled-components";

import moment from "moment";

const GridWrapper = styled.div`
  display: grid;
  background-color: #fff;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1px;
`;

const TimeCellWrapper = styled.div`

  height: 20px;
  padding: 10px;
  background-color: #dddd;
  display: flex;
  justify-content: center;

`;

const DayWrapper = styled.div`
  height: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;

`
const SideWrapper = styled.div`

  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1px;

`

const TimeSheetWrapper = styled.div`
  background-color: #fff;
  margin-top: 1px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1px;


`


const CalendarBody = ({startDay}) => {

    const [selectedDay, setSelectedDay] = useState(moment().unix())

    const startHour = startDay.startOf('week').hour('9').minute('00').subtract(1, 'days').subtract(30, 'minutes')

    const timeArray = [...Array(24)].map(() => startHour.add(30, 'minutes').clone())
    const days = [...Array(7)].map(() => startDay.add(1, 'day').clone())

    const selectDay = (e) => setSelectedDay(e.target.value)
    const nextDay = (timeItem) => {
        timeItem.add(1, 'day')
    }


    return (
        <>
            <GridWrapper>

                <SideWrapper>
                    <DayWrapper>
                        Week {timeArray[0].week()}
                    </DayWrapper>
                    {
                        timeArray.map((timeItem) => (
                            <TimeCellWrapper key={timeItem.unix()}>
                                {timeItem.format('HH:mm')}
                            </TimeCellWrapper>
                        ))
                    }
                </SideWrapper>
                {
                    days.map((dayItem) => (
                        <div key={dayItem.format('dddd')}>
                            <DayWrapper>
                                {dayItem.format('dddd')}
                            </DayWrapper>
                            <TimeSheetWrapper>
                                {
                                    timeArray.map((timeItem) => (
                                        <TimeCellWrapper key={timeItem.unix()}>
                                            {nextDay(timeItem)}
                                            {timeItem.format("MMM Do")}
                                        </TimeCellWrapper>
                                    ))
                                }
                            </TimeSheetWrapper>
                        </div>
                    ))}
            </GridWrapper>
        </>
    )
}

export default CalendarBody
