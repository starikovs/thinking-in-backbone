import Backbone from 'backbone';
import SearchBar from './searchbar';
import ProductTable from './producttable';
import State from '../models/state';

class FilterableProductTable extends Backbone.View {
    
    initialize () {
        this.state = new State;
        this.render();
    }

    render () {
        new SearchBar({
            model: this.state
        }).$el.appendTo(this.$el);

        new ProductTable({
            model: this.state,
            collection: this.collection
        }).$el.appendTo(this.$el);

        return this;
    }

}

export default FilterableProductTable;

