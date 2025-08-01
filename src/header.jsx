import './css/header.css'

function Header() {
  return (
    <header>
            <div className="nombre">
                <h1>J'M</h1>
            </div>
            <nav className="menu-horizontal">
                <b id ="idioma">ES</b>
                <b>Inicio</b>
                <b>Sobre mi</b>
                <b>Habilidades</b>
                <b>Contacto</b>
            </nav>
      </header>
  )
}

export default Header
