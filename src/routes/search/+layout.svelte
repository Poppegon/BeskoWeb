<script>
    import { goto } from "$app/navigation";
    let search = ""

    function clearSearch() //hitta ett sätt att tömma search när man söker
    {
        search = ""
    }
</script>

<div class="backdrop">

</div>

<main class="main">

    <div class="navBar">


        <form on:submit|preventDefault={()=> goto({base}+'/search/'+search)}>
            <input type="text" placeholder="Sök upp en annan pokemon" class="searchBar" bind:value={search}/>
        </form>

        <div class="button">
            <h1>Sök</h1>
        </div>
    </div>

    <slot></slot>
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
</style>