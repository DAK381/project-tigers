export default function MemberGroupShow(props)
{
    const event = props.data;
    console.log(event)
    return(
        <div>
             <div className="row">
                                    <div className="col-md-8"></div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="text">{event.groupName}</h3>
                                                    <h4 className="lead">{event.groupYear}</h4>
                                                </div>
                                            </div>
                                        </div>

                                        </div>                                   
                                       
                                        
                                    

       
    )
}