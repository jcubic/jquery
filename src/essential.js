import indexOf from "./var/indexOf.js";
import cash from 'cash-dom/dist/cash.min.js';

var jQuery = cash.extend({
    inArray: function( elem, arr, i ) {
        return arr == null ? -1 : indexOf.call( arr, elem, i );
    }
}, cash);

export default jQuery;
