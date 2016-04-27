import $ from 'jquery';
import Backbone from 'backbone';
import Handlebars from 'handlebars';

class SearchBar extends Backbone.View {
    
    initialize () {
        this.render();
    }

    tagName () {
        return 'form';
    }

    events () {
        return {
            'keyup [type="text"]': 'setFilterText',
            'click [type="checkbox"]': 'setIsStockOnly'
        };
    }

    get template () {
        return Handlebars.compile($('#search-bar-template').html());
    }

    setIsStockOnly (event) {
        let checkbox = $(event.target);
        this.model.set('isStockOnly', checkbox.is(':checked'));
    }

    setFilterText (event) {
        let input = $(event.target);
        this.model.set('filterText', input.val());
    }

    render () {
        this.$el.html(this.template({ }));
        return this;
    }

}

export default SearchBar;

