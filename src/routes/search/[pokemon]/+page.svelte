<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import {base} from "$app/paths"

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

    function makeTwoDecimals(param)
    {
        let i = 1
        while (i <= param.length())
        {
            i += 1
        }
    }
</script>


{ #await data }
<p>.. waiting</p>
{ :then pokemon }

<h1>{ capitalFirstLetter(pokemon.response.name) }</h1>

<article class="pokemonArticle">
    <div class="statistics">

        <div class="sideContainer">
            <img class="pokeImg" src={ pokemon.response.sprites.front_default } alt="default front of cute pokemon" style="margin-bottom: 10px;">
        
            <div class="infobox">
                <h2>Weight: { makeWeightKgsOrHeightMeters(pokemon.response.weight) } kg</h2>

            </div><div class="infobox">
                <h2>Height: { makeWeightKgsOrHeightMeters(pokemon.response.height) } m  </h2>

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
</article>



<section>

</section>

{ /await }

<style>
    .pokemonArticle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 80%;
        height: 30%;
        gap: 1em;
        margin-right: 10%;
        margin-left: 10%;
    }

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


    .pokeImg {
        /* Även de förstorade bilderna ska vara krispiga hittade inte tillbaka till källan */
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+      */

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
        font-family: sans-serif;
    }

    h2 {
        font-size: larger;
    }

    h3 {
        font-size: large;
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
</style>