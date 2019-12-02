import Component from '../Component.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('submit', () => {
            event.preventDefault();
            window.location.hash = '';
            const formData = new FormData(form);

            const queryStr = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryStr);

            const searchDrop = form.querySelector('select');
            const optVal = searchDrop.options[searchDrop.selectedIndex].value;
            searchParams.set(optVal, formData.get('search'));

            searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }

    /*onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeRadios = form.querySelectorAll('input[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('s') || '';

            const type = searchParams.get('type');
            if (type) {
                typeRadios.forEach(typeRadio => {
                    typeRadio.checked = typeRadio.value === type;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('type', formData.get('type'));
            searchParams.set('s', formData.get('search'));
            //reset to page 1 as this is new search and
            //we don't know how many pages
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }*/

    renderHTML() {
        return /*html*/`
            <form id="search-box">
                <div class="search-drop">
                    <p>Search by:</p>
                    <select name="search-by" id="search-by">
                        <option value="pokemon">name</option>
                        <option value="attack">attack</option>
                        <option value="defense">defense</option>
                        <option value="type">type</option>
                    </select>
                </div>
                <div class="search-text">
                    <div>
                        <input type="text" placeholder="value..." name="search">
                    </div>
                    <button type="submit" form="search-box" value="submit">Search 🔍</button>
                </div>
            </form>
        `;
    }
}

export default Search;