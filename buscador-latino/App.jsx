import { useState } from "react";

const negociosDemo = [
  {
    nombre: "Tienda Latina La Union Market",
    telefono: "(301) 330-5500",
    direccion: "8035 Snouffer School Rd, Gaithersburg, MD 20879",
    categoria: "Mercado / Tienda Latina",
  },
  {
    nombre: "Barberia Latina",
    telefono: "(301) 477-4131",
    direccion: "4731 Sellman Rd, Beltsville, MD 20705",
    categoria: "Barbería",
  },
  {
    nombre: "Lorena Latino Market",
    telefono: "(443) 759-4778",
    direccion: "1750 Eastern Ave, Baltimore, MD 21231",
    categoria: "Mini Market",
  },
];

function App() {
  const [filtro, setFiltro] = useState("");

  const negociosFiltrados = negociosDemo.filter((negocio) =>
    negocio.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    negocio.categoria.toLowerCase().includes(filtro.toLowerCase()) ||
    negocio.direccion.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Directorio de Negocios Latinos 🇺🇸📞</h1>
      <input
        type="text"
        placeholder="Buscar por ciudad, categoría o nombre..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: "100%" }}
      />
      {negociosFiltrados.map((negocio, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <strong>{negocio.nombre}</strong>
          <p>{negocio.direccion}</p>
          <p>{negocio.categoria}</p>
          <p style={{ color: "blue" }}>{negocio.telefono}</p>
        </div>
      ))}
      {negociosFiltrados.length === 0 && <p>No se encontraron resultados.</p>}
    </div>
  );
}

export default App;