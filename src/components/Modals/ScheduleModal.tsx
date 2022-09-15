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
    
     const data = await fetch("http://127.0.0.1:5000", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         query: `mutation {
            deleteSchedule(id:"${selectedNumber}"){message{message}}}`,
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