// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// Import all components and directives so tags like <v-btn> and <v-text-field>
// render even when vuetify-loader is not configured.
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// (optional) icon set
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
  },
})

export default vuetify
