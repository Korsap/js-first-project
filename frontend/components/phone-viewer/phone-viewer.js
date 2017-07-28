'use strict';
import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneViewer extends Component{
	constructor(options) {
		super(options.el);

		this.on('click', this._onBackButtonClick.bind(this));
		this.on('click', this._onAddButtonClick.bind(this));
	}

	setPhone(phoneDetails) {
		this._phone = phoneDetails;

		this._render();
	}

	_render() {
		this._el.innerHTML = compiledTemplate( { phone: this._phone } );
	}

	_onBackButtonClick (event) {
		if (!event.target.closest('[data-element="back-button"]')) {
			return;
		}

		this.trigger('back');
	}

	_onAddButtonClick (event) {
		if (!event.target.closest('[data-element="add-button"]')) {
			return;
		}

		this.trigger('add', this._phone.name);
	}
}
