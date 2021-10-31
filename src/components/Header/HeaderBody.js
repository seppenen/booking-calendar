import React from "react";
import styled from "styled-components";

const ControlWrapper = styled.div`
margin: 15px;
`;


const HeaderBody = ({startDay, setStartDay}) => {

    const onNextWeek = () => {
        setStartDay(startDay.add(1,'week').clone())
    }

    const onPreviousWeek = () => {
        setStartDay(startDay.subtract(1,'week').clone())
    }

    return(
        <ControlWrapper>
            <button onClick={() => onPreviousWeek()}>Previous week</button>
            <button onClick={() => onNextWeek()}>Next week</button>
        </ControlWrapper>
    )
}

export default HeaderBody
