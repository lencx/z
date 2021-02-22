import Theme from 'vitepress/theme';
import Intro from '../components/Intro.vue';

import './vars.css';
import './custom.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Intro', Intro);
  },
}
