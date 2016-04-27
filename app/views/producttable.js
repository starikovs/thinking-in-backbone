import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import ProductCategoryRow from './productcategoryrow';
import ProductRow from './productrow';

class ProductTable extends Backbone.View {
    
    initialize () {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    }

    tagName () {
        return 'table';
    }

    get template () {
        return Handlebars.compile($('#product-table-template').html());
    }

    render () {
        this.unregisterSubviews();
        this.$el.html(this.template({ }));

        let filterText = this.model.get('filterText');
        let isStockOnly = this.model.get('isStockOnly');
        let rows = this.$('tbody');
        let lastCategory = null;

        this.collection.each(model => {
            if (model.get('name').indexOf(filterText) === -1 ||
                (isStockOnly && !model.get('stocked'))) {
                return;
            }

            if (model.get('category') !== lastCategory) {
                let category = new ProductCategoryRow({
                    model: model
                });
                category.$el.appendTo(rows)
                this.registerSubview(category);

                lastCategory = model.get('category');
            }

            let product = new ProductRow({
                model: model
            });
            product.$el.appendTo(rows);
            this.registerSubview(product);
        });

        return this;
    }

    registerSubview (view) {
        this._subviews = this._subviews || [];
        this._subviews.push(view);
    }

    unregisterSubviews () {
        if (this._subviews && this._subviews.length) {
            _.invoke(this._subviews, 'remove');
            this._subviews = [];
        }
    }

    remove () {
        this.unregisterSubviews();
        super.remove();
    }

}

export default ProductTable;

