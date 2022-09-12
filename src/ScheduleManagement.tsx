import DatePicker from "./components/DatePicker";
import DateTimePickers from "./components/DateTimePickers";
import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import Textarea from "react-expanding-textarea";
import ColorPicker from "./components/ColorPicker";

import {
  
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
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

function ScheduleManagement() {
  // const [datesPicker, setDatesPicker] = useState(DateRange<Dayjs>);
  const [title, setTitle] = useState<string | undefined>();
  const [startDate,setStartDate]= useState<string |undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [description, setDescripton] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  // const handleText = (e: React.FocusEvent<HTMLInputElement>): void => {
  //   setDatesPicker(e.currentTarget.value);
  // };
 

  const DatePickerHandler = () => {
    // setDatesPicker((prev) => !prev);
  };

  const handleChange = 
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      console.log("Changed value to: ", e.target.value);
      setDescripton(e.target.value);
    }
    
  

  const titleHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    
    const targetTitle = event.target.value;
    console.log(typeof targetTitle)
    // setTitle(targetTitle);
    setTitle(targetTitle.trim());
    console.log(title);
    
  }

  useEffect(() => {
    if (null !== textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

 
  return (
    <div>
      <>
        {console.log(title)}
        <HeadTitle>Schdule Management </HeadTitle>
        <ItemCenter>
          <DatePickerHeader>Dates Schedule</DatePickerHeader>
          <DatePicker setStartDate={setStartDate} setEndDate={setEndDate} />
          {/* <DatePickerHeader>Date Time Schedule</DatePickerHeader> */}
          <DateTimePickers />
          <h2>Title</h2>
          <input
            type="text"
            placeholder="title"
            onChange={titleHandler}
          />
          {/* <h3>Description</h3> */}
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
          <ColorPicker setColor={setColor} />
        </ItemCenter>
      </>
    </div>
  );
}

export default ScheduleManagement;
