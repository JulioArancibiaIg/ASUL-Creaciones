
function Contacto() {
  return (
    <section className="seccion contacto-seccion">
      <p className="etiqueta">ASUL CREACIONES</p>
      <h1>Hablemos de tu próximo accesorio</h1>
      <p className="contacto-intro">
        Completá el formulario para realizar una consulta.
        ¡Nos encantaría conocerte!
      </p>

      <div className="contacto-grid">
        <form
          className="formulario"
          action="https://formsubmit.co/julioignacioarancibia@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nueva consulta desde ASUL Creaciones"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Escribí tu nombre"
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
          />

          <label htmlFor="mensaje">Tu mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="Contanos en qué podemos ayudarte..."
            required
          />

          <button className="boton-principal" type="submit">
            Enviar mensaje
          </button>

          <p className="aviso-formulario">
            Tus datos se utilizarán para responder tu consulta.
          </p>
        </form>

        <div className="mapa-contenedor">
          <h2>Encontranos</h2>
          <p>Salta Capital, Salta, Argentina</p>

          <iframe
            title="Mapa de Salta Capital"
            src="https://maps.google.com/maps?q=Salta%20Capital%2C%20Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contacto;
