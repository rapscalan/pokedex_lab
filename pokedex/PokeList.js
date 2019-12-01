import Component from '../Component.js';
import PokeCard from './PokeCard.js';

class PokeList extends Component {
    
    onRender(dom) {
        const pokeCards = this.props.pokeCards;

        pokeCards.forEach(card => {
            const props = { card: card };
            const pokeCard = new PokeCard(props);
            const pokeCardDOM = pokeCard.renderDOM();
            dom.appendChild(pokeCardDOM);
        });

    }

    renderHTML() {
        
        return /*html*/`
            <ul></ul>
        `;
    }
}

export default PokeList;