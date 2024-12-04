<script>
// @ts-nocheck


    let images = [
        "photos/Memorybloromb.png",
        "photos/memoryrothexagoon.png",
        "photos/memorygulstrarna.png", 
        "photos/memorygryncirkel.png",
        "photos/memoryrosakaos.png",
        "photos/memorylilabomb.png"
    ]

    let imagesAlt = [
        "blue",
        "red",
        "yellow",
        "green",
        "pink",
        "purple"
    ]

    let bg = "photos/memorybakgrund.png"

    let cards = [];
    let flippedCards = [];
    let amountOfCards = 12

    let redPoints = 0
    let bluePoints = 0

    let blueTurn = true

    createCardsList()

    // "Snodde" Shuffle från Fisher–Yates (aka Knuth)
    function shuffle(array)
    {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0)
        {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }

    function createCardsList()
    {
        for (let i = 0; i < images.length; i++)
        {
            cards.push({id : i, flipped : false, complete : false, image : images[i]})
            cards.push({id : i, flipped : false, complete : false, image : images[i]})
        }

        shuffle(cards)
        cards = cards
        console.log(cards)
    }

    function flipCard(card)
    {
        if (flippedCards.length < 2 && card.flipped === false)
        {
            card.flipped = true
            flippedCards.push(card)
        }

        if (flippedCards.length === 2)
        {
                let firstFlip = flippedCards[0]
                
                if(card.id === firstFlip.id)
                {
                    firstFlip.complete = true
                    card.complete = true
                    cards = cards

                    if (blueTurn)
                    {
                        bluePoints++
                        console.log("POINT AWARDED TO BLUE")
                    }
                    
                    else
                    {
                        redPoints++
                        console.log("POINT AWARDED TO RED")
                    }
                }
                
                else
                {
                    console.log("NO MATCH => NO POINT")
                    blueTurn = !blueTurn;
                    console.log("TURNS CHANGED")
                }
                
                cards = cards
                /*resetCards()*/
            }
    }

</script>

<h1 style="justify-self: center; font-size: 30px; margin-top: 10px;">Memory</h1>

<main class="board">
    { #each cards as card }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="card" class:flipped= { card.flipped } on:click={()=>flipCard(card)}>
            <h1>
                <div class ="front"><img src="{ images[card.id] }" alt="{ imagesAlt[card.id] }" class="image"></div>
                <div class="back"><img src="{ bg }" alt="hidden card" class="image"></div>
            </h1>
        </div>
    { /each }
</main>

<aside class="blue">
    <p>
        { bluePoints }
    </p>
</aside>
<aside>
    <p>
        { redPoints }
    </p>
</aside>

<aside class="turn" class:blue= { blueTurn }></aside>

<style>
    .board {
        justify-self: center;
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: repeat(3, 100px);
        grid-gap: 10px;
    }

    .card {
        border-radius: 10px;
        border-width: 1px;
        border-color: black;

        position: relative;
    
        transform-style: preserve-3d;
        transition: transform 0.5s;
        cursor: pointer;
    }

    .image {
        height: 100px;
        width: 100px;
        position: relative;

        /* Även de förstorade bilderna ska vara krispiga*/
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+      */
    }

    .front {
        position: absolute;
        transform: rotateY(180deg);
    }

    .back {
        backface-visibility: hidden;
    }

    .turn {
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

    .flipped {
        transform: rotateY(180deg);
    }

    aside{
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blue {
        left: 10px;
        background-color: blue;
    }

    p{
        font-size: 30px;
    }
                          
</style>