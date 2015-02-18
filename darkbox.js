/**
 * A pure Javascript lightbox with minimal options nicknamed a "darkbox".
 *
 * @author Sebastiaan Franken <sebastiaan@sebastiaanfranken.nl>
 */

(function(w, d) {
	function darkbox(options) {
		var self = this,
			defaults = {
				size: 'medium'
			};

		self.options = self.utils.merge(defaults, options || {});
	}

	darkbox.prototype = {
		constructor: darkbox,

		utils: {
			merge: function(dest, origin) {
				for(var key in origin) {
					if(origin.hasOwnProperty(key)) {
						dest[key] = origin[key];
					}
				}

				return dest;
			},

			style: function() {
				switch(arguments.length) {
					case 2:
						var element = arguments[0],
							properties = arguments[1];

						for(var prop in properties) {
							arguments.callee(element, prop, properties[prop]);
						}
					break;

					case 3:
						var element = arguments[0],
							key = arguments[1],
							value = arguments[2];

						element.style.setProperty(key, value);
					break;

					default:
						throw("Unknown number of arguments " + arguments.length);
					break;
				}
			}
		},

		show: function() {
			var self = this,
				bg = d.createElement('div'),
				img = d.createElement('img');
		}
	};

	w.darkbox = darkbox;
})(window, document);