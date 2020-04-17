export const strict = false

export const state = () => ({
  events: [
    {
      slug: 'example-event',
      name: 'Event Name',
      coc: 'https://hackcodeofconduct.com', // optional, not appropriate in all settings
      roomSelector: true, // shows the pick a room tool
      eventText: {
        primary: 'Please use this space to chat to other event attendees.',
        secondary: 'The table prompts are suggestions, but feel free to talk about anything.',
        tertiary: 'Once 50 people join a room, all attendees will drop to audio-only automatically.'
      },
      topBarLink: {
        text: '@VonageDev',
        url: 'https://twitter.com/vonagedev'
      },
      rooms: [
        { slug: 'built', name: 'What did you build this week?' },
        { slug: 'work', name: 'Where do you work?' },
        { slug: 'hobby', name: 'What are your hobbies?' }
      ]
    },
    {
      slug: 'lnug',
      name: 'London Node User Group',
      coc: 'https://lnug.org/code-of-conduct.html',
      roomSelector: false,
      topBarLink: {
        text: '@LNUGorg',
        url: 'https://twitter.com/lnugorg'
      },
      eventText: {
        primary: 'Please use this space to chat to other event attendees.',
        secondary: 'The table prompts are suggestions, but feel free to talk about anything.',
        tertiary: 'Once 50 people join a room, all attendees will drop to audio-only automatically.'
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
      topBarLink: {
        text: '@policerewired',
        url: 'https://twitter.com/policerewired'
      },
      roomSelector: true,
      eventText: {
        primary: 'Please join a table during the exercises.',
        secondary: "You'll be able to talk to each other in small groups to support each other.",
        tertiary: 'NB. Once 50 people join a room, all attendees will drop to audio-only automatically.'
      },
      rooms: [
        { slug: 'table-1', name: 'Welcome.' },
        { slug: 'table-2', name: 'Welcome.' },
        { slug: 'table-3', name: 'Welcome.' },
        { slug: 'table-4', name: 'Welcome.' },
        { slug: 'table-5', name: 'Welcome.' },
        { slug: 'table-6', name: 'Welcome.' }
      ]
    },
    {
      slug: 'ceilidh',
      name: 'The Daily Ceilidh Chat',
      topBarLink: {
        text: 'thedailyceilidh',
        url: 'http://thedailyceilidh.co.uk'
      },
      roomSelector: false,
      eventText: {
        primary: 'Please use this space to chat to other islanders.',
        secondary: 'The table prompts are suggestions, but feel free to talk about anything.',
        tertiary: 'Once 50 people join a room, all attendees will drop to audio-only automatically.'
      },
      rooms: [
        { slug: 'Knitter-Natter', name: 'Talking all things crafty' },
        { slug: 'Office Watercooler Chat', name: 'Missing the office gossip?' },
        { slug: 'Coffee - Cake', name: '11\'ses anyone?' },
        { slug: 'The Book Club', name: 'Open to everyone' }
      ]
    },
    {
      slug: 'bernera-coordinators',
      name: 'Bernera Coordinators',
      topBarLink: {
        text: 'thedailyceilidh',
        url: 'http://thedailyceilidh.co.uk'
      },
      roomSelector: false,
      eventText: {
        primary: 'Please use this space to chat to other islanders.',
        secondary: 'The table prompts are suggestions, but feel free to talk about anything.',
        tertiary: 'Once 50 people join a room, all attendees will drop to audio-only automatically.'
      },
      rooms: [
        { slug: 'Chat', name: 'General Chat' }
      ]
    },
    {
      slug: 'clann',
      name: 'Ceilidh Kids',
      topBarLink: {
        text: 'thedailyceilidh',
        url: 'http://thedailyceilidh.co.uk'
      },
      roomSelector: false,
      eventText: {
        primary: 'Please use this space to chat to other islanders.',
        secondary: 'The table prompts are suggestions, but feel free to talk about anything.',
        tertiary: 'Once 50 people join a room, all attendees will drop to audio-only automatically.'
      },
      rooms: [
        { slug: 'Chat', name: 'General Chat' }
      ]
    },
    {
      slug: 'capp',
      name: 'Op CAPP',
      coc: 'https://www.policerewired.org/home/conduct',
      topBarLink: {
        text: 'Op CAPP',
        url: 'https://www.policerewired.org/home/projects/mps-op-capp'
      },
      roomSelector: false,
      eventText: {
        primary: 'Please use this space to chat in your groups.',
        secondary: 'We have arranged tables in pairs or threes.',
        tertiary: 'NB. If 50 people join a room, all attendees will drop to audio-only automatically.'
      },
      rooms: [
        { slug: 'andy-james', name: 'Andy:James' },
        { slug: 'matt-mike', name: 'Matt:Mike' },
        { slug: 'dan-baz', name: 'Dan:Baz' },
        { slug: 'dees-mark-amy', name: 'Dees/Mark:Amy' },
        { slug: 'ryan-james', name: 'Ryan:James' },
        { slug: 'andy-jessica-jd', name: 'Andy/Jessica:JD' }
      ]
    }
  ]
})
