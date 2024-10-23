<script>
</script>

<main>
    <div>
        <h1>PhotoApp</h1>
    </div>
    <div class = "photos">
        <div class ="image-wrapper"><img src="https://i.redd.it/rofzm44oka091.png" alt="Flexbox egenskaper"></div>
        <div class ="image-wrapper"><img src="https://i.redd.it/vd9dc7wfk9471.png" alt="Flexbox cheat-sheet"></div>
        <div class ="image-wrapper"><img src="photos/Bebe.jpg" alt="skibi"></div>
        <div class ="image-wrapper"><img src="photos/Josef.png" alt="skibi"></div>
        <div class ="image-wrapper"><img src="photos/Samir.jpg" alt="skibi"></div>
        <div class ="image-wrapper"><img src="photos/Sus.jpg" alt="skibi"></div>
    </div>
</main>

<style>
    h1{
        text-align: center;
        font-size: 70px;
        font-family:'';
        color: grey;
        margin-bottom: 20px;
    }
    .photos {
        display: flex;
        flex-wrap: wrap;
        width:100vw;
        align-items: center;
        justify-content: center;
        background: burlywood;
    }
    .image-wrapper {
        transition:flex 150ms ease-in-out normal;
        order:1
    }
    .image-wrapper img{
        width: 100%;
        padding: 3px;
        border-radius: 20px;
        border: 2px solid white;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
        max-height: 400px;
        min-height: 399px;
    }
    .image-wrapper:hover { flex-grow: 0.1; }
    .image-wrapper:active { transform: scale(0.9); }
</style>