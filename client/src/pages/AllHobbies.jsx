
import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';


export default function AllHobbies() {

  const [hobbies, setHobbies] = useState([]);
  const [hobbyEvents, setHobbyEvents] = useState ([]);

  useEffect(() => {getHobbies();}, []);

  const getHobbies = () => {
      fetch("/api/hobbies")
      .then((response) => response.json())
      .then((hobbies) => { setHobbies(hobbies)
      })
      .catch((error) => {
        console.log(error);
    });
    };

    const hobbyCategories = () => {
      fetch("api/hobbies/:id")
      .then((response) => response.json())
      .then((hobbyEvents) => { setHobbyEvents(setHobbyEvents)
          console.log(hobbyEvents)
      })
      .catch((error) => {
        console.log(error);
    });
    };
    const getHobbyEvents = async (hobbyId) => {
      try {
        const response = await fetch(`/api/hobbies/${hobbyId}/events`);
        const events = await response.json();
        console.log("Events for Hobby ID", hobbyId, ":", events); // Log events for debugging
        setSelectedHobbyId(hobbyId);
      } catch (error) {
        console.log("Error fetching hobby events:", error);
      }
    };
  
    const takeToForm = async (hobbyId) => {
      try {
        await saveEvent(hobbyId);
        getHobbyEvents(hobbyId);
      } catch (error) {
        console.error("Error saving event:", error);
      }
    };
    
  
    const saveEvent = async (eventId) => {
      try {
        await axios.post(
          "/api/events",
          { eventId },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
  
        // Placeholder for setData, you should replace it with your logic
        setMessage("Event saved successfully");
      } catch (error) {
        console.error("Error saving event:", error);
        setMessage("Failed to save event");
      }
    };

return (
  <div className="hobby-container">
  <h1>Hobby Categories</h1>
  <ul>
    <dl>
  {hobbies.map((hobby) => (
    <h3 key={hobby.id} onClick={takeToForm}>
         {hobby.hobby_category}
    </h3>
  ))}
  </dl>
</ul>

</div>
)
}