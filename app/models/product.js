import Backbone from 'backbone';

class Product extends Backbone.Model {

    get defaults () {
        return {
            category: '',
            price: '',
            stocked: false,
            name: ''
        };
    }

}

export default Product;

