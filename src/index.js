import shaun from './assets/shaun.jpg';
import phpLogo from './assets/php-logo.png';
import './index.css';

const shaunAsADOMNode = document.querySelector('#shaun');
shaunAsADOMNode.setAttribute('src', shaun);

const app = document.querySelector('#app');
app.setAttribute('style', `background-image: url("${phpLogo}");`);
