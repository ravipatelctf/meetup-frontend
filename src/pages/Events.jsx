import Header from "../components/Header";

import {Link} from "react-router-dom";
import { useState } from "react";
import { eventsData } from "../App";


const Events = () => {
    const [eventType, setEventType] = useState("All");

    const filteredEvents = eventType === "All" 
        ? eventsData 
        : eventsData?.filter(eventData => eventData.eventType === eventType);

    return (
        <>
            <Header />
            <main className="contanier">
                <div className="container d-flex justify-content-between py-2">
                    <h2>Meetup Events</h2>
                    <select 
                        name="eventType" 
                        id="eventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="p-2"
                    >
                        <option value="All">Select Event Type</option>
                        {eventsData?.map(eventData => (
                            <option key={eventData._id} value={eventData.eventType}>
                                {eventData.eventType}
                            </option>    
                        ))}
                    </select>
                </div>
                <div className="container py-4">
                    {/*  */}
                    <div className="row g-5 py-2">
                        {filteredEvents?.map(eventData => (
                            <div key={eventData._id} className="col-md-4">
                                <div className="card">
                                    <img 
                                        src={eventData.eventImageUrl} alt={eventData.eventImageAlt} 
                                        className="img-fluid"    
                                    />
                                    <div className="card-body">
                                        <p className="card-text">{eventData.eventStartDate}</p>
                                        <h5 className="card-title">{eventData.title}</h5>
                                        <Link 
                                            to={`/events/${eventData._id}`}
                                            className="btn btn-danger"
                                        >
                                            View Details
                                        </Link>
                                    </div>
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