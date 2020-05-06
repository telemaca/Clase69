const root = document.getElementById('root')

// Field
// Crear un componente PasswordField que acepte una prop status que es un string con los valores posibles: "default", "error", "valid". El componente Field debe renderizar un label que diga "Password" y un input de tipo password. Si status tiene el valor "valid", debe mostrar el input con un borde de color verde. Si tiene el valor "error", debe mostrar el input con un borde de color rojo y renderizar debajo del input un componente small en color rojo que diga: "Invalid password, please try again"

const INPUT_BORDER = {
    default: "1px solid black",
    error: "1px solid red",
    valid: "1px solid green"
}

const Field = ({ status="default" }) => {
    return (
        <div style={{ marginBottom: "10px"}}>
            <label style={{ marginRight: "10px"}}>Password</label>
            <input style={{ border: INPUT_BORDER[status]}} type="Password"></input>
        </div>
    )
}

const PasswordField = ({ status="default" }) => {
    if (status==="error") {
        return (
            <div style={{ marginBottom: "20px"}}>
                <Field status={status} />
                <small style={{ color: "red"}}>Invalid password, please try again</small>
            </div>
        )
    }

    return <Field status={status}/>
}



const App = () => {
    return (
        <div>
            <PasswordField  />
            <PasswordField status="error" />
            <PasswordField status="valid" />
        </div>
    )
}

ReactDOM.render(<App />, root)