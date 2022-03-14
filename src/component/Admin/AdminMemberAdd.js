import AdminNavigation from "./AdminNavigation";
import { useState } from "react";
import AdminMemberForm from "./AdminMemberForm";
import { Card, Container } from "react-bootstrap";

function AdminMemberAdd(){

    const [info, setInfo] = useState([
        {username: '', email: '', phoneNumber: '',
        address: '', graduationYear: '', membershipType: '', club: ''
            }
       
    ])


    function addInfo(user){
        setInfo([...info, {username: user.username, email: user.email,
                            phoneNumber: user.phoneNumber, 
                            address: user.address,
                            graduationYear: user.graduationYear,
                            membershipType: user.membershipType,
                            club: user.club
        
        }]);
    }
    return(
        <div> 
<Container fluid>


            <AdminNavigation />

        {info.map(info => {
            return (<div>
                <Card>
                <p>
                Name: {info.username}
                    </p> 
                    
                    
                <p>
                Email: {info.email}
                </p>
                    
                <p>

                Phone: {info.phoneNumber} 
                </p>

                <p>
                Address: {info.address}
                </p>

                <p>
                Graduation Year: {info.graduationYear} 
                </p>

                <p>
                Membership Type: {info.membershipType} 
                </p>
                        
                </Card>
            
                        </div>)
        })}

        


        <AdminMemberForm addInfo = {addInfo}/>
        </Container>
        </div>
    )
}

export default AdminMemberAdd;
    
        





