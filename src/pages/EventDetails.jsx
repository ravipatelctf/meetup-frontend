
import { eventsData } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EventDetails = () => {
    const {eventId} = useParams();
    const targetEvent = eventsData?.find(eventData => eventData._id === eventId);

    return (
        <>
            <header>
                <nav className="container nav d-flex justify-content-between align-items-center p-2">
                    <div>
                        <Link to="/" className="navbar-brand fs-1 text-danger fw-bold">Meetup</Link>
                    </div>
                </nav>
                <hr />
            </header>
            <main className="container py-4">
              
            <div className="row">

                <div className="col-md-6">
                    <h2 className="fw-bold">{targetEvent.title}</h2>
                    <div>
                        <p className="py-3">
                            Hosted By:
                            <br />
                            <span className="fw-bold">
                                {targetEvent.hostedBy}
                            </span>
                        </p>
                    </div>
                    <img 
                        src={targetEvent.eventImageUrl} alt={targetEvent.eventImageAlt} 
                        className="img-fluid"    
                    />
                    <h3 className="pt-4 fw-bold">Details:</h3>
                    <p>{targetEvent.details}</p>
                    <h3 className="fw-bold pt-2">Additional Information:</h3>
                    <p><span className="fw-bold">Dress Code: </span>{targetEvent.dressCode}</p>
                    <p><span className="fw-bold">Age Restrictions: </span>{targetEvent.ageRestrictions} and above</p>
                    <h3 className="fw-bold">Event Tags:</h3>
                    {targetEvent?.eventTags?.map(tag => (
                        <p key={tag} className="btn btn-danger me-4">{tag}</p>
                    ))}
                </div>
              

                <div className="list-group col-md-6 p-4">
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
                                    <div className="card text-center">
                                        <img 
                                            src={speaker.profilePicURL} alt={speaker.profilePicAlt} 
                                            className="img-fluid rounded-circle p-5"
                                        />
                                        <div className="card-body">
                                            <p className="card-title fw-bold">
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
                
            </div>
            </main>
        </>
    );
};

export default EventDetails;