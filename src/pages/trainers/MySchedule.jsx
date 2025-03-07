import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

const MySchedule = () => {

  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  return (
    <div className='schedule'>
      MySchedule
      <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      events={[
        { title: 'event 1', date: '2025-03-06' },
        { title: 'event 2', date: '2025-03-07' }
      ]}
      dateClick={handleDateClick}
    />
    </div>
  )
}

export default MySchedule
