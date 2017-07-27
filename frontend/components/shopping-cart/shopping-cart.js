"use strict";
import compiledTemplate from './template.hbs';
import Component from '../component';

export default class ShoppingCard extends Component {
	constructor(options) {
		super(options.el);
		this._products = [];
	}

	render() {
		this._el.innerHTML = compiledTemplate({
			products: this._products
		});
	}

	addProducts(product) {
		this._products.push(product);

		this.render();
	}
}