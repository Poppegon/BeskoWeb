<script>
    import { goto } from "$app/navigation";
    let search = ""
</script>


<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" class="searchBar" bind:value={search}/>
  </form>

<style>
    .searchBar {
        border-width: 2px;
        border-radius: 5px;
        background-color: ghostwhite;
    }
</style>