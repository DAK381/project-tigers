export default function AttendedEventCard(props)
{
    const event = props.event;
    return(
        <div>
             <div className="row">
                                    <div className="col-md-4"></div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="text">{event.eventName}</h3>
                                                    <h4 className="lead">{event.date}</h4>
                                                </div>
                                            </div>
                                        </div>

                                        </div>                                   
                                       
                                        
                                    

       
    )
}