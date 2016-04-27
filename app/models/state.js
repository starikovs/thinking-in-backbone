import Backbone from 'backbone';

class State extends Backbone.Model {

    get defaults () {
        return {
            filterText: '',
            inStockOnly: false
        };
    }

}

export default State;


