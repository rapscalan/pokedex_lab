import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <h1>Pokedex</h1>
            <nav>
                <a href="./">HOME</a>
                <a href="pokedex.html">Pokedex</a>
            </nav>
        </header>
        `;
    }
}
export default Header;