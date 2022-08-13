import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import { useEffect } from "react";

export default function ScheduleCalender() {
  useEffect(() => {
    const calender = new Calendar();

    calender.render();
  });

  return (
    <div className="row">
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}
