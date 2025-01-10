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

    let restartButton = "photos/restartButton.png"

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
        console.log("cards created")
        cards = [];
        
        for (let i = 0; i < images.length; i++)
        {
            cards.push({id : i, flipped : false, complete : false, image : images[i]})
            cards.push({id : i, flipped : false, complete : false, image : images[i]})
        }

        shuffle(cards)
        cards = cards
    }

    function gameOver()
    {
        if (bluePoints > redPoints)
        {
            alert("BLÅ VANN!")
        }
        else if (redPoints > bluePoints)
        {
            alert("RÖD VANN!")
        }
        else
        {
            alert("OAVGJORT!")
        }
    }

    function restartGame()
    {
        bluePoints = 0
        redPoints = 0
        blueTurn = true
        createCardsList()
    }

    function resetCards() {
        setTimeout(() => {
            cards.forEach((card) =>
            {
                card.flipped = card.complete
                console.log("cards reset")
            });
            flippedCards = [];
            cards = cards

            let completeCards = 0

            cards.forEach((card) =>
            {
                if (card.complete === true)
                {
                    completeCards++
                }
            });

            if (completeCards === cards.length)
        {
            gameOver()
        }
        }, 1000);
    }

    function flipCard(card)
    {
        if (flippedCards.length < 2 && card.flipped === false)
        {
            card.flipped = true
            flippedCards.push(card)
            cards = cards
        

        if (flippedCards.length === 2)
            {
                let firstFlip = flippedCards[0]
                
                if (card.id === firstFlip.id)
                {
                    firstFlip.complete = true
                    card.complete = true
                    cards = cards

                    if (blueTurn)
                    {
                        bluePoints++
                        console.log("POINT AWARDED TO BLUE, GO AGAIN")
                    }
                    
                    else
                    {
                        redPoints++
                        console.log("POINT AWARDED TO RED, GO AGAIN")
                    }
                }
                
                else
                {
                    console.log("NO MATCH => NO POINT")
                    blueTurn = !blueTurn;
                    console.log("TURNS CHANGED")
                }
                
                cards = cards
                resetCards()
            }
        }
    }

</script>

<h1 style="justify-self: center; font-size: 30px; margin-top: 10px;">Memory</h1>

<main class="board">
    { #each cards as card }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="card" class:flipped= { card.flipped } on:click={()=>flipCard(card)}>
                <img class ="front" src="{ card.image }" alt="{ imagesAlt[card.id] }">
                <img class="back" src="{ bg }" alt="hidden card">
        </div>
    { /each }
</main>

<div class="restartContainer">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="restart" src="{ restartButton }" on:click={()=>restartGame()}>
</div>

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
        grid-gap: 10px;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }

    .card {
        border-radius: 10px;
        border-width: 1px;
        border-color: black;

        position: relative;
    
        transform-style: preserve-3d;
        transition: transform 0.3s;
        cursor: pointer;
    }

    .card:not(.flipped):hover { transform: scale(1.1); }

    img {
        height: 100px;
        position: absolute;
        backface-visibility: hidden;

        /* Även de förstorade bilderna ska vara krispiga hittade inte tillbaka till källan */
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+      */
    }

    .front {
        width: 100px;
        transform: rotateY(180deg);
    }

    .back {
        width: 100px;
    }

    .turn {
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

    .flipped {
        transform: rotateY(180deg);
    }

    .restartContainer {
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    .restart {
        width: 200px;
        cursor: pointer;

        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }

    .restart:active { transform: scale(0.9); }

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

    
    @media (min-height: 500px){
        main{
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(3, 100px);
        }
    }
    @media (max-height: 500px){
        main{
            grid-template-columns: repeat(6, 100px);
            grid-template-rows: repeat(2, 100px);
        }
    }
          
                          
</style>