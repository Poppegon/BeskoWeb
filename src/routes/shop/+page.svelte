<script>
	import { setContext } from "svelte";
    import { onMount } from 'svelte';

    const products = [
        {
            name : "Vitlöksbröd med flingsalt",
            imgSrc : "https://receptfavoriter.se/sites/default/files/styles/recipe_1x1/public/vitloksbrod_med_flingsalt_1060.jpg",
            price : 100,
            info : "bröd som är bakat",
            countryOfOrigin : "Sweden",
            quantity : 1
        }, 
        {
            name : "Vitlöksbröd med persilja",
            imgSrc : "https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1444656111/64691.jpg",
            price : 200,
            info : "bröd som är bakat",
            countryOfOrigin : "Sweden",
            quantity : 1
        }
    ]

    // @ts-ignore
    let shoppingCartContents = []

    // @ts-ignore
    let cartImage;
    // @ts-ignore
    let cartContentsContainer;

    onMount(() => {
        cartImage = document.getElementById("cartBody")
        cartContentsContainer = document.getElementById("cartContents")
        updateCart()
    });

    let totalPrice = 0
    let cartOpen = false

    function updateCart()
    {
        totalPrice = 0
        // @ts-ignore
        for (let product of shoppingCartContents)
        {
            totalPrice += product.price * product.quantity
        }

        shoppingCartContents = shoppingCartContents
    }

    function clickCart()
    {
        updateCart()
        if (!cartOpen) {
            openCart()
        } else if (cartOpen) {
        closeCart()
        }
    }

    function openCart()
    {
        // @ts-ignore
        cartImage.style.height = "400px"
        // @ts-ignore
        cartImage.style.width = "250px"

        cartContentsContainer.style.height = cartImage.style.height
        cartContentsContainer.style.width = cartImage.style.width

        cartOpen = true
    }

    function closeCart()
    {
        // @ts-ignore
        cartImage.style.height = "55px"
        // @ts-ignore
        cartImage.style.width = "88px"

        cartContentsContainer.style.height = cartImage.style.height
        cartContentsContainer.style.width = cartImage.style.width

        cartOpen = false
    }

    // @ts-ignore
    function sendToCart(productIndex)
    {
        const product = products[productIndex]
        // @ts-ignore
        const existingItem = shoppingCartContents.find(item => item.name === product.name)

        console.log(shoppingCartContents)

        if (existingItem)
        {
            existingItem.quantity += 1
            existingItem.quantity = existingItem.quantity
        } else {
            shoppingCartContents.push(products[productIndex])
            // @ts-ignore
            shoppingCartContents = shoppingCartContents
        }
        
        updateCart()
    }
</script>

<div id="headerBar">
    <div id="backdrop"></div>

    <h1>Bröd och död</h1>

    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="shoppingCart" on:click={()=>clickCart()}>
        <div id="cartBody">
            <div id="cartContents" class:invisible= {!cartOpen}>
                { #each shoppingCartContents as product, quantity }
                    <div class="listProduct">
                        <p>{product.name}</p>
                        <p>{product.price} kr</p>
                        <p style="bottom: 0px;">x{quantity}</p>
                    </div>
                {/each}
                <h2>Total price: {totalPrice} kr</h2>
            </div>
            
            <div class="cartWheel" id="wheel1"></div>
            <div class="cartWheel" id="wheel2"></div>
        </div>
    </div>
</div>

<main>
    <div id="productGrid">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        { #each products as productCard, i }
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="productCard" on:click={()=>sendToCart(i)}>
                <img src="{productCard.imgSrc}" alt="{productCard.name}" class="productImg">
                <div>
                    <p>{productCard.info}</p>
                </div>

                <div style="display: flex; justify-content: space-around; flex-direction: row;">
                    <h2>{productCard.name}</h2>
                    <h2>{productCard.price} kr</h2>
                </div>
            </div>
        {/each}

    </div>
</main>

<style>
    #productGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .productCard {
        border-width: 2px;
        border-color: black;
        padding: 10px;
        background-color: white;

        cursor: grab;
    }

    .listProduct {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }

    #headerBar {
        display: flex;
        justify-content: space-between;
        border-width: 10px;
    }

    h1 {
        color: #333;
        font-size: x-large;
        text-align: center;
        text-justify: center;
        margin-top: 20px;
    }

    #backdrop {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: -1;

        /* Gradientkoden lånade jag från: https://coolors.co/gradient-maker/88ff12-ffff00 behövde redigera lite */
        background: hsla(90, 100%, 54%, 1);
        background: linear-gradient(0deg, hsla(90, 100%, 54%, 1) 0%, hsla(60, 100%, 50%, 1) 100%);
        background: -moz-linear-gradient(0deg, hsla(90, 100%, 54%, 1) 0%, hsla(60, 100%, 50%, 1) 100%);
        background: -webkit-linear-gradient(0deg, hsla(90, 100%, 54%, 1) 0%, hsla(60, 100%, 50%, 1) 100%);
    }

    #cartContents {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    #shoppingCart {
        position: relative;
        width: 105px;
        height: 108px;
        margin: 20px auto;
        cursor: pointer;
    }

    #cartBody {
        position: absolute;
        width: 88px;
        height: 55px;
        background-color: white;
        border-color: black;
        border-width: 2px;
        top: 20px;
        right: 10px;
        border-radius: 5px;

        transition: all 0.5s ease, width 0.5s ease;

    }

    .cartWheel {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: white;
        border-color: black;
        border-width: 2px;
        border-radius: 50%;
        bottom: -40px;
        
    }

    #wheel1 {
        left: 3px;
    }

    #wheel2 {
        right: 3px;
    }
</style>