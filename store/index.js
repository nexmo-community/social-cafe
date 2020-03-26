export const strict = false

export const state = () => ({
  events: [
    {
      slug: 'example-event',
      name: 'Event Name',
      coc: 'https://hackcodeofconduct.com',
      social: {
        text: '@_phzn',
        url: 'https://twitter.com/_phzn'
      },
      rooms: [
        { slug: 'built', name: 'What did you build this week?' },
        { slug: 'work', name: 'Where do you work?' },
        { slug: 'hobby', name: 'What are your hobbies?' }
      ]
    },
    {
      slug: 'lnug',
      name: 'London Node User Group March',
      coc: 'https://lnug.org/code-of-conduct.html',
      social: {
        text: '@LNUGorg',
        url: 'https://twitter.com/lnugorg'
      },
      rooms: [
        { slug: 'built', name: 'What did you build this week?' },
        { slug: 'work', name: 'Where do you work?' },
        { slug: 'hobby', name: 'What are your hobbies?' },
        { slug: 'jobs', name: 'Job Table' }
      ]
    },
    {
      slug: 'nsa-python',
      name: 'NSA Python study group',
      coc: 'https://www.policecoders.org/home/nsa-python-study-group/conduct',
      social: {
        text: '@policerewired',
        url: 'https://twitter.com/policerewired'
      },
      rooms: [
        { slug: 'table-0', name: 'Please join your assigned table.' },
        { slug: 'table-1', name: 'Please join your assigned table.' },
        { slug: 'table-2', name: 'Please join your assigned table.' },
        { slug: 'table-3', name: 'Please join your assigned table.' },
        { slug: 'table-4', name: 'Please join your assigned table.' },
        { slug: 'table-5', name: 'Please join your assigned table.' },
        { slug: 'table-6', name: 'Please join your assigned table.' },
        { slug: 'table-7', name: 'Please join your assigned table.' },
        { slug: 'table-8', name: 'Please join your assigned table.' },
        { slug: 'table-9', name: 'Please join your assigned table.' }
      ]
    }
  ]
})
