<template>
  <div>
    <Top :event="event" />
    <div class="wrapper">
      <h1>{{ event.eventText.primary }}</h1>
      <h2>{{ event.eventText.secondary }}</h2>
      <p>{{ event.eventText.tertiary }}</p>
      <div v-if="event.roomSelector" class="room-picker">
        <p>You have been randomly assigned table {{ roomPicked }}</p>
      </div>
      <div class="tables">
        <n-link v-for="(room, i) in event.rooms" :key="room.slug" class="table" :to="`/${$route.params.event}/${room.slug}`">
          <h3>Table {{ i + 1 }}</h3>
          <small>Conversation prompt</small>
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
    },
    roomPicked () {
      return Math.floor(Math.random() * this.event.rooms.length) + 1
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
    margin: 0.5em auto 1em;
  }
  .room-picker {
    max-width: 960px;
    background: var(--orange);
    color: white;
    margin: 0 auto;
    text-align: center;
    padding: 1em;
    border-radius: 15px;
    margin-top: 2em;
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
    box-shadow: 0.5rem 0.5rem 0 0 var(--magenta);
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
    margin-top: 1.25em;
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
