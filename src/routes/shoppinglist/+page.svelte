<script>

</script>

<main>
    <div class="container">
        <h1>Shopping List</h1>
        <div class="categories_container">
            <div class="grid-container">

            </div>
        </div>
    </div>
</main>

<style>
    .container {
        width: 60vw;
        height: 70vh;
        border-radius: 20px;
        background-color: #ff0043;
    }

    .categories_container {
        height: 100%;
        border-radius: 20px;
        background-color:ghostwhite
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        grid-column-gap: 5px;
        grid-row-gap: 3px;

        justify-content: center;
    }
</style>