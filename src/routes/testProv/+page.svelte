<script>
    let listLength = 7
    let list = Array(listLength)
    console.log(list)

    let showImage = false

    setInterval(() => {
        let boxes = document.getElementsByClassName("box")
    }, 10);

    function loopThroughBoxes()
    {
        for (let box of boxes)
        {
            //box.content = 
        }
    }

    function randomNumber(max)
    {
        let topIndex = Math.floor(Math.random()*max)

        if (topIndex > 3) {showImage = true}

        return list.slice(0, topIndex)
    }
</script>

<main>
    <div id="headerBox"></div>

    <div id="gridBox">
        { #each list as squareNr,i }
            <div class="box">
                {#if i > 0}
                    <li>

                        { #each list.slice(0, i) as n,i }
                            { i }
                        {/each }
                    </li>
                {/if}
            </div>
        {/each}
    </div>

    <form>
        <input type="number" bind:value={listLength} min={0} max={7}>
        <button on:click={()=>randomNumber()}>Random</button>
    </form>

    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="photos/Sus.jpg" style="position: fixed; height: 100px; width: 100px; left: 0; bottom: 0;">
</main>


<style>
    main {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    @media (max-width: 900px) {
        #gridBox {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    #gridBox {
        height: 60%;
        width: 70%;
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 25% 50% 25%;
        justify-content: space-between;
        align-items: space-between;
    }

    #gridBox:nth-child(1) {
        grid-column: 1 / 4;
    }

    .box {
        background-color: red;
        width: auto;
        height: auto;
        border-width: 5px;
        border-color: white;
        padding: 10px;

        display: flex;
        flex-direction: column;
    }

    .box:active{border: dotted;}
</style>