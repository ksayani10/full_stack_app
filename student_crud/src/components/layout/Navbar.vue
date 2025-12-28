<!-- <script setup>
</script>

<template>
  <v-app-bar
    flat
    color="white"
    height="70"
    class="px-10"
  >
   
    <v-toolbar-title class="font-weight-bold text-primary">
      Student Hub
    </v-toolbar-title>

   
    <div
      class="d-flex align-center flex-grow-1 justify-center"
      style="gap: 32px"
    >
      <v-btn variant="text" to="/" class="text-body-1">Home</v-btn>
      <v-btn variant="text" to="/about" class="text-body-1">About</v-btn>
      <v-btn variant="text" to="/contact" class="text-body-1">Contact</v-btn>
    </div>

  
    <div class="d-flex align-right" style="gap: 16px">
      <v-btn variant="text" to="/login" class="text-body-1">
        Login
      </v-btn>

      <v-btn color="primary" rounded
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
  color: #0060a8; /* or any blue you like */
}
</style> -->

<script setup>
</script>

<template>
  <v-app-bar
    app
    flat
    color="white"
    height="64"
    class="px-10"
  >
    
    <v-toolbar-title class="font-weight-bold text-primary mr-10">
      Student Hub
    </v-toolbar-title>

   
    <v-btn variant="text" class="mx-2" to="/">Home</v-btn>
    <v-btn variant="text" class="mx-2" to="/about">About</v-btn>
    <v-btn variant="text" class="mx-2" to="/contact">Contact</v-btn>

    
    <v-spacer />

   
    <v-btn variant="text" class="mx-2" to="/login">
      Login
    </v-btn>

    <v-btn
      color="primary"
      rounded
      class="mx-2"
      to="/signup"
    >
      Sign up
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.text-primary {
  color: #0060a8; /* blue logo text */
}
</style>
