import PokedexApp from './PokedexApp.js';

const app = new PokedexApp();
const dom = app.renderDOM();
document.body.prepend(dom);

window.addEventListener('load', () => {
    const hash = window.location.hash.slice();
    const params = new URLSearchParams(hash);

    params.append('page', 1);
});