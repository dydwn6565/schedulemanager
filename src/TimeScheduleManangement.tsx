import React, { useState, useEffect, useRef } from "react";
import {
  HeadTitle,
  ItemCenter,
  DatePickerHeader,
  TitleInput,
  DescriptionTextarea,
  AddButton,
} from "../src/components/CssComponent";
import Textarea from "react-expanding-textarea";
import DateTimePickers from "./components/DateTimePickers";
import ColorPicker from "./components/ColorPicker";
import Header from "./components/Header";
function TimeScheduleManangement() {
  // const [datesPicker, setDatesPicker] = useState(DateRange<Dayjs>);
  const [title, setTitle] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string | undefined>();
  // const [endDate, setEndDate] = useState<string | undefined>();
  const [description, setDescripton] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>("tomato");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [noTitle, setNoTitle] = useState(false);
  const [noStart, setNoStart] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log("Changed value to: ", e.target.value);
    setDescripton(e.target.value);
  };

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const targetTitle = event.target.value;
    console.log(typeof targetTitle);
    
    setTitle(targetTitle.trim());
    console.log(title);
  };

  const checkValidation = () => {
    setNoTitle(false);
    setNoStart(false);

    console.log(title);
    if (title === undefined || title === "") {
      setNoTitle(true);
    }
    if (startDate === undefined || startDate === "") {
      setNoStart(true);
    }
  };
  const AddTimeSchedule = async () => {
    console.log(
      "title" +
        title +
        "start" +
        startDate +
        "end" +
        //  endDate +
        "description" +
        description +
        "color" +
        color
    );
    checkValidation();
    if (
      title !== undefined &&
      title !== "" &&
      startDate !== undefined &&
      startDate !== ""
    ) {
      const data = await fetch("https://schedulemanagerserver.herokuapp.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;  charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          query: `mutation {
            createSchedule(title:"${title}",description:"${description}",start:"${startDate}",end:"",color:"${color}",userId:${1}){schedule{id}}}`,
        }),
      });

      if (data.status === 200) {
        const jsonData = await data.json();
        console.log(jsonData);
      }
    }
  };
  useEffect(() => {
    if (null !== textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div>
      <>
        {console.log(title)}
        <Header />
        <HeadTitle>Time Schdule Management </HeadTitle>
        <ItemCenter>
          <DatePickerHeader>Time Schedule</DatePickerHeader>

          <DateTimePickers setStartDate={setStartDate} />
          {noStart && <div>Please select time</div>}
          <h2>Title</h2>
          <TitleInput type="text" placeholder="title" onChange={titleHandler} />
          {noTitle && <div>Please type the title</div>}
          <h3>Description</h3>
          <DescriptionTextarea
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
          <AddButton onClick={AddTimeSchedule}>Add</AddButton>
        </ItemCenter>
      </>
    </div>
  );
}

export default TimeScheduleManangement;
