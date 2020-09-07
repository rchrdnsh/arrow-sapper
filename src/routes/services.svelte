<script>
  import { fadeIn, fadeOut } from "../animate";
  import Featured from '../components/Featured.svelte'

  let features = [
    {
      id: 1,
      title: `wham bam thank you dood!`,
      description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
      image: `images/featured/plan-feature-500x500.jpg`,
      background: `images/featured/arrow-create-1920x1200.jpg`
    },
    {
      id: 2,
      title: `dis iz da ting eye be here for, yo!`,
      description: `Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
      image: `images/featured/plan-feature-500x500.jpg`,
      background: `images/featured/arrow-create-1920x1200.jpg`
    },
    {
      id: 3,
      title: `Titles are silly and I don't link them`,
      description: `Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
      image: `images/featured/plan-feature-500x500.jpg`,
      background: `images/featured/arrow-create-1920x1200.jpg`
    }
  ]
</script>

<style>
	.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
</style>

<div class='container' in:fadeIn out:fadeOut>
  {#each features as { id, title, description, image, background }}
    <Featured
      reverse={ id % 2 === 0 ? true : false }
      title={title}
      description={description}
      image={image}
      background={background}
    />
  {/each}
</div>