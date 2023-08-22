<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the technologies that I have used',
			clients: [
				{
					id: 1,
					title: 'Laravel',
					img: require('@/assets/images/brands/laravel-logo.jpg'),
				},
				{
					id: 2,
					title: 'Django',
					img: require('@/assets/images/brands/django.jpg'),
				},
				{
					id: 3,
					title: 'CodeIgneter',
					img: require('@/assets/images/brands/codeigniter_logo.png'),
				},
				{
					id: 4,
					title: 'Tailwind CSS',
					img: require('@/assets/images/brands/tw.jpg'),
				},
				{
					id: 5,
					title: 'SCSS',
					img: require('@/assets/images/brands/1200px-Sass_Logo_Color.svg_.png'),
				},
				{
					id: 6,
					title: 'Bootstrap',
					img: require('@/assets/images/brands/boot.png'),
				},
				{
					id: 7,
					title: 'Figma',
					img: require('@/assets/images/brands/Screen-Shot-2018-11-19-at-8.43.27-PM.png'),
				},
				{
					id: 7,
					title: 'GIT',
					img: require('@/assets/images/brands/git-icon-logo-png-transparent.png'),
				},
				{
					id: 8,
					title: 'Adobe Premiere',
					img: require('@/assets/images/brands/Adobe_Premiere_Pro_CC_icon.png'),
				},
				{
					id: 8,
					title: 'MYSQL',
					img: require('@/assets/images/brands/MySQL-logo.jpg'),
				},{
					id: 9,
					title: 'PostgreSQL',		
					img: require('@/assets/images/brands/postgresql-logo1.png'),
				},{
					id: 10,
					title: 'VUE',		
					img: require('@/assets/images/brands/vue-3.png'),
				},{
					id: 11,
					title: 'Bizagi',		
					img: require('@/assets/images/brands/Bizagi-Logo-Time-to-Digital-Grey.png'),
				},{
					id: 12,
					title: 'Visio',		
					img: require('@/assets/images/brands/visio-logo-5.png'),
				},
				{
					id: 13,
					title: 'Microsoft Project',		
					img: require('@/assets/images/brands/Microsoft-Project-2023-Crack.png'),
				},
				{
					id: 14,
					title: 'Lightroom',		
					img: require('@/assets/images/brands/Lightroom-logo.png'),
				}
			,

				
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
