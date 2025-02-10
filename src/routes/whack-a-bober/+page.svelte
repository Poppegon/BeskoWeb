<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    let keyboardImgSrc = base + "/keyboard.png"
    let hitMarkerImgSrc = base + "/betterHitMarker.png"
    let boberImgSrc = base + "/illustration-of-cartoon-beaver-pixel-design-sticker-u8a01-46ff-x240.png"

    let hitMarkerPos = {
        x : 0,
        y : 0
    }

    let boberPos = {
        x : 0,
        y : 0
    }

    let score = 0
    let time = 0
    let stamina = 100

    let keySize = {
        x : 43,
        y : 35
    }
    let keyboardSize = {
        x : 599,
        y : 168
    }
    let hitMarkerOrigo = {
        x : 170,
        y : 280
    }

    let keyCoordinates = {
        a: { x: 18, y: 47 },
        b: { x: 253, y: 88 },
        c: { x: 154, y: 88 },
        d: { x: 117, y: 47 },
        e: { x: 104, y: 6 },
        f: { x: 166, y: 47 },
        g: { x: 216, y: 47 },
        h: { x: 266, y: 47 },
        i: { x: 352, y: 6 },
        j: { x: 315, y: 47 },
        k: { x: 365, y: 47 },
        l: { x: 415, y: 47 },
        m: { x: 352, y: 88 },
        n: { x: 303, y: 88 },
        o: { x: 402, y: 6 },
        p: { x: 452, y: 6 },
        q: { x: 5, y: 6 },
        r: { x: 154, y: 6 },
        s: { x: 67, y: 47 },
        t: { x: 203, y: 6 },
        u: { x: 303, y: 6 },
        v: { x: 203, y: 88 },
        w: { x: 55, y: 6 },
        x: { x: 104, y: 88 },
        y: { x: 253, y: 6 },
        z: { x: 54, y: 88 }
    }

    let alphabetList = [
    "a" , "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
];

    let hit = null
    let bober = null

    console.log(hitMarkerOrigo.y + (hitMarkerPos.y * 2) + " " + hitMarkerOrigo.x + (hitMarkerPos.x * 2))

    onMount(()=>{
        hit = document.getElementById("hitMarker");

        bober = document.getElementById("bober")

        setInterval(countDown, 50)
        setInterval(showBober, 2000)
        setInterval(regenerateStamina, 20)
    });
    

    function onKeyDown(key)
    {
        //console.log("Key pressed: " + key.key)

        if (key.key in keyCoordinates)
        {
            showHitMarker(keyCoordinates[key.key])
        }
    }

    function showHitMarker(coords)
    {
        if (stamina > 50)
        {
            hitMarkerPos = coords

            if (hit) hit.style.display = "block"

            stamina -= 50
            stamina = stamina
            time = 50
        }

        if (!bober) return

        console.log("Beaver: " + boberPos.x, boberPos.y)
        console.log("Hit: " + hitMarkerPos.x, hitMarkerPos.y)

        if (hitMarkerPos.x == boberPos.x && hitMarkerPos.y == boberPos.y && bober.style.display == "block")
        {
            score += 1
            bober.style.display = "none"
        }
    }

    function hideHitMarker()
    {
        if (hit) hit.style.display = "none"
    }

    function countDown()
    {
        if (time > 0)
        {
            time -= 50
        }
        else
        {
            hideHitMarker()
        }
    }

    function randomKeyPos()
    {
        let max = alphabetList.length
        let randomIndex = Math.floor(Math.random() * max)
        let randomLetter = alphabetList[randomIndex];

        //console.log("Random key: " + randomLetter)

        for (let k in keyCoordinates)
        {
            if (k == randomLetter) return keyCoordinates[k]
        }
        
        console.log("no key found")
        return keyCoordinates.a
    }

    function showBober()
    {
        let randomPos = randomKeyPos()

        //console.log(randomPos)

        if (randomPos)
        {
            boberPos.x = randomPos.x
            boberPos.y = randomPos.y
        }

        if (bober) bober.style.display = "block"
    }

    function regenerateStamina()
    {
        if (stamina < 100) stamina += 1
        stamina = stamina
    }
</script>

<main>
    <h1>Whack a Bober!</h1>

    <h2>Score: {score}</h2>

    <div id="staminaContainer">
        <div id="staminaBar" style="height: {stamina * 2}px;"></div>
    </div>

    <div style="width: {keyboardSize.x}px; height: {keyboardSize.y}px;">
        <img src="{keyboardImgSrc}" alt="Keyboard" id="keyboard">

        <img src="{boberImgSrc}" alt="BOBER" id="bober" style="top: {hitMarkerOrigo.y + (boberPos.y * 2) - 17}px; left: {hitMarkerOrigo.x + (boberPos.x * 2) - 20}px;">

        <img src="{hitMarkerImgSrc}" alt="HIT" id="hitMarker" style="top: {hitMarkerOrigo.y + (hitMarkerPos.y * 2)}px; left: {hitMarkerOrigo.x + (hitMarkerPos.x * 2)}px;">
    </div>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown}/>

<style>
    img {
        /* Även de förstorade bilderna ska vara krispiga hittade inte tillbaka till källan */
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+      */
    }

    h1 {
        text-align: center;
        font-size: 80px;
        height: 80px;
        margin-top: 40px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    h2 {
        text-align: center;
        height: 100px;
        font-size: xx-large;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    #keyboard {
        transform: scale(2);
        margin-top: 80px;
    }

    #bober {
        width: 86px;
        height: 70px;
        display: none;
        position: absolute;
    }

    #hitMarker {
        transform: scale(2);
        display: none;
        position: absolute;
    }

    #staminaContainer {
        border-width: 2px;
        border-color: black;
        height: 203px;
        width: 30px;

        position: absolute;
        top: 300px;
        left: 60px;
    }

    #staminaBar {
        background-color: greenyellow;
        width: 100%;
    }
</style>