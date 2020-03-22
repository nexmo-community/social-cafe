export const strict = false

export const state = () => ({
  events: [
    {
      slug: 'lnug-march',
      name: 'London Node User Group',
      coc: 'https://hackcodeofconduct.com',
      social: {
        text: '@LNUGorg',
        url: 'https://twitter.com/LNUGorg'
      },
      rooms: [
        { slug: 'built', name: 'What did you build this week?' },
        { slug: 'work', name: 'Where do you work?' },
        { slug: 'hobby', name: 'What are your hobbies?' }
      ]
    }
  ]
})
