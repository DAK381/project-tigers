import AdminNavigation from "./AdminNavigation";
import { Card, Container } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Form, Button, FloatingLabel } from "react-bootstrap"

function AdminContact() {

    return (

        <Container>


            <AdminNavigation />


            <Container>
                <Card>
                    <CardBody>
                        <Card.Title>
                            <h3>Contact Members</h3></Card.Title>
                        <Form className="form-control">
                            
                                <Form.Label className="text-left">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />


                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Email Subject" />


                            <Form.Label>Body</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                            </FloatingLabel>

                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Container>

        </Container>

        // contact members page

    )
}

export default AdminContact;