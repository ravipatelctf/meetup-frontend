import Header from "../components/Header";
import { eventsData } from "../App";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const {eventId} = useParams();

    const targetEvent = eventsData?.find(eventData => eventData._id === eventId);

    return (
        <>
            <Header />
            <main className="container d-flex justify-content-between gap-5">
                {/* 1st column */}
                <div>
                    <h2>{targetEvent.title}</h2>
                    <p>Hosted By:</p>
                    <h5>{targetEvent.hostedBy}</h5>
                    <img 
                        src={targetEvent.eventImageUrl} alt={targetEvent.eventImageAlt} 
                        className="img-fluid"    
                    />
                    <h3 className="py-2">Details:</h3>
                    <p className="col-5">{targetEvent.details}</p>
                    <h3>Additional Information:</h3>
                    <p><span className="fw-bold">Dress Code: </span>{targetEvent.dressCode}</p>
                    <p><span className="fw-bold">Age Restrictions: </span>{targetEvent.ageRestrictions} and above</p>
                    <h3>Event Tags:</h3>
                    {targetEvent?.eventTags?.map(tag => (
                        <p key={tag} className="btn btn-danger me-4">{tag}</p>
                    ))}
                </div>
                {/* 2nd column */}
                {/*  */}
                <div className="list-group col-4">
                <div className="list-group-item p-4">
                    <div className="d-flex align-items-center gap-2">
                        <p>⏰</p>
                        <p>{`${targetEvent.eventStartDate} to ${targetEvent.eventEndDate}`}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p>📍</p>
                        <p>{targetEvent.location}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className="px-1"> ₹ </p>
                        <p>{targetEvent.ticketPrice}</p>
                    </div>
                </div>
                <h3 className="py-2 mt-4">
                    Speakers:({targetEvent.speakers.length})
                </h3>
                <div>
                    {/*  */}
                    
                    <div className="row g-5 py-2">
                        {targetEvent?.speakers?.map((speaker) => (
                            <div key={speaker.id} className="col-md-6">
                                <div className="card">
                                    <img 
                                        src={targetEvent.eventImageUrl} alt={targetEvent.eventImageAlt} 
                                        className="img-fluid"    
                                    />
                                    <div className="card-body">
                                        <p className="card-title">
                                            {speaker.name}
                                        </p>
                                        <p className="card-text">
                                            {speaker.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                </div>
                </div>
                {/*  */}
                
                
            </main>
        </>
    );
};

export default EventDetails;