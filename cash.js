import cash from 'cash-dom/dist/cash.min.js';
import jQuery from './src/callbacks.js';
console.log(jQuery);
cash.Callbacks = jQuery.Callbacks;
module.exports = cash;
