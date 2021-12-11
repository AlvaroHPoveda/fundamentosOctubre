


function CharacterCard( props ) {
    
    const { personajeData } = props
    const { name, gender, location, species, image, status } = personajeData

    return(
        <article className="character-card">
            <div className="avatar-neon">
                <img src={ image } alt=""/>
            </div>
            <h5>{ name }</h5>
            <p><span>Status: </span> { status } </p>
            <p><span>especie: </span>{ species }</p>
            <p><span>Genero: </span>{ gender } </p>
            <p><span>ubicación: </span>{ location.name }</p>
        </article> 
    )
}

export default CharacterCard