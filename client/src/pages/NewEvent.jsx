import React from 'react';
import { useEffect, useState } from "react";


export default function NewEvent() {

  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState({
event_name: "",
  event_location: "",
  event_description: "",
  skill_level: "",
  hobby_id: 0,
  equip_needed: "",
  event_price: 0,
});


//Gets all hobbies so they appear in their dropdown menu
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

//currently, every input needs to be filled in on the form for this function to work - or else it will not add anything and return a 500 error (because the useState of input has set values)
  async function addEvent() {
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();

            console.log(data);

    } catch (err) {
      console.log(err);
    }
  };


  function handleChange(event){
    const{value, name} = event.target;
    setInput((state) => ({
      ...state,
      [name]: value,
    }));
  };

  function handleSubmit(e){
    e.preventDefault();
    addEvent();
    // Clear the form fields
    setInput({
      event_name: "",
      event_location: "",
      event_description: "",
      skill_level: "",
      hobby_id: 0,
      equip_needed: "",
      event_price: 0,
    });
  }

  return (
    <div>
        <h1>
        Create New Event
        </h1>
        <p>Can't find the exact activity you were after? Why not create it yourself!</p>
        <form onSubmit={handleSubmit}>
          <div>
        <label htmlFor="event_name">Event Name</label>
        <input
            name="event_name"
            id="event_name"
            type="text"
            className="rounded mb-3"
            value={input.event_name}
            onChange={handleChange}
          />
          </div>
          <div>
           <label htmlFor="event_description"></label>
           <span>Event Description</span> 
           <textarea
            name="event_description"
            id="event_description"
            type="text"
            className="rounded mb-3"
            value={input.event_description}
            onChange={handleChange}
          />
          </div>
          <div>
           <label htmlFor="event_location">Event Location</label>
        <input
            name="event_location"
            id="event_location"
            type="text"
            className="rounded mb-3"
            value={input.event_location}
            onChange={handleChange}
          />
          </div>

          <div>
    <label htmlFor="skill_level">Skill Level</label>
        <input
            name="skill_level"
            id="skill_level"
            type="text"
            className="rounded mb-3"
            value={input.skill_level}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="hobby_id">
      Hobby Category</label>
       <select name="hobby_id"
            id="hobby_id"
            type="text"
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
   <label htmlFor="equip_needed"></label>
      Do participents need their own equipment?
       <select name="equip_needed"
            id="equip_needed"
            className="rounded mb-3"
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
       <label htmlFor="event_price">How much is this Event? €</label>
        <input
            name="event_price"
            id="event_price"
            type="text"
            className="rounded mb-3"
            value={input.event_price}
            onChange={handleChange}
            />
            </div>

            <div>
          <button>Create New Event</button>
          </div>
        </form>



    </div>
  )
}


// function handleSubmit(e){
//   e.preventDefault()
//   addEvent()
// }


// const [eventMessage, setEventMessage] = useState(""); 
//   if (response.ok) {
//     setEventMessage(`Your event has been created`);
   
//   } else {
//     setEventMessage("Failed to create event");
//   }
// } catch (error) {
//   console.error("Error:", error);
// }
// };

  
  //     console.log(data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };