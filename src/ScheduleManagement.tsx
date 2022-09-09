import DatePicker from "./components/DatePicker";
import DateTimePickers from "./components/DateTimePickers";
import styled from "styled-components";
import { useState } from "react";
function ScheduleManagement() {
  interface TextInterface {
    text: string | null;
    setText: (value: string) => void;
  }
  const [datesPicker, setDatesPicker] = useState();

  // const handleText = (e: React.FocusEvent<HTMLInputElement>): void => {
  //   setDatesPicker(e.currentTarget.value);
  // };
  const HeadTitle = styled.h1`
    text-align: center;
  `;

  const ItemCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // background-color:blue;
  `;

  const DatePickerHeader = styled.h2`
    text-align: center;
  `;

  const DatePickerHandler = () => {
    // setDatesPicker((prev) => !prev);
  };

  return (
    <div>
      <>
        {console.log(datesPicker)}
        <HeadTitle>Schdule Management </HeadTitle>
        <ItemCenter>
          <DatePickerHeader>Dates Schedule</DatePickerHeader>

          <DatePicker DatePickerHandler={DatePickerHandler} />

          <DatePickerHeader>Date Time Schedule</DatePickerHeader>
          <DateTimePickers />
        </ItemCenter>
      </>
    </div>
  );
}

export default ScheduleManagement;
