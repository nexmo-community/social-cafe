<template>
  <header>
    <div class="path">
      <n-link :to="`/${event.slug}`">
        {{ event.name }} Lobby
      </n-link>
      <span v-if="room">{{ room.name }}</span>
    </div>
    <div class="meta">
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
  background: #cbbaeb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75em;
}
a {
  color: #313131;
  text-decoration: none;
}
.path a {
  font-weight: bold;
}
.path span {
  color: #313131;
}
.path span:before {
  content: '/';
  margin-left: 0.5em;
  margin-right: 0.75em;
  color: #313131;
}
.meta a {
  margin-left: 1em;
}
@media screen and (max-width: 720px) {
  header {
    flex-direction: column;
    align-items: center;
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
