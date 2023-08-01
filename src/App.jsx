import { useEffect, useState } from "react"

function App() {

  const [characters, setCharacters] = useState([])

  // Para hacer la petición a la api
  useEffect(() =>{
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      setCharacters(data.results)
    }

    // Para llamar la función 
    fetchData();
  },[])

  return <div>
    <h1>Rick and Morty</h1>
    {
      //Con la función .map() se va a recorrer  la información de cada uno de los documentos
      characters.map(character => {
        return(
          <div>
            {/* Para poder obtener la información de los objetos del arreglo y en react se utilizan las llaves {} de esta forma puedes obtener la información */}
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        )
      })
    }
  </div>
}

export default App