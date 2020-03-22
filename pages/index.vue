<template>
  <div class="container">
    <div class="inner">
      <h1>☕ Social Cafe ☕</h1>
      <input v-model="code" type="text" placeholder="Event Code" @keyup.enter="goToRoom">
      <button @click="goToEvent">
        Go to event
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: ''
    }
  },
  methods: {
    goToEvent () {
      if (this.$store.state.events.find(e => e.slug === this.code)) {
        this.$router.push(`/${this.code}`)
      } else {
        alert('No event with that code')
      }
    }
  }
}
</script>

<style scoped>
.container {
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 3em;
}
input {
  display: block;
  width: 100%;
  font-size: 1em;
  padding: 0.5em;
  border: 2px solid white;
  margin-top: 0.5rem;
}
input:focus {
  border-color: #89cff0;
}
button {
  width: 100%;
  display: block;
  font-size: 1em;
  padding: 0.5em;
  background: white;
  border: 0;
  margin-top: 1em;
}
</style>
