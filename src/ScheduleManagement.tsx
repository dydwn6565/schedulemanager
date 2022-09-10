import DatePicker from "./components/DatePicker";
import DateTimePickers from "./components/DateTimePickers";
import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import Textarea from "react-expanding-textarea";
import ColorPicker from "./components/ColorPicker";
function ScheduleManagement() {
  const [datesPicker, setDatesPicker] = useState("date");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
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

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log("Changed value to: ", e.target.value);
    },
    []
  );

  useEffect(() => {
    if (null !== textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

 
  return (
    <div>
      <>
        {console.log(datesPicker)}
        <HeadTitle>Schdule Management </HeadTitle>
        <ItemCenter>
          <DatePickerHeader>Dates Schedule</DatePickerHeader>
          <DatePicker setDatesPicker={setDatesPicker} />
          <DatePickerHeader>Date Time Schedule</DatePickerHeader>
          <DateTimePickers />
          <h2>Title</h2>
          <input type="text" placeholder="title" />
          <h3>Description</h3>
          <Textarea
            className="textarea"
            // defaultValue="Lorem ipsum dolor sit amet, ..."
            id="my-textarea"
            maxLength={3000}
            name="pet[notes]"
            onChange={(e) => handleChange(e)}
            placeholder="Enter additional notes..."
            ref={textareaRef}
          />
          <h2>Choose one color</h2>
          <ColorPicker />
          
            

          
        </ItemCenter>
      </>
    </div>
  );
}

export default ScheduleManagement;
