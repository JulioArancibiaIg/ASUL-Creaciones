
import Inicio from "./pages/Inicio";
import { useState } from "react";
import "./index.css";
import productos from "./data/productos";
import Contacto from "./pages/Contacto";

function App() {
  const [pagina, setPagina] = useState("inicio");

  return (
    <div className="sitio">
      <header className="encabezado">
        <a
          className="logo"
          href="#inicio"
          onClick={() => setPagina("inicio")}
        >
          ASUL <span>CREACIONES</span>
        </a>

        <nav>
          <button onClick={() => setPagina("inicio")}>
            Inicio
          </button>
          <button onClick={() => setPagina("productos")}>
            Productos
          </button>
          <button onClick={() => setPagina("contacto")}>
            Contacto
          </button>
        </nav>
      </header>

      <main>
        {pagina === "inicio" && <Inicio />}

        
{pagina === "productos" && (
  <section className="seccion">
    <p className="etiqueta">NUESTRA COLECCIÓN</p>
    <h1>Productos</h1>
    <p>Descubrí los productos de ASUL Creaciones.</p>

    <div className="productos-grid">
      {productos.map((producto) => (
        <article className="producto" key={producto.id}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
          />

          <div className="producto-info">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <strong>
              {producto.precio.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              })}
            </strong>
          </div>
        </article>
      ))}
    </div>
  </section>
)}


        {pagina === "contacto" && <Contacto />}
      </main>

      <footer className="pie">
        <p>© 2026 ASUL Creaciones · Marroquinería</p>
        <p>Diseñado con React</p>
      </footer>
    </div>
  );
}

export default App;
