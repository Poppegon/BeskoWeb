<script>
	import { setContext } from "svelte";
    import { onMount } from 'svelte';
	import { quadIn } from "svelte/easing";

    const products = [
        {
            name : "Vitlöksbröd med flingsalt",
            imgSrc : "https://receptfavoriter.se/sites/default/files/styles/recipe_1x1/public/vitloksbrod_med_flingsalt_1060.jpg",
            price : 99,
            info : "Receptfavoriter",
            countryOfOrigin : "Sweden",
            quantity : 1
        }, 
        {
            name : "Vitlöksbröd med persilja",
            imgSrc : "https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1444656111/64691.jpg",
            price : 199,
            info : "Coop",
            countryOfOrigin : "Sweden",
            quantity : 1
        },
        {
            name : "Vitlöksbröd med ugnsrostad vitlök",
            imgSrc : "https://helanshabani.se/app/uploads/sites/10/2022/04/267351013_217657717191363_3400514627456815313_n-500x500.jpg",
            price : 159,
            info : "Helan Shabani",
            countryOfOrigin : "Sweden",
            quantity : 1
        },
        {
            name : "Vitlöksbröd med parmesan och oregano",
            imgSrc : "https://receptfavoriter.se/sites/default/files/styles/recipe_1x1/public/vitloksbrod_med_parmesan_oregano_1060.jpg",
            price : 239,
            info : "Receptfavoriter",
            countryOfOrigin : "Sweden",
            quantity : 1
        },
        {
            name : "Ostiga vitlöksbröd på Levain",
            imgSrc : "https://pagen.se/globalassets/recept/2024/ostiga-vitloksbrod-pa-levain.jpg?w=734&h=462&mode=crop&resized=true",
            price : 189,
            info : "Pågen",
            countryOfOrigin : "Sweden",
            quantity : 1
        },
        {
            name : "Vitlöksbröd",
            imgSrc : "https://www.paleofamiljen.com/wp-content/uploads/2018/10/43405816_2147551742167107_2936772085793423360_n.jpg",
            price : 79,
            info : "Paleofamiljen",
            countryOfOrigin : "Sweden",
            quantity : 1
        },
        {
            name : "Vitlöksbröd med mozzarella och örter",
            imgSrc : "https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1635864386/cloud/238104.jpg",
            price : 129,
            info : "Coop",
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
        cartImage.style.width = "400px"

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
            products[productIndex].quantity += 1
            products[productIndex].quantity = products[productIndex].quantity
        } else {
            shoppingCartContents.push(products[productIndex])
            // @ts-ignore
            shoppingCartContents = shoppingCartContents
        }
        
        updateCart()
    }

    // @ts-ignore
    function removeProduct(actionType, productIndex)
    {
        if (actionType === "add")
        {
            shoppingCartContents[productIndex].quantity += 1
            shoppingCartContents[productIndex].quantity = shoppingCartContents[productIndex].quantity
        }

        // @ts-ignore
        if (shoppingCartContents[productIndex].quantity > 1)
        {
            // @ts-ignore
            shoppingCartContents[productIndex].quantity -= 1
            // @ts-ignore
            shoppingCartContents[productIndex].quantity = shoppingCartContents[productIndex].quantity
        }
        else
        {
            // @ts-ignore
            shoppingCartContents.splice(productIndex, 1)
        }
    }
</script>

<div id="headerBar">
    <div id="backdrop"></div>

    <h1><strong>Bröd och död</strong></h1>

    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="shoppingCart" on:click={()=>clickCart()}>
        <div id="cartBody">
            <div id="cartContents" class:invisible= {!cartOpen}>
                { #each shoppingCartContents as product, i }
                    <div class="listProduct">
                        <p style="width: 60%;">{product.name}</p>
                        <p style="width: 15%;">{product.price} kr</p>

                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <p class="+" on:click={()=>removeProduct("subtract", i)}>X</p>

                        <p style="bottom: 0px; width: 10%;">x{product.quantity}</p>

                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <p class="+" on:click={()=>removeProduct("add", i)}>X</p>
                    </div>
                {/each}
                <h2><strong>Total price: </strong>{totalPrice} kr</h2>
            </div>
            
            <div class="cartWheel" id="wheel1"></div>
            <div class="cartWheel" id="wheel2"></div>
        </div>
    </div>
</div>


<div id="productGrid">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    { #each products as productCard, i }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="productCard" on:click={()=>sendToCart(i)}>
            <img src="{productCard.imgSrc}" alt="{productCard.name}" class="productImg">

            <div style="display: flex; justify-content: space-around; flex-direction: row;">
                <h2><strong>{productCard.name}</strong></h2>
                <h2 style="width: 40%;">{productCard.price} kr</h2>
            </div>

            <div>
                <p>{productCard.info}</p>
            </div>
        </div>
    {/each}

</div>

<style>
    #productGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        padding: 20px;
        overflow: scroll;
    }

    .productCard {
        border-width: 2px;
        border-radius: 5px;
        border-color: black;
        padding: 10px;
        background-color: white;
        height: 320px;
        cursor: grab;

        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        transition: transform 50ms ease-in-out normal;
        order: 1;
    }

    .productCard:active { transform: scale(0.9); }

    .listProduct {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-bottom-width: 2px;
        border-color: black;
    }

    .x {
        width: 10%;
        border-width: 2px;
        border-color: black;
        border-radius: 5px;
        text-align: center;
    }

    #headerBar {
        display: flex;
        justify-content: space-between;
        border-width: 10px;
        height: 20vh;
    }

    h1 {
        color: #333;
        font-size: 50px;
        text-align: center;
        text-justify: center;
        margin: 20px;

        font-family:'Lucida Grande';
        background-color: white;
        text-justify: center;
        text-align: center;
        padding: 30px;

        border-width: 2px;
        border-color: black;
        border-radius: 5px;
    }

    @media (max-width: 350px){
        h1{
            font-size: 30px;
        }
    }

    img {
        border-radius: 5px;
        border-width: 2px;
    }

    #backdrop {
        position: fixed;
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

    #shoppingCart {
        position: relative;
        width: 105px;
        height: 108px;
        margin: 20px;
        cursor: pointer;
        z-index: 1;
    }

    #cartContents {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 10px;
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