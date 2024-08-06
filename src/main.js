import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* Import de 'fontawesome core' */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import du composant 'vue-fontawesome' */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import des icônes de type 'solid' */
import { faThumbsUp, faThumbsDown, faUser } from '@fortawesome/free-solid-svg-icons'

/* Ajout de ces icônes à la bibliothèque de votre projet */
library.add(faThumbsUp, faThumbsDown, faUser)

/* Indique à l'instance Vue.js quelle va utiliser le composant vue-fontawesome */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
