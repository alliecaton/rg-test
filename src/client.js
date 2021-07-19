import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'jkfx26ad',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-07-19',
})
