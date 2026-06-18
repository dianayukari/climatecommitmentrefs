<script>
	import { base } from '$app/paths';

	// Three resources. URLs are placeholders until supplied.
	const manifest = [
		{
			label: 'Dataset',
			name: 'Hedge terms in real climate documents',
			href: 'https://docs.google.com/spreadsheets/d/1AFHfCOzs6q1mjLbtNXjipWgUZDuRcx_39nen7BIJ0x8/edit?usp=sharing',
			note: 'The vocabulary the apparatus draws from. Each term logged with how often it appears in real climate policy and the sentences it appears in.'
		},
		{
			label: 'Thesis text',
			name: 'The Semiotic Reconstruction of Climate Commitment',
			href: 'https://drive.google.com/file/d/16z8pFZboJ2gr5Vkm_DzrB9bEmZhuDLSx/view?usp=sharing',
			note: 'The argument behind the machine: that the softening of commitment between international agreement and national policy is designed, not lost in translation.'
		},
		{
			label: 'Thesis corpus',
			name: 'Reconstruction of Climate Commitment Corpus',
			href: 'https://docs.google.com/spreadsheets/d/18t1ON4dImTOlgPu2lvOMTHe5Nhcgj3KUBy5_cpQ7El8/edit?usp=sharing',
			note: 'Analyzed documents from Brazilian climate policies and the detailed description of the translation process in a sentence level.'
		},
		{
			label: 'Source',
			name: 'Climate Policy Radar',
			href: 'https://www.climatepolicyradar.org/',
			note: 'The open database every example is drawn from. Where real climate documents live.'
		}
	];

	// @font-face needs the GitHub Pages base path baked in, so it is emitted here
	// rather than in a static <style> block. Files drop into static/fonts/ later;
	// the serif/mono fallbacks hold the register until then.
	const fontFaces = `
@font-face {
	font-family: 'Velvelyne';
	src: url('${base}/fonts/Velvelyne-Book.woff2') format('woff2');
	font-weight: 400;
	font-display: block;
}

@font-face {
	font-family: 'Velvelyne';
	src: url('${base}/fonts/Velvelyne-Regular.woff2') format('woff2');
	font-weight: 500;
	font-display: block;
}

@font-face {
	font-family: 'Velvelyne';
	src: url('${base}/fonts/Velvelyne-Bold.woff2') format('woff2');
	font-weight: 700;
	font-display: block;
}

@font-face {
	font-family: 'Departure Mono';
	src: url('${base}/fonts/DepartureMono-Regular.otf') format('opentype');
	font-weight: 400;
	font-display: block;
}
	`;
</script>

<svelte:head>
	<title>No Climate Commitment Built Here Stands — evidence index</title>
	{@html `<style>${fontFaces}</style>`}
</svelte:head>

<div class="page">
	<!-- 1. Running head -->
	<header class="runhead fade" style="--i: 0">
		<span class="rh-title">No Climate Commitment Built Here Stands</span>
	</header>

	<main>
		<!-- 2. Specimen — the one bold move -->
		<section class="specimen fade" style="--i: 1" aria-label="Specimen">
			<p class="specimen-line">
				Member States <s class="struck">must</s> <span class="kept">should</span> set out measures
				to achieve those targets.
			</p>
			<p class="annotation">should &rarr; obligation softened</p>
		</section>

		<!-- 3. Connective line -->
		<p class="connective fade" style="--i: 2">
			You just made one of these. Below is where the real ones are kept.
		</p>

		<!-- 4. Manifest -->
		<section class="manifest" aria-label="Resources">
			{#each manifest as entry, i}
				<div class="entry fade" style="--i: {3 + i}">
					<span class="entry-label">{entry.label}</span>
					<a class="entry-name" href={entry.href}>{entry.name}</a>
					<p class="entry-note">{entry.note}</p>
				</div>
			{/each}
		</section>
	</main>

	<!-- 5. Footer -->
	<footer class="footer fade" style="--i: 6">
		No Climate Commitment Built Here Stands (2026)
	</footer>
</div>
