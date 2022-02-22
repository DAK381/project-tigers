import Card from 'react-bootstrap/Card'

function Footer (){

    return(
        <div>
            <Card>
            <Card.Footer className="text-muted">

                <div className = "footer">
                    <p>Footer content</p>
                    </div>

            </Card.Footer>
            </Card>
        </div>
    )
}

export default Footer;