export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/D5603AQFLe86AMqVp5w/profile-displayphoto-shrink_200_200/B56ZUj7HSmGsAc-/0/1740064454273?e=1772668800&v=beta&t=RWntCcJbex0L99JrKGK41b-uuKdNUjMqJK0_k-RRklE',
      light: 'https://media.licdn.com/dms/image/v2/D5603AQFLe86AMqVp5w/profile-displayphoto-shrink_200_200/B56ZUj7HSmGsAc-/0/1740064454273?e=1772668800&v=beta&t=RWntCcJbex0L99JrKGK41b-uuKdNUjMqJK0_k-RRklE',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/steven-hobbs/15min',
    email: 'mail.shobbs+ai@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/VYEgcGTe',
      'target': '_blank',
      'aria-label': 'Mycalla on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/shobbsMH',
      'target': '_blank',
      'aria-label': 'Me on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/mycallai',
      'target': '_blank',
      'aria-label': 'Mycalla on GitHub'
    }]
  }
})
