import { useState } from "react";
export default function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value atribute"
  );
  const [car, setCar] = useState('Volvo')

  const handleChange = (e) =>{
    setCar(e.target.value)
  }

  return(
    <>
    <form>
        <textarea value={textarea} onChange={e => setTextarea(e.target.value)}></textarea>
    </form>
    <form>
        <select value={car} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select>
    </form>
    </>
    
  )
}
