'use strict';

import PhonePage from './components/phone-page/phone-page.js';

let urlParts = window.location.hash.split('/');
let page = urlParts[1] || 'phones';
let pageData = urlParts[2] || '';

window.location.hash = `#!/${ page }/${ pageData }`;

switch (page) {
	case 'phones':
		let currentPage = new PhonePage({
			el: document.querySelector('[data-component="phone-page"]'),
			phoneId: pageData
		});

		break;

	default:
		alert('Page not found');
		break;
}

