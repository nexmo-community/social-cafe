<template>
  <div>
    <Top :event="event" />
    <div class="wrapper">
      <h1>Please use this space to chat to other event attendees.</h1>
      <h2>The table prompts are suggestions, but feel free to talk about anything.</h2>
      <p>Once 50 people join a room, all attendees will drop to audio-only automatically. If you have technical difficulties please email <a href="mailto:kvn@lws.io">Kevin</a> so he can take a look at resolving them post-event.</p>
      <div class="tables">
        <n-link v-for="(room, i) in event.rooms" :key="room.slug" class="table" :to="`/${$route.params.event}/${room.slug}`">
          <h3>Table {{ i + 1 }}</h3>
          <small>Question prompt</small>
          <p>{{ room.name }}</p>
          <span class="button">Go to table</span>
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '~/components/Top'
export default {
  components: {
    Top
  },
  validate ({ params, store }) {
    return store.state.events.find(e => e.slug === params.event)
  },
  computed: {
    event () {
      return this.$store.state.events.find(e => e.slug === this.$route.params.event)
    }
  }
}
</script>

<style scoped>
  .wrapper > h1, .wrapper > h2, .wrapper > p {
    text-align: center;
  }
  .wrapper > p {
    width: 75%;
    margin: 1em auto;
  }
  .wrapper > p a {
    color: #89cff0;
  }
  .tables {
    columns: 2;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3em;
  }
  .table {
    color: inherit;
    text-decoration: none;
    box-shadow: 0.5rem 0.5rem 0 0 pink;
    border-radius: 20px;
    padding: 2rem;
    display: inline-block;
    width: 100%;
    margin-bottom: 2em;
  }
  .table small {
    display: block;
    margin-top: 1em;
  }
  .button {
    border: 1px solid #89cff0;
    color: black;
    padding: 0.75em 1.5em;
    display: inline-block;
    margin-top: 1.25rem;
    font-size: 0.8em;
    border-radius: 7.5px;
    box-shadow: 0.125rem 0.125rem 0 0 #89cff0;
  }
  @media screen and (max-width: 720px) {
    .wrapper {
      padding: 1rem;
    }
    .wrapper > h1 {
      font-size: 1.5em;
    }
    .wrapper > h2 {
      font-size: 1.25em;
      margin-top: 1rem;
    }
    .wrapper > p {
      width: 100%;
    }
    .tables {
      columns: 1;
      padding-right: 1em;
    }
  }
</style>
