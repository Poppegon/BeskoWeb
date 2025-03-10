<script>
    let items_to_buy = [{name : "mjöl", price : 210, prio : 0}];
    let items_bought = [{name : "mjölk", price : 34567, prio : 0}];

    let new_vara_name = "";

    function handleSubmit() {
        if (new_vara_name == "") {return}

        let new_item = {name : new_vara_name, price : 0, prio : 0}
        new_item.price = new_item.name.length * 3

        items_to_buy.push(new_item)
        items_to_buy = items_to_buy

        new_vara_name = ""
    }

    function buyItem(vara_index) {
        items_bought.push(items_to_buy[vara_index])
        items_to_buy.splice(vara_index, 1)
        items_to_buy = items_to_buy
        items_bought = items_bought
    }

    function removeUnboughtItem(vara_index) {
        items_to_buy.splice(vara_index, 1)
        items_to_buy = items_to_buy
    }

    function removeBoughtItem(vara_index) {
        items_bought.splice(vara_index, 1)
        items_bought = items_bought
    }

    $:items_to_buy.sort((a, b) => {
        return b.prio - a.prio
    })
</script>

<main>
    <div class="grid-container">
        <div class="container">
            <h1 class="Header" style="font-size: x-large;">Shopping List</h1>
            <div class="categories_container">
                <section class="section">
                    <h2 class="Header">Varor att köpa</h2>

                    <ol class="list">
                        { #each items_to_buy as vara,i }
                            <li class="list_item" style="order: {vara.prio};">{ vara.name } | { vara.price } :-

                                <form action="" on:submit|preventDefault={()=>buyItem(i)}>
                                    <input type="submit" id="buy_vara" value="[Köp]" class="smallbox">
                                </form>

                                <form action="" on:submit|preventDefault={()=>removeUnboughtItem(i)}>
                                    <input type="submit" id="remove_vara" value="[Ta bort]" class="smallbox">
                                </form>

                                <form action="" on:submit|preventDefault={() => {}}>
                                    <label for="prio">Prio:</label>
                                    <input type="number" id="prio" bind:value={vara.prio} class="prio">
                                </form>
                            </li>
                        { /each }
                    </ol>
                </section>

                <section class="section">
                    <h2 class="Header">Köpta varor</h2>

                    <ol class="list">
                        { #each items_bought as vara,i }
                            <li class="list_item">{ vara.name }

                                <form action="" on:submit|preventDefault={()=>removeBoughtItem(i)}>
                                    <input type="submit" id="remove_vara" value="[Ta bort]" class="smallbox">
                                </form>
                            </li>
                        { /each }
                    </ol>
                </section>
            </div>
            <form action="" on:submit|preventDefault={handleSubmit}>
                <input type="text" id="new_vara_name" class="smallbox" minlength=1 bind:value={new_vara_name}>
                <input type="submit" id="add_vara" value="[Lägg till]" class="smallbox">
            </form>
        </div>
    </div>
</main>

<style>
    .prio {
        height: 40px;
        width: 60px;
    }

    input {
        cursor: pointer;
    }

    .container {
        justify-self: center;
        width: 60vw;
        height: 95vh;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
        background-color: white;
        padding: 10px;

        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
    }

    .categories_container {
        justify-content: center;
        height: 100%;
        border-radius: 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .section {
        height: 80vh;
        width: 100%;
        overflow-y: scroll;
        border-width: 1px;
        border-color: red;
        border-radius: 20px;
    }

    .grid-container {
        display: grid;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        margin-top: 20px;

        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 3px;
    }

    .Header {
        justify-self: center;
    }

    .list {
        list-style: circle;
        list-style-position: inside;
        padding-left: 20px;

        transition: fly;
    }

    .list_item {
        border-bottom-width: 1px;
        border-color: red;
        border-radius: 5px;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .list_item :first-child {
        align-self: flex-start;
    }

    .smallbox {
        border-radius: 7px;
        margin-top: 10px;
        margin-left: 10px;
        border-color: red;
    }
</style>