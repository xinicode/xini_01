<script>
  export default {
    render (h, cxt) {
      let params = this.params || {};
      return h(this.is, {
        props: {
          ...params
        },
      });
    },
    props: {
        is:[String, Object],
        params:Object,
    }
  }
</script>