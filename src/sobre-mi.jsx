import "./css/sobre-mi.css"

const Sobremi = [
    {
        title: 'Sobre mi', 
        description:'Estoy motivado por el compromiso de contribuir a proyectos que generen un impacto positivo y duradero en la sociedad. Mi enfoque se centra en el desarrollo de soluciones innovadoras, así como en una colaboración eficaz dentro de equipos multidisciplinarios, con el objetivo de promover mejoras tangibles en la calidad de vida de las personas, mientras fortalezco mi crecimiento personal y profesional.'
    },
    {
        title: 'Misión', 
        description:'Contribuir al desarrollo de soluciones tecnológicas innovadoras que generen un impacto positivo en la sociedad, participando activamente en proyectos significativos y trabajando en equipo con responsabilidad, ética y compromiso, mientras fortalezco mis habilidades técnicas y humanas.'
    },
    {
        title: 'Visión', 
        description: 'Convertirme en un desarrollador fullstack altamente competente, capaz de liderar y ejecutar proyectos tecnológicos integrales que transformen realidades y mejoren la vida de las personas, manteniendo siempre un enfoque en la excelencia, la innovación y el desarrollo continuo.'
    }
]
function SobreMi(){
    return(
           <section className="sobre-mi">
        <div className="organizador">
            {Sobremi.map((info, index) => (
            <div className="tarjeta-sobre-mi" key={index}>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
            </div>
            ))}
        </div>
    </section>
    )
}
export default SobreMi