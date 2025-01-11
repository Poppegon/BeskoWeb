<script>
    import {users_store} from "$lib/user";



    import { onMount } from 'svelte';

    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            user_list = JSON.parse($users_store);
        }});

    /*let new_user = {last_name: last_name, first_name: first_name, age: age, username: username, email: email, color: color, animal: animal, password: password};

    let username_taken = user_list.filter(u => new_user.username == u.username);

    if (username_taken.length != 0) {
        alert("Användarnamnet är upptaget")
    }
    user_list = [...user_list, new_user];
    $users_store = JSON.stringify(user_list);
    alert("Välkommen In") */
</script>