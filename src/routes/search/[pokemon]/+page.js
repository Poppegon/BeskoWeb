import { error } from '@sveltejs/kit';
import { search_store } from '$lib/user';
import { get } from 'svelte/store';

/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch })
{
    /* params.pokemon matches to the [pokemon] in the filesystem */
    /* for example navigating to /search/pikachu in this example will put pikachu in params.pokemon */
    console.log(params.pokemon);

    /* Perform a networked HTTP GET request to an external API  */
    /* Documentation: https://pokeapi.co */
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+params.pokemon.toLowerCase(), {
        method: 'GET', // *GET, POST, PUT, DELETE, etc. 
    });
    /* If the response status is not 200, meaning did not find a pokemon, throw an error  */
    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }
    
    let data = await response.json(); // parses JSON response into native JavaScript objects

    // Nedan för att få utvecklings kedjan för pokemon men den ger bara  ett rakt led och inte hela trädet

    // Fetch Pokémon species data
    const speciesResponse = await fetch(data.species.url);
    if (speciesResponse.status !== 200) {
        throw error(speciesResponse.status, { message: speciesResponse.statusText });
    }
    const speciesData = await speciesResponse.json();

    // Fetch evolution chain data
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    if (evolutionResponse.status !== 200) {
        throw error(evolutionResponse.status, { message: evolutionResponse.statusText });
    }
    const evolutionData = await evolutionResponse.json();

    // Extract evolution chain
    const evolutions = [];
    let currentEvolution = evolutionData.chain;
    do {
        const pokemonId = currentEvolution.species.url.split('/').slice(-2, -1)[0];
        evolutions.push({
            name: currentEvolution.species.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`});

        currentEvolution = currentEvolution.evolves_to[0];
    } while (currentEvolution);

    data.evolutions = evolutions;


    // Add the new search to the recent searches
    let recentSearches = get(search_store);
    recentSearches = recentSearches ? JSON.parse(recentSearches) : [];

    let duplicate = false
    for (let search of recentSearches) { if (search.name == data.name) { duplicate = true } }

    if (!duplicate)
    {
        recentSearches.unshift(data);

        if (recentSearches.length > 5)
        {
            recentSearches = recentSearches.slice(0, 5);
        }
        recentSearches = recentSearches
    }

    // Update the search_store
    search_store.set(JSON.stringify(recentSearches));

    console.log(data);
    return { params, response: data }; 

}


