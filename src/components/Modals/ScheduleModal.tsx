import React, { Dispatch, SetStateAction, FC } from "react";
import { DeleteButton, ModalBackdrop, ModalMain, ModalMainContents, ModalMainTitle } from '../CssComponent';

interface ChildPropsType {
  setModalEvent: Dispatch<SetStateAction<boolean | undefined>>;
  selectedNumber :string |undefined
}


const ScheduleModal: FC<ChildPropsType> = ({
  setModalEvent,
  selectedNumber,
}) => {
  const deleteAlert = async () => {
    
     const data = await fetch("https://venv-liart-one.vercel.app", {
       method: "POST",
       headers: {
         "Content-Type": "application/json;  charset=UTF-8",
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT"
       },
       body: JSON.stringify({
         query: `mutation {
            deleteSchedule(scheduleid:"${selectedNumber}"){schedule{scheduleid}}}`,
       }),
     });

     if (data.status === 200) {
       const jsonData = await data.json();
       console.log(jsonData);
     }
  };
  return (
    <>
    {console.log(selectedNumber)}
      <div>
        <ModalBackdrop onClick={(e) => setModalEvent((prev) => !prev)} />

        <ModalMain>
          <ModalMainTitle>
            Do you want to delete this schedule?
            <ModalMainContents />
            <DeleteButton onClick={deleteAlert}>Delete Schedule</DeleteButton>
          </ModalMainTitle>
        </ModalMain>
      </div>
    </>
  );
};

export default ScheduleModal