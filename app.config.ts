export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'wserz',
      github: 'wser',
    },
    github: {
      dir: undefined,
      branch: undefined,
      repo: undefined,
      owner: undefined,
      edit: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    filter: true,
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: false,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'Powered by W',
        href: 'https://viktor.vidakovic.info',
        target: '_blank',
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    }
  }
})
