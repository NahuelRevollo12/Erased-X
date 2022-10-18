import { Card, Button } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';


const Main = (props) => {
    //console.log(props); props -> {es un objeto}
    //2.forma -- const saludo = props.saludo; y abajo solo poner "{saludo}"
    //3.desestructuring -- const {saludo} = props; abajo poner "{saludo}"

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
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            <ItemListContainer greeting={"Hola, bienvenidos"}/>
        </main>
    )
}
export default Main