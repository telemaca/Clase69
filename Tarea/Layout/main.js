const root = document.getElementById('root')

const Header = ({ children }) => {
    return <header>{children}</header>
}

const NavMenu = ({ children, direction = "row" }) => {
    return (
        <nav>
            <ul style={{ display: "flex", listStyle: "none", flexDirection: direction}}>{children}</ul>
        </nav>
    )
}

const NavItem = ({ children, path }) => {
    return (
        <li style={{ display: "flex" }}>
            <a href={path}>{children}</a>
        </li>
    )
}

const Main = ({ children }) => {
    return <main>{children}</main>
}

const Footer = ({ children }) => {
    return <footer>{children}</footer>
}

const App = () => {
    return (
        <div>
            <Header>
                <NavMenu direction="column">
                    <NavItem path='/home'>Home</NavItem>
                    <NavItem path='/about-us'>About Us</NavItem>
                    <NavItem path='/contact'>Contact</NavItem>
                </NavMenu>
            </Header>
            <Main>
                Hola mundo
            </Main>
            <Footer>® 2020 - All rights reserved</Footer>
        </div>
    )
}

ReactDOM.render(<App />, root)