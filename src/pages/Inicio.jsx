
import { useEffect, useState } from "react";

function Inicio() {
  const [productosApi, setProductosApi] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductosApi(datos.products.slice(0, 3));
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los datos. Revisá tu conexión.");
        setCargando(false);
      });
  }, []);

  return (
    <section className="seccion">
      <p className="etiqueta">ASUL CREACIONES</p>
      <h1>Inspiración y tendencias</h1>
      <p>Estos productos se obtienen desde una API pública.</p>

      {cargando && <p>Cargando productos...</p>}
      {error && <p>{error}</p>}

      <div className="productos-grid">
        {productosApi.map((producto) => (
          <article className="producto" key={producto.id}>
            <img
              src={producto.thumbnail}
              alt={producto.title}
            />
            <div className="producto-info">
              <h2>{producto.title}</h2>
              <p>{producto.description}</p>
              <strong>
                {producto.price.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 2,
                })}
              </strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Inicio;
