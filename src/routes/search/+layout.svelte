<script>
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';
    import { search_store } from '$lib/user';
    import { onMount } from 'svelte';
    let search = ""

    let recentSearches = []

    function loadRecentSearches()
    {
        console.log(JSON.parse($search_store))
		recentSearches = $search_store.length > 2 ? JSON.parse($search_store) : [];
        recentSearches = recentSearches
    }

    function capitalFirstLetter(param)
    {
        return param.charAt(0).toUpperCase() + param.slice(1)
    }

    // Hämta senaste sökningarna från search_store
    onMount(() => {
        /*Check if has more then 2 characters*/
        loadRecentSearches()
    });
    
</script>

<div class="backdrop"></div>

<main class="main">
    <h1>Pokedex</h1>
    <div class="navBar">

        <form on:submit|preventDefault={()=> {loadRecentSearches() ;goto(base + '/search/'+search)}}>
            <input type="text" placeholder="Sök upp en annan pokemon" class="searchBar" bind:value={ search }/>
        </form>

        <div class="button" on:click={()=> {loadRecentSearches() ;goto(base + '/search/'+search)}}>
            <h1>Sök</h1>
        </div>
    </div>

    <slot></slot>

    <div class="recentSearches">
        <h1 style="font-size: large;">Senaste Sökningar:</h1>
        { #each recentSearches as search }
            <a href="{ base }/search/{ search.name }">
                <div class="recentSearch">
                    <h2>{capitalFirstLetter(search.name)}</h2>
                </div>
            </a>
        { /each }
    </div>
</main>

<style>
    .navBar {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .searchBar {
        border-width: 2px;
        border-radius: 5px;
        background-color: ghostwhite;
        width: 80vw;
        margin: 10px;
    }

    .button {
        height: 43.2px;
        display: flex;
        justify-content: center;
        margin-top: 17px;
        font-size: 30px;
    }

    .main {
        size: 80vw 100vh;
        background-color: rgba(255, 255, 255, 0.8);
        margin: 5vh auto;

        border-width: 5px;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .backdrop {
        height: 100vh;
        width: 100vw;
        background: url("https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960");
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(5px);
    }

    h1 {
        font-family: sans-serif;
        width: auto;
        height: 40px;
        font-size: 35px;
        margin: 15px;
        padding: 10px;
        border-radius: 10px;
        background-color: ghostwhite;
        cursor: pointer;
    }

    h2 {
        font-family: sans-serif;
        font-size: 20px;
        margin: 10px;
    }

    .recentSearches {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .recentSearch {
        width: 100px;
        height: 40px;
        background-color: ghostwhite;
        border-radius: 50%;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>