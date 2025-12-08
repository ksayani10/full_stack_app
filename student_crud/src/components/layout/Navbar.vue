<!-- <template>
    <v-app-bar flat-color="white">

        <v-tool-bar-title class ="font-weight-medium">
            Student Hub
        </v-tool-bar-title>   
        <v-btn variant="text" to="/" >Home</v-btn>
        <v-btn variant="text" >About</v-btn>
        <v-btn variant="text" >Contact</v-btn>

        <v-spacer/>

        <v-btn variant ="text">Login</v-btn>
        <v-btn color ="primary">Sign up</v-btn>
    </v-app-bar>
</template> -->

<script setup>
</script>

<template>
  <v-app-bar
    flat
    color="white"
    height="70"
    class="px-10"
  >
    <!-- Left: Logo -->
    <v-toolbar-title class="font-weight-bold text-primary">
      Student Hub
    </v-toolbar-title>

    <!-- Center nav items -->
    <div class="d-flex align-center ga-6 ml-10">
      <v-btn variant="text" to="/" class="text-body-1">Home</v-btn>
      <v-btn variant="text" to="/about" class="text-body-1">About</v-btn>
      <v-btn variant="text" to="/contact" class="text-body-1">Contact</v-btn>
    </div>

    <v-spacer />

    <!-- Right side: Auth buttons -->
    <div class="d-flex align-center ga-4">
      <v-btn variant="text" to="/login" class="text-body-1">Login</v-btn>

      <v-btn
        rounded
        color="primary"
        class="text-body-1"
        to="/signup"
      >
        Sign up
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.text-primary {
  color: #6C5CE7;
}
</style>
