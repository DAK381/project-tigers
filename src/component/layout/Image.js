import Container from 'react-bootstrap/Container';
import { Col, Card } from 'react-bootstrap';
import { useState } from 'react';


function Image(props) {
    const [bg, setbg] = useState("");
    const [selected, setSelected] = useState(false);

    const select = () => {
        if(selected){
            setSelected(false);
            setbg("");
            props.set.delete(props.name);
        }
        else{
            setSelected(true);
            setbg("text-white bg-primary");
            props.set.add(props.name);
        }
    }


    return(
        <Container fluid>
            <Col>
                <Card class={bg} onClick={select} style={{border: '1px solid #ddd',
                                                                    borderRadius: '4px',
                                                                    padding: '5px'}}>
                    <Card.Img src={props.src} alt={props.alt} />
                        <span style={{fontSize: "14px"}}>{props.name}</span>
                </Card>
            </Col>
        </Container>
    )
}

export default Image;