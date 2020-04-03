<template>
  <div id="site">
    <nuxt id="page" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,500&family=Roboto+Mono:wght@500&family=Roboto:wght@300&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

:root {
  --gray-01: #D9DCE3;
  --gray-02: #C2C4CC;
  --gray-03: #878A91;
  --gray-04: #54575E;
  --purple: #871FFF;
  --magenta: #D6219C;
  --cyan: #80C7F5;
  --peach: #FFA68C;
  --orange: #FA7554;

  --font: 'Roboto', sans-serif;
  --font-mono: 'Roboto Mono', monospace;
  --font-header: 'Montserrat', sans-serif;

  --box-shadow: 0 12px 18px 0px rgba(0, 0, 0, 0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
}

h1, h2, h3, h4 {
  font-family: var(--font-header);
}

.mono {
  font-family: var(--font-mono);
}

*,
*:before,
*:after,
input,
button {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrapper {
  padding: 2em;
}

#page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
button,
.button {
  display: inline-block;
  padding: 0.75em 1.25em;
  border-radius: 6px;
  color: white;
  background: black;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.8em;
  border: none;
  cursor: pointer;
}
.input-group {
    margin-top: 2em;
    margin-bottom: 2em;
}
.input-group label {
  display: block;
  font-family: var(--font-mono);
  margin-bottom: 0.5rem;
}
.input-group input {
  border: 1px solid var(--gray-03);
  font-size: 1em;
  padding: 0.75em 1em;
  border-radius: 7.5px;
  width: 100%;
}

.input-group input:focus {
  border-color: var(--purple);
}
.box {
  background: white;
  position: relative;
  display: flex;
  margin-top: 1rem;
}
.box .extrusion {
  border-radius: 3.3rem;
  height: 100%;
  position: absolute;
  width: 100%;
  background: linear-gradient(to top right, #D6219C, #80C7F5)
}
.box .container {
  background:white;
  border-radius: 3rem;
  width: 100%;
  z-index: 1;
  transform: translate(-0.75rem, -0.75rem);
  padding: 3em;
}
</style>
