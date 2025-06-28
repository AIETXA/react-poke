import { useState } from 'react'

function Formulario({ nombre, setNombre }) {

return (
  <>
  <form>
  <label htmlForm="nombre">Nombre del Pokemon</label>
  <input 
  type="text" 
  id="nombre" 
  name="nombre" 
  value={nombre} onChange={(e) => setNombre(e.target.value)}/>
  <button type="submit">Buscar</button>
  </form>
</>  

 )
}

export default Formulario;