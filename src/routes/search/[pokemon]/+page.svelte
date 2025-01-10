<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>


{ #await data }
<p>.. waiting</p>
{ :then pokemon }

<h1>{ pokemon.response.name }</h1>

<article class="pokemonArticle">


    { #each Object.entries(pokemon.response.sprites) as sprites }

        { #if typeof sprites[1] == "string" }
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={ sprites[1] }/>
        { /if }

    { /each }
</article>



<section>

</section>

{ /await }

<style>
    .pokemonArticle {
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 30%;
        gap: 1em;
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

        width: 200px;
        border-width: 3px;
        border-color: black;
    }

    h1 {
        font-size: 50px;
        margin: 20px;
    }
</style>