<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
	import { base } from '$app/paths';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<style>
	.links {
		display: flex;
		justify-content: space-between;
		padding: 5px 30px 5px 30px;
	}

	.loginregister {
		display: flex;
		justify-content: space-between;
	}

	a {
		padding: 4px;
		border-width: 2px;
		border-radius: 14px;
		border-color: #ff0043;
		background-color: white;
		overflow: hidden;
		height: 35px;
	}
</style>

<nav>
	<div class="links">
		<a href="{base}/">Home</a>
		<a href="{base}/photoapp">PhotoApp</a>
		<a href="{base}/shoppinglist">Shopping List</a>
		<a href="{base}/memory">Play Memory</a>
		<a href="{base}/chat">ChatBot</a>
		<a href="{base}/search">Search for Pokémon</a>
		<a href="{base}/about">About</a>
		<div class="loginregister">
			<a href="{base}/register" style="padding-right: 20px;">Register</a>
			<a href="{base}/login">Login</a>
		</div>
	</div>
</nav>
<slot />