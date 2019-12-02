import Component from '../Component.js';

class Sort extends Component{
    renderHTML(){
        return /*html*/`
            <div class="sortoptions*******">
                <p id="sort-text">Sort By: </p>
                <div class="radiobuttons">
                    <input type="radio" name="sort-options" id="name" value="name">
                    <label for="name">Name</label>
                </div>
                <div class="radiobuttons">
                    <input type="radio" name="sort-options" id="attack" value="attack">
                    <label for="attack">Attack</label>
                </div>
                <div class="radiobuttons">
                    <input type="radio" name="sort-options" id="defense" value="defense">
                    <label for="defense">Defense</label>
                </div>
                <div class="radiobuttons">
                    <input type="radio" name="sort-options" id="type" value="type">
                    <label for="type">Type</label>
                </div>
            </div>
        `;
    }
}
export default Sort;