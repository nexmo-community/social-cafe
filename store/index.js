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
      slug: 'ceilidh',
      name: 'The Daily Ceilidh Video Chat',
      coc: '#',
      social: {
        text: 'thedailyceilidh',
        url: 'https://thedailyceilidh.co.uk'
      },
      rooms: [
        { slug: 'Knitter-Natter', name: 'Talking all things Crafy' },
        { slug: 'Office Watercooler Chat', name: 'Missing the office gossip?' },
        { slug: 'Coffee - Cake', name: '11ses anyone?' },
        { slug: 'Bernera Book Club', name: 'Open to everyone' }
      ]
    },
    {
      slug: 'bernera-coordinators',
      name: 'Bernera Coordinators',
      coc: '#',
      social: {
        text: 'thedailyceilidh',
        url: 'https://thedailyceilidh.co.uk'
      },
      rooms: [
        { slug: 'Chat', name: 'General Chat' }
      ]
    },
    {
      slug: 'clann',
      name: 'Ceilidh Kids',
      coc: '#',
      social: {
        text: 'thedailyceilidh',
        url: 'https://thedailyceilidh.co.uk'
      },
      rooms: [
        { slug: 'Chat', name: 'General Chat' }
      ]
    }
  ]
})
