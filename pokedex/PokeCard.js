import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const card = this.props.card;

        return /*html*/`
            <li class="poke-cards">
                <div class="card-upper">
                    <img class="card-image" src="${card.url_image}" alt="picture of ${card.pokemon}">
                </div>
                <div class="info">
                    <h2>${card.pokemon}</h2>
                    <p class="attributes">Attack: ${card.attack}</p>
                    <p class="attributes">Defense: ${card.defense}</p>
                    <p class="attributes">Type: ${card.type_1}</p>
                </div>
            </li>
        `;
    }
}

export default PokeCard;