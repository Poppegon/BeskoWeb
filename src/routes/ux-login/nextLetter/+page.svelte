<script>
	import { onMount } from "svelte";
    import { base } from "$app/paths";

    let username = ""
    let password = ""
    let writingUsername = true

    let originalLetters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzÅåÄäÖö"
    let letters = originalLetters
    let currentIndex = 0
    let currentLetter = "ö"

    let currentNumber = 0
    let ageDetermined = false

    let ballPosition = {x : 100, y : 0}
    let lastBallPosition = ballPosition
    let ballVelocity = {x : 0, y : 0}
    let gravity = 5
    let ballGrabbed = false
    let frictionMultiplier = 0.95
    let floorHeight = 800

    let goalPosition = {x : 900, y : 500}
    let goalWidth = 200
    let goalHeight = 100
    let score = 0

    // Från SuperNovas metod för att hämta muspekarpositionen
    let mouseX = 0;
    let mouseY = 0;
    
    onMount(()=>{
        setInterval(nextNumber, 20);
        
        // Från SuperNovas metod för att hämta muspekarpositionen
        document.addEventListener('mousemove', onMouseUpdate, false);
        document.addEventListener('mouseenter', onMouseUpdate, false);

        initiateBall()
        setInterval(addBallGravity, 20);
        setInterval(checkForGoal, 100);
        setInterval(physicsProcess, 20);
    })


// @ts-ignore
    function onMouseUpdate(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        //console.log("Mouse: " + mouseX, mouseY);
        //console.log("Ball: " + ballPosition.x, ballPosition.y)
    }

/*
function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}*/

    // @ts-ignore
    function switchMode(newMode)
    {
        if (newMode === "username")
        {
            writingUsername = true
            showNextLetter()
        }
        else
        {
            writingUsername = false
            showNextLetter()
        }
    }

    function addletter()
    {
        if (writingUsername)
        {
            username += currentLetter
        }
        else
        {
            password += currentLetter
        }
    }

    function showNextLetter()
    {
        if (currentIndex >= letters.length)
        {
            currentIndex = 0
        }

        // Ta nästa bokstav
        currentLetter = letters.charAt(currentIndex)
        currentLetter = currentLetter
        currentIndex += 1

        // Man ska ju såklart inte kunna se lösenordet. Täck över det med stjärnor
        if (!writingUsername)
        {
            currentLetter = "*"
        }
    }

    // Klickar man på titeln ska man få en överaskning som gör det ännu svårare att logga in
    function randomizeLetters()
    {
        letters = shuffle(letters)
        letters = letters
        console.log(letters)
    }

    // En modifierad version av Fisher-Yates shuffle för att hantera strängar
    // @ts-ignore
    function shuffle(string)
    {
        var a = string.split(""),
            n = a.length;

        for(var i = n - 1; i > 0; i--)
        {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
/*
    // Mitt försök till att blanda en sträng, lyckades aldrig men jag tror att jag var nära.
    // @ts-ignore
    function shuffle(string)
    {
        let currentIndex = string.length

        let newString = ""

        let usedIndexes = []

        while (currentIndex > 0)
        {

            // välj slumpmässigt av kvarvarande bokstäver
            let randomIndex = Math.floor(Math.random() * currentIndex)

            // Ta ut bokstav från index radera bokstaven som togs bort frpn strängen
            let newAddition = string.slice(randomIndex, randomIndex + 1)

            if (!usedIndexes.includes(randomIndex))
            {
                console.log(newAddition)
                console.log(newString)

                // Lägg till på resultatssträngen
                newString += newAddition
                usedIndexes.push(randomIndex)
                currentIndex -= 1
            }
        }
    return newString
    }*/

    function nextNumber()
    {
        if (!ageDetermined)
        {
            currentNumber += 1
            currentNumber = currentNumber
        }
    }

    function resetNumber()
    {
        currentNumber = 0
        currentNumber = currentNumber
        ageDetermined = false
    }

    function submitAge()
    {
        ageDetermined = true
    }

    function register()
    {
        let message = ""

        if (username.length > 3 && password.length > 5 && ageDetermined && score > 0)
        {
            if (currentNumber > 100)
            {
                alert("Are you really that old? Try again.")
                return
            }
            alert("Registered!!!")
            return
        }
        
        if (username === "")
        {
            message += "Enter your username, please. "
        }
        else if (username.length < 3)
        {
            alert("User name must be at least three characters long.")
            return
        }
        
        if (password === "")
        {
            message += "Enter your password, please. "
        } else if (password.length < 5)
        {
            alert("Password must be at least five characters long.")
            return
        }

        if (!ageDetermined)
        {
            message += "How old are you?"
        }

        if (score < 0)
        {
            alert("failed")
        }

        if (message) alert(message)
    }

    function initiateBall()
    {
        let ball = document.getElementById("ball")
        ballPosition.x = parseInt(ball.style.left)
        ballPosition.y = parseInt(ball.style.top)
    }

    function physicsProcess()
    {
        if (ballGrabbed)
        {
            ballPosition.x = mouseX - 25
            ballPosition.y = mouseY - 25
        }
        else
        {
            lastBallPosition = ballPosition

            ballPosition.x += ballVelocity.x
            ballPosition.y += ballVelocity.y

            // fallit ur fönstret
            if (ballPosition.y > (floorHeight - 50))
            {
                ballPosition.y = (floorHeight - 50)
                ballVelocity.y = -ballVelocity.y
            }
        }
        ballVelocity.x = ballVelocity.x * frictionMultiplier
        ballVelocity.y = ballVelocity.y * frictionMultiplier
    }

    function getVelocity()
    {
        ballVelocity.x = ballPosition.x - lastBallPosition.x
        ballVelocity.y = ballPosition.y - lastBallPosition.y
    }

    function addBallGravity()
    {
        if (!ballGrabbed)
        {
            ballVelocity.y += gravity
        }
    }

    function grabBall()
    {
        ballGrabbed = !ballGrabbed

        if (!ballGrabbed)
        {
            getVelocity()
        }
    }

    function checkForGoal()
    {
        if ((ballPosition.x + 25) > goalPosition.x && (ballPosition.x + 25) < (goalPosition.x + goalWidth) && (ballPosition.y + 25) > goalPosition.y && (ballPosition.y + 25) < (goalPosition.y + goalHeight))
        {
            score += 1
            alert("You scored a goal!!!")

            // resetta bollen
            ballGrabbed = false
            ballPosition = {x : 0, y : 0}
        }
    }
</script>

<section>
    <div class="Login">
        <button on:click={()=>randomizeLetters()} class="header"><h1>Register here</h1></button>

        <button on:click={()=>register()} class="registerButton">Register</button>

        <div class="goalArea" style="width: {goalWidth}px; height: {goalHeight}px; top: {goalPosition.y}px; left: {goalPosition.x}px;"></div>
        <div id="floor" style="top: {floorHeight}px;"></div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={()=>grabBall()} id="ball" style="left: {ballPosition.x}px; top: {ballPosition.y}px;"></div>

        <div>
            <button on:click={()=>switchMode("username")} class:active= { writingUsername }>Username</button>
            <button on:click={()=>switchMode("password")} class:active= { !writingUsername }>Password</button>
        </div>

        <h2>{currentLetter}</h2>

        <div style="margin-top: 20px;">
            <p>Is gud?</p>
            <button on:click={()=>showNextLetter()} class="no">No</button>
            <button on:click={()=>addletter()} class="yes">Yes</button>
        </div>

        <div>
            <h2>- {username} -</h2>
            <hr>
            <h2>- {password} -</h2>
            <hr>
        </div>
    </div>

    <div class="ageBox">
        <h1>How old are you?</h1>
        <h1 class="number">{currentNumber}</h1>

        <div class="submitRoamingArea">
            <button on:click={()=>submitAge()} class="submit">Submit</button>
        </div>
    </div>

    <aside><button on:click={()=>resetNumber()} class="resetButton">Reset?</button></aside>
</section>

<style>
    .goalArea {
        position: absolute;

        color: blue;
        background-color: blue;
    }

    #floor {
        position: fixed;
        width: 100vw;
        height: 10px;

        background-color: burlywood;
    }

    #ball {
        position: fixed;
        left: 60px; top: 60px;
        cursor: grab;
        height: 50px;
        width: 50px;
        border-radius: 25px;
        background-color: red;
    }

    h1{
        text-align: center;
        font-size: 100px;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 50px;
    }

    h2 {
        font-size: 50px;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 40px;
        text-align: center;
    }

    hr {
        margin-top: 20px;
    }

    p {
        text-align: center;
    }

    .registerButton {
        position: fixed;
        right: 80vw;
        top: 20vh;
    }

    .header {
        background-color: white;
        color: black;
        margin-bottom: 100px;
        margin-top: 0px
    }

    .yes {
        background-color: red;
        color: black;
    }

    .no {
        background-color: greenyellow;
        color: black;
    }

    .Login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    button {
        background-color: crimson;
        color: white;
        padding: 10px;
        margin: 10px;
        font-size: 30px;
        border-radius: 10px;
    }

    .number {
        margin: 60px;
        border-width: 5px;
        border-color: black;
        padding: 30px;
    }

    .active {
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

    aside{
        width: 10px;
        height: 10px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: blueviolet;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ageBox {
        margin-top: 50vh;
        margin-bottom: 50vh;
        width: 800px;
        justify-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-around;
    }


    .submit {
        margin-top: 0%;
        margin-left: 50%; 

        animation: roam 3000ms ease-in-out;
        animation-iteration-count: infinite;
        background-color: black;
        width: 140px;
    }

    .submitRoamingArea {
        height: 300px;
        width: 300px;
        border-width: 3px;
        border-color: black;
        margin: auto;
    }

    @keyframes roam {
            0% { margin-top: 40%;
                margin-left: 0%; }
            25% { margin-top: 0%;
                margin-left: 25%; }
            50% { margin-top: 40%;
                margin-left: 53%; }
            80% { margin-top: 85%;
                margin-left: 25%; }
            100% { margin-top: 40%;
                margin-left: 0%; }
    }

    .resetButton {
        background-color: white;
        color: black;
        font-size: small;
    }
</style>