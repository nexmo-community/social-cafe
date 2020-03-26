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
        { slug: 'table-1', name: 'Welcome.' },
        { slug: 'table-2', name: 'Welcome.' },
        { slug: 'table-3', name: 'Welcome.' },
        { slug: 'table-4', name: 'Welcome.' },
        { slug: 'table-5', name: 'Welcome.' },
        { slug: 'table-6', name: 'Welcome.' },
        { slug: 'table-7', name: 'Welcome.' },
        { slug: 'table-8', name: 'Welcome.' },
        { slug: 'table-9', name: 'Welcome.' },
        { slug: 'table-10', name: 'Welcome.' }
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
