import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {
    onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

    }
    renderHTML() {
        return /*html*/`
            <div class="container">
                <p>Enter the <a href="../pokedex.html">Pokedex</a></p>
            </div>
        `;
    }
}

export default HomeApp;