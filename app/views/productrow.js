import $ from 'jquery';
import Backbone from 'backbone';
import Handlebars from 'handlebars';

class ProductRow extends Backbone.View {
    
    initialize () {
        this.render();
    }

    tagName () {
        return 'tr';
    }

    get template () {
        return Handlebars.compile($('#product-row-template').html());
    }

    render () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

}

export default ProductRow;



