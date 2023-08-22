<script>
import feather from 'feather-icons';

// CommonJS
// var VueTyperPlugin = require('vue-typer').default
// // Global
// var VueTyperPlugin = window.VueTyper.default
export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
			Hi, <br>
			I'm <h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-sky-600 dark:text-primary-light uppercase"><span class="typed-text">Thomas Edwin Suryo Prayogo</span></h1>
			</h1>
		
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
			<span class="typed-">Web Developer </span><br>
			<span class="typed-">Business Analyst</span><br>
			<span class="typed-">Photographer & Videographer</span>
            <span class="cursor"></span>
			</p>
			
			<div class="flex justify-center sm:block">
				<a
					download="Thomas Resume.pdf"
					href="/files/Thomas Edwin Suryo Prayogo-resume  .pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Download CV</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-1/3 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/profiles.png"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/developer.png"
				alt="Developer"
			/>
		</div>
	</section>
</template>
<style>
.typing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.typing-animation {
    position: relative;
    overflow: hidden;
}

.typed-text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.15em solid transparent; /* Creates the cursor effect */
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 165%;
    }
}

@keyframes blink-caret {
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: #333;
    }

}</style>
<style scoped></style>
