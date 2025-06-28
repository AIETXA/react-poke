

function Formulario({ nombre, setNombre }) {

return (
  <>
  <form onSubmit={(e) => e.preventDefault()}>
  <label htmlFor="nombre">Nombre del Pokemon</label>
  <input 
    type="text" 
    id="nombre" 
    name="nombre" 
    value={nombre} 
    onChange={(e) => setNombre(e.target.value)}/>
  </form>
</>  

 )
}

export default Formulario;