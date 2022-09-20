import React, { useState } from "react";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ScheduleModal from "./Modals/ScheduleModal";



interface ChildPropsType {
  scheduleList: object | undefined;
}
function FullCalendarPage({ scheduleList }: ChildPropsType) {
  const [modalEvent, setModalEvent] = useState<boolean | undefined>(false);
  const [selectedNumber, setSelectedNumber] = useState<string | undefined>();
  const events = [
    {
      title: "All Day Event",
      start: getDate("YEAR-MONTH-01"),
      scheduleid: "1",
    },
    {
      title: "Long Event",
      start: getDate("YEAR-MONTH-07"),
      end: getDate("YEAR-MONTH-10"),
      description: "This is a cool event",
      scheduleid: "2",
      
    },
    {
      groupId: "999",
      title: "Repeating Event",
      
      scheduleid: "3",
      start: getDate("YEAR-MONTH-09T16:31:19.000"),
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
      scheduleid: "4",
    },
    {
      title: "Conference",
      start: "YEAR-MONTH-17",
      end: getDate("YEAR-MONTH-19"),
      scheduleid: "5",
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
      end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
      scheduleid: "6",
    },
    {
      title: "Lunch",
      start: getDate("YEAR-MONTH-18T12:00:00+00:00"),
      scheduleid: "7",
    },
    {
      title: "Birthday Party",
      start: getDate("YEAR-MONTH-19T07:00:00+00:00"),
      scheduleid: "8",
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T14:30:00+00:00"),
      scheduleid: "9",
    },
    {
      title: "Happy Hour",
      start: getDate("YEAR-MONTH-18T17:30:00+00:00"),
      scheduleid: "10",
    },
    {
      title: "Dinner",
      start: getDate("YEAR-MONTH-18T20:00:00+00:00"),
      scheduleid: "11",
    },
  ];
  function getDate(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  const hoverDescription = (arg: EventClickArg) => {
    // console.log(arg.event._def.extendedProps.description);
    // console.log(arg.event._def.extendedProps.scheduleid);
    setSelectedNumber(arg.event._def.extendedProps.scheduleid);
    setModalEvent((prev) => !prev);
  };

  return (
    <div>
      <>
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            center: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          eventClick={(e) => hoverDescription(e)}
          // eventColor="red"
          plugins={[dayGridPlugin, timeGridPlugin]}
          events={(localStorage.getItem("accessToken") !==null&& localStorage.getItem("refreshToken") !==null)? scheduleList : events}
        />
        {/* {console.log(typeof(scheduleList))} */}
        {/* {console.log(scheduleList)} */}
        {modalEvent && (
          <ScheduleModal
            setModalEvent={setModalEvent}
            selectedNumber={selectedNumber}
          />
        )}
      </>
    </div>
  );
}

export default FullCalendarPage