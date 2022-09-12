import React from 'react'
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
function FullCalendarPage() {
  
  const events = [
    { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
    {
      title: "Long Event",
      start: getDate("YEAR-MONTH-07"),
      end: getDate("YEAR-MONTH-10"),
      description: "This is a cool event",
      // color: "yellow",
      // textColor: "black",
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
    },
    {
      title: "Conference",
      start: "YEAR-MONTH-17",
      end: getDate("YEAR-MONTH-19"),
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
      end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
    },
    { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
    { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
    { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
    { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
    { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },


    
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
  };

  return (
    <div>
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventClick={(e)=>hoverDescription(e)}
        // eventColor="red"
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
      />
    </div>
  );
}

export default FullCalendarPage