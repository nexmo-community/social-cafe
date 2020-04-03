<template>
  <div>
    <Top />
    <div class="box">
      <div class="extrusion" />
      <div class="container">
        <h2>Social Cafe</h2>
        <div class="input-group">
          <label for="code">Event Code</label>
          <input id="code" v-model="code" type="text" placeholder="Event Code" @keyup.enter="goToEvent">
        </div>
        <button @click="goToEvent">
          Go to event
        </button>
      </div>
    </div>
    <p>This platform is powered by the Vonage Video API. You can see the code, contribute, and add your own events on <a href="https://github.com/nexmo-community/social-cafe">GitHub</a>.</p>
  </div>
</template>

<script>
import Top from '~/components/Top'
export default {
  components: {
    Top
  },
  data () {
    return {
      code: ''
    }
  },
  methods: {
    goToEvent () {
      if (this.$store.state.events.find(e => e.slug.toLowerCase() === this.code.trim().toLowerCase())) {
        this.$router.push(`/${this.code}`)
      } else {
        alert('No event with that code')
      }
    }
  }
}
</script>

<style scoped>
.box {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
p {
  max-width: 600px;
  margin: 2em auto;
  text-align: center;
}
p a {
  color: inherit;
}
@media screen and (max-width: 720px) {
  .box,
  p {
    width: calc(100% - 2em);
  }
}
</style>
