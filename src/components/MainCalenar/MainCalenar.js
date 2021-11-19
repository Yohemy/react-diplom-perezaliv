import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './styles.css';
import eventList from '../../constants';

const localizer = momentLocalizer(moment)

const MainCalenar = () => {
  const [events, handleSetEvents] = React.useState(eventList);
  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Add new Event name')
    if (title)
      handleSetEvents(
        [
          ...events,
          {
            start,
            end,
            title,
          },
        ],
      )
  }
  return (
    <div style={{ padding: '10px' }}>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
      />
    </div>
  )
}

export default MainCalenar;