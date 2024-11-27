<script>
    let ThemeColor = "red"
    let colors = [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"}, {namn: "Grön", value: "=green"}]

    import {users_store} from "$lib/user";

    let user_list = [];

    let username = "";
    let password = "";

    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            user_list = JSON.parse($users_store);
        }});

    function handleSubmit() {
        let log_in_attempt = {username: username, password: password};

        // Kolla om användaren finns
        let username_exists = user_list.filter(u => log_in_attempt.username == u.username);

        // Om användaren finns. Kolla om lösenordet är rätt.
        if (username_exists.length != 0 && username_exists[0].password === log_in_attempt.password) {

            alert("Välkommen tillbaka!!!")
        }
        else {
            alert("Användarnamn finns inte")
        }
    }
</script>

<main style="--theme-color : {ThemeColor}">
    <div class="container">

        <h1 style="font-size: 35px;">Logga in</h1>

        <form action="" on:submit|preventDefault={handleSubmit}>

            <label for="username">E-post address:</label>
            <input type="text" id="username" class="smallbox" minlength=1 bind:value={username}>

            <label for="password">Lösenord:</label>
            <input type="password" id="password" class="smallbox" minlength=1 bind:value={password}>

            <input type="submit" id="login" value="Logga in">
        </form>
        
        <p>Har du inget konto? <a href="/register" style="font-style: oblique;">skapa ett</a></p>
    
    </div>
</main>

<style>
    main{
        background-image: url("https://poppegon.github.io/BeskoWeb/photos/Registerer.png");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
    }

    :global(body), :global(html){
        margin: 0%;
        padding: 0%;
        height: 100vh;
        width: 100vw;
    }

    .container {
        height: 40%;
        width: 35%;
        min-width: 300px;
        margin: auto;

        background: #af734e;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: space-around;
        justify-content: space-evenly;

        border-style: solid;
        border-color: white;
        border-width: 2px;
        border-radius: 20px;
    }

    .container h1 {
        color: white;
    }

    .smallbox {
        border-radius: 5px;
        width: 200px;
        height: 40px;
    }

    #register {
        background-color: var(--theme-color); 
    }
</style>