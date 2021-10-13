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
const test = (timeItem) => {

    console.log(timeItem.format())
}
const CalendarBody = ({startDay, startHour}) => {

    const timeArray = [...Array(24)]
        .map(()=> startHour.add(30, 'minutes')
            .clone().subtract(30,'minutes'))

    const days = [...Array(7)]
        .map(()=> startDay.add(1,'day')
            .clone()
            .subtract(1,'days'))


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
                                  <button onClick={()=>test(timeItem)}>
                                      {timeItem.zone(9).format('HH:mm')}
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
