<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Thomshuft',
				singleProjectDate: 'Present',
				singleProjectTag: 'Photography',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/app-project-5-1.png'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/app-project-5-2.png'),
				},
				// {
				// 	id: 3,
				// 	title: 'Kabul Project Management UI',
				// 	img: require('@/assets/images/app-project-4-3.png'),
				// },
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Purpose',
						details: 'Just Portfolio',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Photo',
					},
					{
						id: 3,
						title: 'Instagram',
						details: 'https://www.instagram.com/thomshuft/',
					},
					{
						id: 4,
						title: 'Unsplash',
						details: 'https://unsplash.com/@thomshuft',
					},
					{
						id: 4,
						title: 'Phone',
						details: '0895367265775',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Take Moment',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
						
							'Lightroom'
						],
					},
				],
				projectDetailsHeading: 'Description',
				projectDetails: [
					{
						id: 1,
						details:
							'Step into the enchanting realm of Thom Shufts photography, where each click of the camera immortalizes not just an instance, but an entire tapestry of sentiments. With an uncanny knack for encapsulating the intangible, Shuft crafts visual stories that resonate on a profound level. His images breathe life into the mundane, infusing it with an extraordinary essence that lingers in the heart and mind. Thom Shufts photography transcends the visual to become an emotional journey. His lens transforms everyday scenes into profound reflections of the human experience. Whether its the tender clasping of hands or the interplay of shadows on a rainy street, Shufts artistry captures the nuances of feelings we often overlook. In each photograph, he beckons us to pause, feel, and connect with the intricate emotions that define us all.'},			// {
					// 	id: 2,
					// 	details:
					// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
					// },
					// {
					// 	id: 3,
					// 	details:
					// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
					// },
					// {
					// 	id: 4,
					// 	details:
					// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
					// },
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/',
					},
				],
			},
			relatedProject: {
				// relatedProjectsHeading: 'Related Projects',
				// relatedProjects: [
				
				// 	{
				// 		id: 1,
				// 		title: 'UI Design',
				// 		img: require('@/assets/images/ui-project-1.png'),
				// 	},
					
				// ],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
