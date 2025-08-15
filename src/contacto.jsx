import './css/contacto.css'

const ContactoData =  [
    {
        imagen: 'img/whatsapp.svg',
        title: 'WhatsApp'
    },
    {
        imagen: '',
        title: 'GitHub'
    },
    {
        imagen: '',
        title: 'LinkedIn'
    },
    {
        imagen: '',
        title: 'Correo'
    },
]

function Contacto() {
  return (
   <>
    <section>
        <h2>Contacto</h2>
        <div className="cont-continer">
        {ContactoData.map((cont, index) =>(
            <div className='contacto-c' key={index}>
                <img src={cont.imagen} alt="imagen" />
                <p>{cont.title}</p>
            </div>
        ))}
        </div>
    </section>
    <section>
        <div className="negro"></div>
    </section>
   </>
  )
}

export default Contacto