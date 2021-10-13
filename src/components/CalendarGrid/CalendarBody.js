import React from "react";
import styled from "styled-components";
import HeaderBody from "../Header/HeaderBody";

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
const CalendarBody = ({startDay, startHour}) => {

    const timeArray = [...Array(34)]
        .map(()=> startHour.add(15, 'minutes')
            .clone().subtract(15,'minutes'))

    const days = [...Array(7)]
        .map(()=> startDay.add(1,'day')
            .clone()
            .subtract(1,'days'))

console.log(timeArray)
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
                            timeArray.map((timeItem ) => (

                                <TimeCellWrapper key={timeItem}>
                                  {timeItem.zone(5).format('HH:mm')}
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
