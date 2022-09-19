import DatePicker from "./components/DatePicker";


import { useEffect, useRef, useState } from "react";

import ColorPicker from "./components/ColorPicker";


import Header from "./components/Header";
import {
  DatePickerHeader,
  HeadTitle,
  ItemCenter,
  TitleInput,
  DescriptionTextarea,
  AddButton,
} from "./components/CssComponent";

function DateScheduleManagement() {
  
  const [title, setTitle] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [description, setDescripton] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>("tomato");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [noTitle, setNoTitle] = useState(false);
  const [noStart, setNoStart] = useState(false);
  const [noEnd, setNoEnd] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log("Changed value to: ", e.target.value);
    setDescripton(e.target.value);
  };

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const targetTitle = event.target.value;
    console.log(typeof targetTitle);
    // setTitle(targetTitle);
    setTitle(targetTitle.trim());
    console.log(title);
  };

  const checkValidation = () => {
    setNoTitle(false);
    setNoStart(false);
    setNoEnd(false);
    console.log(title);
    if (title === undefined || title === "") {
      setNoTitle(true);
    }
    if (startDate === undefined || startDate === "") {
      setNoStart(true);
    }
    if (endDate === undefined || endDate === "") {
      setNoEnd(true);
    }
  };

  const AddDateSchedule = async () => {
    console.log(
      "title" +
        title +
        "start" +
        startDate +
        "end" +
        endDate +
        "description" +
        description +
        "color" +
        color
    );
    checkValidation();
    if (
      (title !== undefined && title !== "") &&
      (startDate !== undefined && startDate !== " ") &&
      (endDate !== undefined && endDate !== " ")
    ) {
      const data = await fetch("https://schedulemanagerserver.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          query: `mutation {
            createSchedule(title:"${title}",description:"${description}",start:"${startDate}",end:"${endDate}",color:"${color}",userId:${1}){schedule{id}}}`,
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
        <Header />
        {console.log(title)}
        <HeadTitle>Schdule Dates Management </HeadTitle>
        <ItemCenter>
          <DatePickerHeader>Dates Schedule</DatePickerHeader>
          <DatePicker setStartDate={setStartDate} setEndDate={setEndDate} />
          {noStart && <div>Please select startDate</div>}
          {noEnd && <div>Please select endDate</div>}
          <h2>Title</h2>
          <TitleInput type="text" placeholder="title" onChange={titleHandler} />
          {noTitle && <div>Please type title</div>}
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
          <h3>Choose one color</h3>
          <ColorPicker setColor={setColor} />
          <AddButton onClick={AddDateSchedule}>Add</AddButton>
        </ItemCenter>
      </>
    </div>
  );
}

export default DateScheduleManagement;
