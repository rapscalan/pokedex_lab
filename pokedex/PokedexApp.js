import Component from '../Component.js';
import Header from '../common/Header.js';
import PokeList from './PokeList.js';
import Search from './Search.js';
import Sort from './Sort.js';
import Paging from './Paging.js';
import { getPokemon } from '../services/pokedex-api.js';

class PokedexApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const searchSection = dom.querySelector('.search');
        const search = new Search();
        searchSection.prepend(search.renderDOM());
        
        const sortSection = dom.querySelector('.sort');
        const sort = new Sort();
        sortSection.prepend(sort.renderDOM());

        const cardSection = dom.querySelector('.cards');
        const pokeList = new PokeList({ pokeCards: [] });
        cardSection.prepend(pokeList.renderDOM());
        
        const paging = new Paging({ totalResults: 0 });
        cardSection.prepend(paging.renderDOM());

        async function loadPokemon() {
            const response = await getPokemon();
            const pokeCards = response.results;
            const totalResults = response.count;
            pokeList.update({ pokeCards: pokeCards });
            paging.update({ totalResults: totalResults });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML() {
        return /*html*/`
            <div class="container">
                
                    <section class="search">
                    </section>
                    <section class="sort">       
                    </section>
                    <section class="cards">
                    </section>
            </div>
        `;
    }
}

export default PokedexApp;