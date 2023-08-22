// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'SIABRM',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.png'),
	},
	{
		id: 2,
		title: 'Uniq Fashion',
		category: 'App Application',
		img: require('@/assets/images/app-project-1.png'),
	},
	{
		id: 3,
		title: 'Smook',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.png'),
	},
	{
		id: 4,
		title: 'MerchSekai',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.png'),
	},
	{
		id: 5,
		title: 'Thomshuft',
		category: 'Photography',
		img: require('@/assets/images/photo-project-1.png'),
	},
	{
		id: 6,
		title: 'Dusun Cawan',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.png'),
	},
];

export default projects;
