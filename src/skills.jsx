import "./css/skills.css"

function Skills (){
    return (
        <>
        <section className="habilidades">
            <div className="titulo-skills">
                <h2>Habilidades tecnicas</h2>
            </div>
            <div className="skills-carrusel">
                <div className="container-skills" id="original">
                    <div className="html"><img src="img/python.png" alt="HTML"/> <p>Python</p></div>
                    <div className="html"><img src="img/html.webp" alt="HTML"/> <p>HTML</p></div>
                    <div className="html"><img src="img/CSS.png" alt="HTML"/> <p>CSS</p></div>
                    <div className="html"><img src="img/Git.png" alt="HTML"/> <p>Git</p></div>
                    <div className="html"><img src="img/javascript.png" alt="HTML"/> <p>Javascript</p></div>
                    <div className="html"><img src="img/MySQL.png" alt="HTML"/> <p>MySQL</p></div>
                    <div className="html"><img src="img/Java.png" alt="HTML"/> <p>Java</p></div>
                </div>
                <div className="container-skills clone" id="clon">
                    <div className="html"><img src="img/python.png" alt="HTML"/> <p>Python</p></div>
                    <div className="html"><img src="img/html.webp" alt="HTML"/> <p>HTML</p></div>
                    <div className="html"><img src="img/CSS.png" alt="HTML"/> <p>CSS</p></div>
                    <div className="html"><img src="img/Git.png" alt="HTML"/> <p>Git</p></div>
                    <div className="html"><img src="img/javascript.png" alt="HTML"/> <p>Javascript</p></div>
                    <div className="html"><img src="img/MySQL.png" alt="HTML"/> <p>MySQL</p></div>
                    <div className="html"><img src="img/Java.png" alt="HTML"/> <p>Java</p></div>
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