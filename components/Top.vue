<template>
  <header>
    <div class="path">
      <n-link to="/">
        <img src="/logo-white.svg" alt="Vonage">
      </n-link>
      <div v-if="event">
        <n-link :to="`/${event.slug}`" class="event-name">
          {{ event.name }}
        </n-link>
        <span v-if="room">{{ room.name }}</span>
      </div>
    </div>

    <div v-if="event" class="meta">
      <a v-if="event.coc" :href="event.coc">Code of Conduct</a>
      <a :href="event.topBarLink.url">{{ event.topBarLink.text }}</a>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['event', 'room']
}
</script>

<style scoped>
header {
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
}
img {
  height: 1.5em;
  margin-right: 1.5em;
  display: block;
}
a {
  color: white;
  text-decoration: none;
}
.path {
  display: flex;
  flex-direction:row;
  align-items: center;
}
.path a {
  font-weight: bold;
}
.path span {
  color: white;
  margin-left: 1em;
}
.meta a {
  margin-left: 1em;
}
@media screen and (max-width: 720px) {
  header {
    flex-direction: column;
    align-items: center;
  }
  .path {
    flex-direction: column;
  }
  img {
    margin-right: 0;
  }
  .path span {
    margin-left: 0;
  }
  .event-name {
    margin: 0.5em 0;
    display: block;
    font-size: 1.25em;
  }
  .meta a {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .path a {
    text-align: center;
  }
  .path span {
    display: block;
    text-align: center;
  }
  .path span:before {
    display: none;
  }
}
</style>
