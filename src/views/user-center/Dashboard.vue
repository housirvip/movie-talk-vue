<template>
  <div class="dashboard">
    hello {{user.username}}, this is Dashboard page
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    user: function () {
      return this.$store.state.global.user
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
