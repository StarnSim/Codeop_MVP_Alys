import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {


    const [events, setEvents] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    //all inputs only work if they are set as empty strings here
    const [input, setInput] = useState({ event_location: "", skill_level: "", hobby_id: "", event_price: "", equip_needed: "", event_description: ""});

//Shows all events and all hobbies (in it's dropdown) when the page is loaded
    useEffect(() => {
      getEvents();
      getHobbies();
    }, []);

//manipulates the input state as the user types/changes the form
    const handleChange = (event) => {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    };

//fetches all hobbies from database
    const getHobbies = () => {
      fetch("/api/hobbies")
      .then((response) => response.json())
      .then((hobbies) => { setHobbies(hobbies)
      })
      .catch((error) => {
        console.log(error);
    });
    };

//fetches all events which then can be filtered. if the specified filters exist in the query, then they are applied to the fetch
    const getEvents = () => {
      const urlSearch = `/api/events?event_location=${input.event_location}&skill_level=${input.skill_level}&hobby_id=${input.hobby_id}&event_price=${input.event_price}&equip_needed=${input.equip_needed}&event_description=${input.event_description}`
      fetch(urlSearch)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events)
        //test console log
        console.log(events)
      })
      .catch((error) => {
        console.log(error);
      });
    };
  
    // prevents page refreshing immediately and runs get events
    const handleSubmit = (event) => {
      event.preventDefault();
      getEvents();
    };
  
      const saveEventToProfile = async (eventId) => {
        try {
          // Send a request to save the event to the user's profile
          const response = await fetch("/api/profile/saved_events", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({ event_id: eventId }),
          });
    
          if (response.ok) {
            console.log(`Event with ID ${eventId} saved successfully.`);
          } else {
            console.error(`Failed to save event with ID ${eventId}.`);
          }
        } catch (error) {
          console.error("Error saving event:", error);
        }
      };
  
    return (
      <div className="container px-10 mb-5 d-flex flex-column align-items-center justify-content-center">
        <h1> Search Form </h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="event_location">Event Location </label>
          <input
            name="event_location"
            placeholder="City Name"
            id="event_location"
            type="text"
            className="rounded mb-3"
            value={input.event_location}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="skill_level">Skill Level </label>
          <input
            name="skill_level"
            id="skill_level"
            placeholder="Beginner, intermediate..."
            type="text"
            className="rounded mb-3"
            value={input.skill_level}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="event_description">Key Word </label>
          <input
            name="event_description"
            placeholder="Key Word"
            id="event_description"
            type="text"
            className="rounded mb-3"
            value={input.event_description}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="hobby_id">
           Hobby Category </label>
            <select name="hobby_id"
              id="hobby_id"
              className="rounded mb-3"
              value={input.hobby_id}
              onChange={handleChange}>
              <option placeholder="choose Hobby Category">Select Hobby Category</option>
              {hobbies.map((hobby) => (
              <option key={hobby.id} value={hobby.id}>
              {hobby.hobby_category}
               </option>
               ))}
            </select>
          </div>
          <div>
          <label htmlFor="event_price">
            Price Range €0-{input.event_price}</label>
            <input type="range" 
            name="event_price" 
            className="form-range mb-3" 
            min="0" 
            max="50" 
            step="1" 
            value={input.event_price} 
            onChange={handleChange} 
            id="event_price">
            </input>
            </div>
<div>
            <label htmlFor="equip_needed"></label>
            Own equipment needed 
            <select name="equip_needed"
            id="equip_needed"
            className="rounded mb-3 pr-3"
            value={input.equip_needed}
            onChange={handleChange}>
              <option placeholder="choose option">Please Choose</option>
           <option value={"1"}>
           Yes
           </option>
           <option value={"0"}>
           No
           </option>
           </select>
           </div>

<div>
          <label htmlFor="event_date"></label>
          <span>Event Date </span>
          <input
            name="event_date"
            placeholder="Event Date"
            id="event_date"
            type="date"
            className="rounded mb-3"
            value={input.event_date}
            onChange={handleChange}
          />
          </div>
<div>
<label htmlFor="event_time">Event Time </label>
          <input
            name="event_time"
            placeholder="Event Time"
            id="event_time"
            type="time"
            className="rounded mb-3"
            value={input.event_time}
            onChange={handleChange}
          />
</div>
        <div>
       <button >Submit</button>
       </div>
        </form>

        <div className="row mb-4">
      {events.map((event) => (
        <div key={event.id} className="container rounded p-5 my-5 bg col-4 mb-4">
          <h2>{event.event_name}</h2>
          <p>{event.event_description}</p>
          <p>{event.event_location}</p>
          <p>€{event.event_price}</p>
          <button onClick={() => saveEventToProfile(event.id)}>Save Event</button>
        </div>
      ))}
    </div>
    </div>
  );
}