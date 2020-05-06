const root = document.getElementById('root')

// List
// Crear un componente List que acepte una prop items que sea un array de strings, y renderice un componente ul con componentes li por cada string de items. Si items está vacío o no está definido, se debe mostrar un componente p que diga Sorry, this list is empty

const List = ({ items }) => {
    if (!items) {
        return <p>Sorry, this list is empty</p>
    }

    return (
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    )
}

const App = () => {
    return (
        <div>
            <List  />
            <List  items={["Flor", "Lu", "Jose", "Dani", "Sol"]}/>
        </div>
    )
}

ReactDOM.render(<App />, root)