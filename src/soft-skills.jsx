import './css/soft-skills.css'

const skills = [
    {title: 'Trabajo en equipo', description: 'Capacidad para colaborar y contribuir en grupos diversos.'},
    {title: 'Comunicacion efectiva', description: 'Habilidad para expresar ideas de manera clara y persuasiva.'},
    {title: 'Resolucion de problemas', description: 'Enfoque analítico para abordar desafíos complejos.'},
    {title: 'Liderazgo', description: 'Habilidad para inspirar y guiar a otros hacia objetivos comunes.'},
    {title: 'Adaptabilidad', description: 'Flexibilidad para ajustarse a nuevas situaciones y tecnologías.'},
    {title: 'Creatividad', description: 'Capacidad para generar ideas innovadoras y soluciones originales.'},
    {title: 'Gestión del tiempo', description: 'Habilidad para priorizar tareas y cumplir plazos eficientemente.'},
    {title: 'Empatia', description: 'Capacidad para entender y considerar las perspectivas de otros.'},
]
function Soft() {
    return (
       <>
        <section className="habilidades">
            <div className="titulo-skills">
                <h2>Habilidades blandas</h2>
            </div>
            <div className="skills-soft">
                <div className="container-soft" id="original">
                    {skills.map((skill, index) => (
                        <div className="soft" key={index}> 
                        <p className='title'>{skill.title}</p>
                        <p className='description'>{skill.description}</p>
                    </div> 
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default Soft 