import React, { useState, useEffect } from "react";
import axios from "axios";


const SavedEvents = () => {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    getSavedEvents();
  }, []);

  const getSavedEvents = async () => {
    try {
      const response = await axios.get("/api/profile/saved_events", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response); 
     
      setSavedEvents(response.data.favoriteEvents); 
      console.log(savedEvents); 
    } catch (error) {
      console.error("Error fetching saved events:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`/api/profile/saved_events/${eventId}`, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      // After successful deletion, update the savedEvents state
      setSavedEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="event-container" style={{ margin: '20px' }}>
      <h2>Saved Events</h2>
      <ul className="event-list">
        {savedEvents.map((savedEvent) => (
          <li className="event-item" key={savedEvent.id}>
            <h3>{savedEvent.event_name}</h3>
            <div className="event-details">
            <span style={{ marginRight: '10px' }}>Date: {new Date(savedEvent.event_date).toISOString().substring(0, 10)}</span>
            <button onClick={() => handleDeleteEvent(savedEvent.id)} style={{ marginTop: '10px' }}>Delete Event</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default SavedEvents;