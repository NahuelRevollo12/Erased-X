import { Card, Button } from 'react-bootstrap';

const Main = () => {
    return (
        <main style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9b936f6e/products/NI_DJ6914-063/NI_DJ6914-063-1.JPG" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </main>
    )
}
export default Main