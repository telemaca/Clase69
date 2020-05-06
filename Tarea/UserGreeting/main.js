const root = document.getElementById('root')

// UserGreeting
// Crear un componente UserGreeting que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente p que diga Welcome ${user} y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y LoggedUserMessage.
const GuestUserMessage = () => {
    return (
        <div style={ {display: "flex", flexDirection: "column"}}>
            <a>Login</a>
            <a>Register</a>
        </div>
    )
}

const LoggedUserMessage = ({ user }) => {
    return (
        <div style={ {display: "flex", flexDirection: "column"}}>
            <a>Welcome, {user}</a>
            <a>Logout</a>
        </div>
    )
}

const UserGreeting = ({ user }) => {
    return user ? <LoggedUserMessage user={user}/> : <GuestUserMessage />
}

const App = () => {
    return (
        <div>
            <UserGreeting  />
            <UserGreeting  user="Flor"/>
        </div>
    )
}

ReactDOM.render(<App />, root)