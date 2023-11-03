import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  try {
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }
    const data = await res.json();
    //add pokemon index
    data.results.forEach((item, index) => {
      item.id = index + 1;
    });
    // Process the data
    return {
      props: {
        pokemons: data.results,
      },
    };
  } catch (error) {
    console.error("Fetch error:", error);
    // Handle the error gracefully, e.g., display an error message to the user
  }


}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<spam>Next</spam>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
