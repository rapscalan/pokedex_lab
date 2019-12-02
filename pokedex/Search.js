import Component from '../Component.js';

class Search extends Component {

    onRender(form) {
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
    }

    renderHTML() {
        return /*html*/`
            <form class="options">
                <label for="search">
                    Search:
                </label>
                <p>
                    <input id="search" name="search">
                </p>

                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="movie" checked>
                        Movie
                    </label>
                    <label>
                        <input type="radio" name="type" value="series">
                        Series
                    </label>
                    <label>
                        <input type="radio" name="type" value="episode">
                        Episode
                    </label>
                </fieldset>

                <p>
                    <button>Search 🔍</button>
                </p>
            </form>
        `;
    }
}

export default Search;