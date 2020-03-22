<template>
  <div class="container">
    <h1>Redirecting...</h1>
  </div>
</template>

<script>
export default {
  beforeMount () {
    window.location = 'https://lws.io'
  }
}
</script>
