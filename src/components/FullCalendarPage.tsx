import React, { useState } from "react";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ScheduleModal from "./Modals/ScheduleModal";
function FullCalendarPage() {
  const [modalEvent,setModalEvent] = useState<boolean |undefined>(false)
  const [selectedNumber, setSelectedNumber] = useState<string | undefined>();
  const events = [
    { title: "All Day Event", start: getDate("YEAR-MONTH-01"),id:"0" },
    {
      title: "Long Event",
      start: getDate("YEAR-MONTH-07"),
      end: getDate("YEAR-MONTH-10"),
      description: "This is a cool event",
      id: "1",
      // color: "yellow",
      // textColor: "black",
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
      id: "2",
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
      id: "3",
    },
    {
      title: "Conference",
      start: "YEAR-MONTH-17",
      end: getDate("YEAR-MONTH-19"),
      id: "4",
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
      end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
      id: "5",
    },
    { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), id: "6" },
    {
      title: "Birthday Party",
      start: getDate("YEAR-MONTH-19T07:00:00+00:00"),
      id: "7",
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T14:30:00+00:00"),
      id: "8",
    },
    {
      title: "Happy Hour",
      start: getDate("YEAR-MONTH-18T17:30:00+00:00"),
      id: "9",
    },
    {
      title: "Dinner",
      start: getDate("YEAR-MONTH-18T20:00:00+00:00"),
      id: "10",
    },
  ];
  function getDate(dayString:string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  const hoverDescription = (arg: EventClickArg) => {
    console.log(arg.event._def.extendedProps.description);
    console.log(arg.event._def.publicId);
    setSelectedNumber(arg.event._def.publicId)
    setModalEvent((prev)=>!prev)
  };

  return (
    <div>
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventClick={(e) => hoverDescription(e)}
        // eventColor="red"
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
      />
      {modalEvent && (
        <ScheduleModal setModalEvent={setModalEvent} selectedNumber={selectedNumber} />
      )}
    </div>
  );
}

export default FullCalendarPage