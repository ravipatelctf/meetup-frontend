
import {Link} from "react-router-dom";
import { useState } from "react";
import { eventsData } from "../App";


const Events = () => {
    const [eventType, setEventType] = useState("Both");
    const [searchBarInput, setSearchBarInput] = useState("");

    const filteredEvents = eventType === "Both" 
        ? eventsData 
        : eventsData?.filter(eventData => eventData.eventType === eventType);

    // search bar

    const filteredBySearchBarInput = eventsData.filter(eventData => {
        const eventByTitle = eventData.title.toLowerCase().includes(searchBarInput.toLowerCase());

        const eventByTags = eventData.eventTags.join(" ").toLowerCase().includes(searchBarInput.toLowerCase());

        return eventByTitle.length > 0 ? eventByTitle : eventByTags;
    });

    return (
        <>
            {/* <Header /> */}
            <header>
                <nav className="container nav d-flex justify-content-between align-items-center p-2">
                    <div>
                        <Link to="/" className="navbar-brand fs-1 text-danger fw-bold">Meetup</Link>
                    </div>
                    <div>
                        <input 
                            type="search" 
                            name="searchBar" 
                            id="searchBar" 
                            placeholder="Search By Title and Tags"
                            className="p-2"
                            onChange={(e) => setSearchBarInput(e.target.value)}
                        />
                    </div>
                </nav>
                <hr />
            </header>
            <main className="contanier">
                <div className="container d-flex justify-content-between py-2">
                    <h2 className="fw-bold">Meetup Events</h2>
                    <select 
                        name="eventType" 
                        id="eventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="p-2"
                    >
                        <option value="Both" disabled>Select Event Type</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
                <div className="container py-4">
                    {/*  */}
                    <div className="row g-5 py-2">
                        {(filteredEvents.length < eventsData.length ? filteredEvents : filteredBySearchBarInput).map(eventData => (
                            <div key={eventData._id} className="col-md-4">  
                                <div className="card">
                                    <Link 
                                        to={`/events/${eventData._id}`}
                                        className="link-underline link-underline-opacity-0 text-dark"
                                    >
                                    <img 
                                        src={eventData.eventImageUrl} alt={eventData.eventImageAlt} 
                                        className="img-fluid"
                                        width={600}
                                        height={400}    
                                    />
                                    <div className="card-body">
                                        <p className="card-text">{eventData.eventStartDate}</p>
                                        <h5 className="card-title fw-bold">{eventData.title}</h5>
                                        <p className="card-text">{eventData.eventType} Event</p>
                                        
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        ))}                         
                    </div>
                    {/*  */}      
                </div>
            </main>
        </>
    );
};

export default Events;