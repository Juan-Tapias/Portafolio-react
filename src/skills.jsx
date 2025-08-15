import "./css/skills.css"

const SkillsArray = [
    {
        imagen: 'img/python.png',
        lenguaje: 'Python'
    },
    {
        imagen: 'img/html.webp',
        lenguaje: 'HTML'
    },
    {
        imagen: 'img/CSS.png',
        lenguaje: 'CSS'
    },
    {
        imagen: 'img/Git.png',
        lenguaje: 'Git'
    },
    {
        imagen: 'img/javascript.png',
        lenguaje: 'JavaScript'
    },
    {
        imagen: 'img/MySQL.png',
        lenguaje: 'MySQL'
    },
    {
        imagen: 'img/react.png',
        lenguaje: 'React'
    },
    {
        imagen: 'img/Java.png',
        lenguaje: 'Java'
    }
]

function Skills (){
    return (
        <>
        <section className="habilidades">
            <div className="titulo-skills">
                <h2>Habilidades tecnicas</h2>
            </div>
            <div className="skills-carrusel">
                <div className="container-skills" id="original">
                     {SkillsArray.map((skill, index)=>(
                    <div className="html" key={index}><img src={skill.imagen} alt="HTML"/> <p>{skill.lenguaje}</p></div> 
                     ))}
                    {SkillsArray.map((skill, index)=>(
                    <div className="html" key={index}><img src={skill.imagen} alt="HTML"/> <p>{skill.lenguaje}</p></div> 
                     ))}
                </div>
            </div>
        </section>
        <section>
            <div className="titulo-skills">
                <h2>Proyectos</h2>
            </div>

        </section>
    </>
    )
}

export default Skills