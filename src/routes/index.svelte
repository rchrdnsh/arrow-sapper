<script>
	import { fadeIn, fadeOut } from "../animate";
	import Title from '../components/Title.svelte'
</script>

<style>
	.container {
		margin: 0;
		margin-bottom: 4rem;
		padding: 0;
		width: 100%;
		height: auto;
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 
			minmax(1rem, 1fr) 
			minmax(1rem, 90ch) 
			minmax(1rem, 1fr)
		;
	}

	h1 {
		display: black;
		grid-column: 2 / 3;
		color: var(--blue-1);
		font-family: var(--heading-font);
		font-weight: 400;
		text-transform: uppercase;
	}

	p {
		display: block;
		grid-column: 2 / 3;
		line-height: 2;
		font-family: var(--text-font);
		font-weight: 400;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class='container' in:fadeIn out:fadeOut>

	<Title
		image='img/arrow-create-1920x1200.jpg'
		alt='super cool image of stuff and things.'
		background='img/arrow-create-1920x1200.jpg'
		description='Arrow makes cool things.'
	/>

	<p>ArrowGTP is based in Orange County, CA, specializing in multicultural marketing, lead generation and public relations, and recognized as the go-to marketing firm for the Vietnamese American community.</p>

	<h1>Mission</h1>

	<p>To implement results-driven PR and marketing campaigns for all entities across all platforms using the most cutting-edge tools, designs, and strategies.</p>

	<h1>Vision</h1>

	<p>To transform the world’s businesses into successfully connected entities.</p>

	<h1>Culture</h1>

	<p>ArrowGTP’s culture revolves around technically savvy, aesthetic and connected individuals working in a modern environment. As a group of professionals certified on various platforms, we embrace the ethics and attitude of start-up culture and promote autonomy, determinism and personal growth through real world experience. We thrive on casual conversations that lead to breakthrough ideas and encourage everybody to have a voice and to think divergently.</p>

	<h1>Goals</h1>

	<p>Our goal is to help your business attain public relations marketing and prowess in a competitive global landscape with a team of public relations directors, business development managers, technical engineers, visual designers and creative consultants. We will assist your business in drafting necessary business strategies, developing, structuring and optimizing your business to work in the most efficient manner possible.</p>
	
</div>


