<script>
import axios from "axios";

export default {
  props: ['url'],

  data() {
    return {
      response: null,
      loading: true,
    }
  },

  created() {
    axios.get(this.url)
        .then(response => {
          this.response = response.data;
          this.loading = false;
        })
        .catch(error => {
          // alert('[ERROR] fetching the data', error);
          console.log(error);
        });
  },

  render() {
    // return this.$scopedSlots.default({ // Vue2
    return this.$slots.default({     // Vue3, slot name = default
      response: this.response,
      loading: this.loading,
    });
  }
}
</script>