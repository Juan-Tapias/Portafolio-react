import "./css/inicio.css"
function Inicio(){
    return (
        <section className="inicio">
            <div className="foto-container">
                <img src="/img/yo.png" alt="YO" className="foto" />
            </div>
            <div className="tarjeta">
                <div className="contenido">
                    <h1>Hola, soy Juan Sebastian Martínez Tapias</h1>
                </div>
                <div className="texto">
                <p>Desarrollador backend</p>
                </div>
            </div>
            <div className="container-cont">
                <div className="contacto">
                    <a href="https://wa.link/me5dns" target="_blank"><button className="btn-cont">Contáctame</button></a>
                </div>
                <div className="hoja-vida">
                    <a href="https://wa.link/me5dns" target="_blank"><button className="btn-des">Descargar hoja de vida</button></a>
                </div>
            </div>
        </section>
    )
}

export default Inicio