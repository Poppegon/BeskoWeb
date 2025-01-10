<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
    import { chat_store } from "$lib/user";

    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($chat_store.length > 2){
            chat = JSON.parse($chat_store);
        }});

    const eliza = new ElizaBot();

    let clearButton = "buttons/clearChat.png"

    let botName = "Eliza"
    let userName = "user"
    let chat = [{ user: botName, message: eliza.getInitial() }];
    let isWriting = false
    
    async function write(message)
    {
        if (isWriting) { return }

        chat.push({user : userName, message : message})
        chat = chat

        //Hämta HTML-elementet med id:et visible
        var element = document.getElementById("visible");

        //Ändrar elementets CSS-egenskap display till default
        element.style.display = "block"; // Visa elementet

        isWriting = true
        // random delay for Eliza's response time
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
        isWriting = false

        element.style.display = "none"; // Göm elementet

        let response = eliza.transform(message)
        chat.push({user : botName, message : response})
        chat = chat

        $chat_store = JSON.stringify(chat);
    }

    function loadChat()
    {
        chat = $chat_store.getItem("chats");
        chat = chat
    }

    function clearChat()
    {
        chat = [{ user: botName, message: eliza.getInitial() }];
        chat = chat

        $chat_store = JSON.stringify(chat);
    }
</script>

<main class="chatHead">
    <section class="chatContainer">
        { #each chat as message }   
            <article class={ message.user }>
                <p>
                    { message.message }
                </p>
            </article>
        { /each }

        <article id="visible" style="background-color: transparent;">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </article>
    </section>

    <div class="min-animation"> </div>

    <form  method="post"
        use:enhance={({ formElement, formData, action, cancel }) => {
            cancel(); //don't post anything to server
            const text = formData.get("text"); // what does "text" refer to?
            write(text);

            formElement.reset()

        }}>
            <input type="text" id="send" name="text" value="" class="textBox">

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img src="{ clearButton }" alt="clear chat" on:click={()=>clearChat()}>
    </form>
</main>

<style>
    .chatHead {
        width: 60vw;
        height: 70vh;
        padding: 10px;
        background-color: darkcyan;
        margin: auto;
    }

    .chatContainer {
        height: 90%;
        overflow-y: scroll;
    }

    article {
        margin: 10px;
        background-color:ghostwhite;
        border-radius: 10px;
        width: 80%;
        overflow: auto;
    }

    .Eliza {
        background-color: red;
        padding-left: 10px;
        margin-right: 20%;
    }

    .user {
        background-color: lime;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        margin-left: 20%;
    }

    #visible {
        width: 100px;
        height: 60px;
        padding: 0px;
        display: none;
    }

    .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: grey;
        display: inline-block;
        animation: ballBounce 1000ms ease-in-out;
        animation-iteration-count: infinite;
        margin-right: 5px;
    }

    @keyframes ballBounce {
            0% { transform: scale(1); }
            40% { transform: scale(1.5); }
            80% { transform: scale(1); }
            100% { transform: scale(1); }
    }

    /* CSS-stilar för .circle med index 1 (den första cirkeln) */
    .circle:nth-child(1) {
        animation-delay: 0ms; /* Ingen fördröjning */
    }
    /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
    .circle:nth-child(2) {
        animation-delay: 150ms; /* Starta animationen efter 333 millisekunder (ms) */
    }
    /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
    .circle:nth-child(3) {
        animation-delay: 300ms; /* Starta animationen efter 666 ms */
    }

    img {
        height: 16px;

        /* Även de förstorade bilderna ska vara krispiga hittade inte tillbaka till källan */
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+      */
    }
</style>