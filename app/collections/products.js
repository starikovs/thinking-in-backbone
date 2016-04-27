import Backbone from 'backbone';
import Product from '../models/product';

class Products extends Backbone.Collection {

    get model () {
        return Product;
    }

}

export default Products;

