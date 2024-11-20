<script>
    let ThemeColor = "red"
    let colors = [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"}, {namn: "Grön", value: "=green"}]

    import {users_store} from "$lib/user";
    
    // @ts-ignore
    let user_list = [];

    let first_name = "";
    let last_name = "";
    let age = "";
    let username = "";
    let email = "";
    let animal = "";
    let color = "";
    let password = "";

    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            user_list = JSON.parse($users_store);
        }});

    function handleSubmit() {        
        let new_user = {last_name: last_name, first_name: first_name, age: age, username: username, email: email, color: color, animal: animal, password: password};

        let username_taken = user_list.filter(u => new_user.username == u.username);
        if (username_taken.length != 0) {
            alert("Användarnamnet är upptaget")
        }
        else {
            user_list = [...user_list, new_user];
            $users_store = JSON.stringify(user_list);
            alert("Välkommen In")
        }
    }

</script>

<main style="--theme-color : {ThemeColor}">
    <div class="container">

        <h1 style="font-size: 35px;">Registrering</h1>

        <form action="" on:submit|preventDefault={handleSubmit}>

            <div style="width: 100px; height: 100px; border-radius: 50%; border-width: 2px; border-color: white; overflow:hidden; background-color:{ThemeColor}; justify-self: center;"></div>

            <label for="first_name">Förnamn:</label>
            <input type="text" id="first_name" class="smallbox" minlength=1 bind:value={first_name}>

            <label for="last_name">Efternamn:</label>
            <input type="text" id="last_name" class="smallbox" minlength=1 bind:value={last_name}>

            <label for="age">Din ålder:</label>
            <input type="number" id="age" class="smallbox" bind:value={age}>

            <label for="username">Användarnamn:</label>
            <input type="text" id="username" class="smallbox" minlength=3 bind:value={username}>

            <label for="email">E-post address:</label>
            <input type="text" id="email" class="smallbox" bind:value={email}>

            <label for="animal">Ditt favoritdjur:</label>
            <select name="Favoritdjur" id="animal" class="smallbox" bind:value={animal}>
                <option value="" selected disabled hidden>Välj här</option>
                <option value="dog">Hund</option>
                <option value="cat">Katt</option>
                <option value="ide">Id</option>
                <option value="elephant">Elefant</option>
                <option value="tufted duck">Vigg</option>
                <option value="moose">Älg</option>
                <option value="penguin">Pingvin (rätt svar)</option>
                <option value="shrew">Näbbmus</option>
                <option value="seaotter">Havsutter</option>
            </select>

            <label for="color">Din favoritfärg:</label>
            <input type="color" id="color" class="smallbox" bind:value={color}>

            <label for="password">Lösenord:</label>
            <input type="password" id="password" class="smallbox" minlength=5 {password}>

            <input type="submit" id="register" value="Registrera" class="smallbox">

            <p>Har du redan ett konto?
                <a href="/login" style="font-style: oblique;">logga in</a>
            </p>
            
        </form>
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
        height: 110%;
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