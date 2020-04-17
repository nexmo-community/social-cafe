<template>
  <div>
    <Top />
    <p>
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </p>
  </div>
</template>

<script>
import Top from '~/components/Top'
export default {
  components: {
    Top
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
