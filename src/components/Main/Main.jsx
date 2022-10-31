import ItemListContainer from './ItemListContainer';


const Main = (props) => {
    //console.log(props); props -> {es un objeto}
    //2.forma -- const saludo = props.saludo; y abajo solo poner "{saludo}"
    //3.desestructuring -- const {saludo} = props; abajo poner "{saludo}"

    return (
    
        <main style={{ display: 'flex', justifyContent: 'center' }}>
        
            
            <ItemListContainer greeting={"Hola, bienvenidos"}/>
        </main>
    )
}
export default Main