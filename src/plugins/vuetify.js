// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createApp } from 'vue'
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    customGradientColor: 'linear-gradient(to right, #9c7af2 0%, #7e6eed 150%)',
    buttonColor : '#7E6DED',
    subColor:'#2E3280',
    subtextColor: '#7e7e7e',
    subheadColor: '#6D70A6',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})