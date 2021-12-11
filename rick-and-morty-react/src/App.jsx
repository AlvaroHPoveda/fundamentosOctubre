import { useEffect, useState } from "react";
import './App.css';
import CharacterCard from "./components/CharacterCard"


function App() {
    const URL = "https://rickandmortyapi.com/api/"
    const [ personajes, setPersonajes] = useState(null);

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData() {
        let data =  await   fetch( `${URL}character` )
                            .then( response => response.json() )
                            .then( data => data )

        setPersonajes( data.results )
    }

    return (
    <div className="App">
        <main>
            {
                personajes?.map( ( elemento, index ) => (
                    <CharacterCard 
                    key={`card-${index}`} 
                    personajeData={ elemento }
                    />
                ))
            }
        </main>
    </div>
    );
}

export default App;
