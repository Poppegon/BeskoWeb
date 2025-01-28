<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { base } from "$app/paths"

    let pokemonTypes = {
        bug         : base + "/types/bug.png",
        dark        : base + "/types/dark.png",
        dragon      : base + "/types/dragon.png",
        electric    : base + "/types/electric.png",
        fairy       : base + "/types/fairy.png",
        fighting    : base + "/types/fighting.png",
        fire        : base + "/types/fire.png",
        flying      : base + "/types/flying.png",
        ghost       : base + "/types/ghost.png",
        grass       : base + "/types/grass.png",
        ground      : base + "/types/ground.png",
        ice         : base + "/types/ice.png",
        normal      : base + "/types/normal.png",
        poison      : base + "/types/poison.png",
        psychic     : base + "/types/psychic.png",
        rock        : base + "/types/rock.png",
        shadow      : base + "/types/shadow.png",
        steel       : base + "/types/steel.png",
        water       : base + "/types/water.png"}

    function capitalFirstLetter(param)
    {
        return param.charAt(0).toUpperCase() + param.slice(1)
    }

    function makeWeightKgsOrHeightMeters(param)
    {
        return param * 0.1
    }

    function makeTwoDecimals(inputString) // för att lösa att det ibland blir tex: 12.0000000000001 kg
    {
        let countDown = 3
        let result = ""

        for (let char of inputString)
        {
            if (countDown < 3 && countDown > 0)
            {
                countDown -= 1
            }

            if (char === ".")
            {
                countDown = 2
            }
            result += char

            if (countDown === 0)
            {
                return result
            }
        }

        return result
    }

    function removeDash(inputString) // vissa har konstiga namn om sin typ
    {
        let result = ""

        for (let char of inputString)
        {
            if (char === "-")
            {
                return result
            }

            result += char
        }
        return result
    }

    function changeSprite(imgUrl)
    {
        document.getElementById("pokeImg").src = imgUrl;
    }
</script>


{ #await data }
    <p>.. waiting</p>
{ :then pokemon }

<div class="headerBox">
    <a href="/search/{ (pokemon.response.id - 1) }">
    <h4>Previous: #{ (pokemon.response.id - 1) }</h4></a>

    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; width: 300px; cursor: pointer;">
        <h1>{ capitalFirstLetter(removeDash(pokemon.response.name)) }</h1>
        <h2 style="color: #D9D3D3"> #{ pokemon.response.id }</h2>
    </div>

    <a href="/search/{ (pokemon.response.id + 1) }">
    <h4>Next: #{ pokemon.response.id + 1 }</h4></a>
</div>

<article class="pokemonArticle">
    <div class="statistics">

        <div class="sideContainer">
            <img class="pokeImg" id="pokeImg" src={ pokemon.response.sprites.front_default } alt="default front of cute pokemon" style="margin-bottom: 10px;">
        
            <div class="gallery">
                { #each Object.entries(pokemon.response.sprites) as sprite }
                    { #if typeof sprite[1] == "string" }
                        <!-- svelte-ignore missing-declaration -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <img class="imageWrapper" style="border-width: 0px;" src="{ sprite[1] }" alt="{ sprite[0] }" on:click={ changeSprite(sprite[1]) }>
                    { /if }
                { /each }
            </div>

            <div class="infobox">
                <h2>Weight: { makeTwoDecimals(String(makeWeightKgsOrHeightMeters(pokemon.response.weight))) } kg</h2>

            </div><div class="infobox">
                <h2>Height: { makeTwoDecimals(String(makeWeightKgsOrHeightMeters(pokemon.response.height))) } m  </h2>

            </div><div class="infobox">
                <h2>ID: #{ pokemon.response.id }</h2>
            </div>
        </div>

        <div class="sideContainer">
            <div class="infobox">
                <h3>Types: </h3>

                { #each pokemon.response.types as type }
                    <img src="{ pokemonTypes[type.type.name] }" alt="{ type.type.name }" class="typeImg">
                { /each }
            </div>

            <div class="infobox">
                <h3>Abilities: </h3>
                { #each pokemon.response.abilities as ability }
                    <h2>{ capitalFirstLetter(ability.ability.name) }</h2>
                { /each }
            </div>
        </div>
    </div>

    <div class="evolutionsBox">
        <h2>Evolutions: </h2>

        <div class="evolutions">
            { #if pokemon.response.evolutions && pokemon.response.evolutions.length > 0 }
                { #each pokemon.response.evolutions as evolution }

                    <a class="evolution" href="/search/{ evolution.name }">
                        <img src="{ evolution.image }" alt="{ evolution.name }" class="evolutionImg">
                        <p>{ capitalFirstLetter(removeDash(evolution.name)) }</p>
                    </a>

                { /each }
            { :else }
                <p>No evolutions available.</p>
            { /if }
        </div>
    </div>
</article>

{ /await }

<style>
    html * {
        font-family: sans-serif !important;
    }

    .pokemonArticle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        height: 30%;
        gap: 1em;
        margin-right: 10%;
        margin-left: 10%;
    }

    .gallery {
        display: flex;
        flex-direction: row;
        overflow: scroll;
        width: 400px;
    }

    .imageWrapper {
        width: 200px;
        margin: 5px;
        border-radius: 10px;
    }

    .imageWrapper:active { transform: scale(0.9); }

    .statistics {
        display: grid;
		grid-template-columns: repeat(2, 50%);
    }

    @media (min-width: 1000px) {
        .statistics{
            grid-template-columns: repeat(2, 500px);
            grid-template-rows: repeat(1, auto);
        }
    }

    @media (max-width: 1000px) {
        .statistics{
            grid-template-columns: repeat(1, auto);
            grid-template-rows: repeat(2, auto);
        }
    }

    img {
        /* Även de förstorade bilderna ska vara krispiga hittade inte tillbaka till källan */
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+      */
    }

    .pokeImg {
        width: 400px;
        border-width: 3px;
        border-color: black;
    }

    .typeImg {
        width: 400px;
    }

    h1 {
        font-size: 50px;
        margin: 20px;
    }

    .headerBox {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #323233;
        color: white;
        border-radius: 10px;
        width: 90%;
        margin-right: 10%;
        margin-left: 10%;
    }

    h2 {
        font-size: larger;
    }

    h3 {
        font-size: large;
    }

    h4 {
        font-size: medium;
        background-color: ghostwhite;
        border-radius: 10px;
        color: #323233;
        padding: 3px;
        width: 109px;
    }

    .infobox {
        color: white;
        background-color: #323233;

        padding: 5px;
        padding-left: 10px;
        margin-bottom: 10px;

        border-radius: 10px;
        width: 350px;
    }

    .sideContainer {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        padding: 10px;
    }

    .evolutions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-right: 10%;
        margin-left: 10%;
        cursor: pointer;
    }

    .evolutionsBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #323233;
        color: white;
    }

    .evolution {
        margin: 10px;
        display: flex;
        text-align: center;
        justify-content: center;
        border-radius: 50%;
        border-width: 2px;
        padding: 10px;
    }

    .evolutionImg {
        width: 100px;
        height: 100px;
    }      
</style>