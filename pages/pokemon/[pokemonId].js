import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";


export const getStaticPaths = async() => {
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon";
  
    
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    if (!res.ok) {
    throw new Error(`Fetch failed with status ${res.status}`);
    }
    const data = await res.json();
    
    //params
    const paths = data.results.map((pokemon, index) => {
    return {
        params: {pokemonId: (index + 1).toString() },
    }
    })

    return {
    paths,
    fallback: false
    }
   
}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonId    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data }
    }
}

export default function Pokemon({pokemon}) {
    return ( 
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}> {pokemon.name}</h1>
            <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="120" height="120"  alt={pokemon.name}/>
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className= {`${styles.type} ${styles['type_'+item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div> 
            <div className={styles.data_container}>
                <div>
                    <h4>Altura:</h4>
                    <p className={styles.data_height}>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4>Peso:</h4>
                    <p className={styles.data_weight}>{pokemon.weight / 10} Kg</p>
                </div>
            </div>           
        </div>
    )
}