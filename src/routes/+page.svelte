<script>
	import { base } from "$app/paths";

	let color = "#ff0043"
</script>

<svg style="fill : {color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="" fill-opacity="1" d="M0,192L26.7,165.3C53.3,139,107,85,160,58.7C213.3,32,267,32,320,42.7C373.3,53,427,75,480,96C533.3,117,587,139,640,128C693.3,117,747,75,800,64C853.3,53,907,75,960,101.3C1013.3,128,1067,160,1120,149.3C1173.3,139,1227,85,1280,80C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>

<main>
	<div>
		<h1>Alvin Hansson</h1>
		<p>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</p>
		<div class="citat">
			<h2 style="color: #ff0043;">Inspirerande citat för min webbutvecklingsresa:</h2>
			<p>“My precious”</p>
		</div>
	</div>

	<div id="otherLinks">
		<a href="{base}/ux-login/nextLetter">Dålig inloggningssida</a>
		<a href="{base}/whack-a-bober">whack-a-bober</a>
	</div>

	<svg viewBox="0 0 150 140" xmlns="http://www.w3.org/2000/svg">
		<path id="blob" fill="#00FFBC" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
  	</svg>

</main>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0043" fill-opacity="1" d="M0,96L26.7,117.3C53.3,139,107,181,160,181.3C213.3,181,267,139,320,101.3C373.3,64,427,32,480,58.7C533.3,85,587,171,640,224C693.3,277,747,299,800,266.7C853.3,235,907,149,960,117.3C1013.3,85,1067,107,1120,138.7C1173.3,171,1227,213,1280,192C1333.3,171,1387,85,1413,42.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>

<style>
	main{
		margin: auto;
		width: 90vw;
		display: grid;
		grid-template-columns: repeat(2,30%);
	}

	h1 {
		margin-bottom: 10px;
		margin-top: 10px;
		text-align: center;
		font-size: 37px;
		font-family: '';
		color: grey;
		margin-bottom: 20px;
	}

	.citat {
		transition: transform 300ms ease-in-out normal;
		order:1;
		text-align: center;
	}

	.citat:hover { transform: scale(1.3); }

	a {
		color: #ff0043;
	}

	#otherLinks {
		position: absolute;
		left: 80%;
		width: 200px;
		height: 100px;

		border-width: 4px;
		border-color: #00FFBC;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-evenly;
	}

	@media (max-width: 600px) {
		#blob {
			fill: aqua;
		}
	}
</style>
  