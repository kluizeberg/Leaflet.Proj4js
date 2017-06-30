/*
 * leaflet.proj4.js
 */

L.Proj4 = {
	_about: 'Leaflet-Proj4js interface'
};

L.Proj4.projection = function (code, proj4def, bounds) {
	if (proj4def) {
		proj4.defs(code, proj4def);
	} else if (proj4.defs[code] === undefined) {
		throw 'No proj4 definition for code "' + code + '".';
	}

	return {
		_proj4: proj4(code), // "private" proj4 object

		bounds: bounds ? L.bounds(bounds) : bounds,

		project: function (latLng) {
			var point = this._proj4.forward([latLng.lng, latLng.lat]);
			return new L.Point(point[0], point[1]);
		},

		unproject: function (point) {
			var latLng = this._proj4.inverse([point.x, point.y]);
			return new L.LatLng(latLng[1], latLng[0]);
		}
	};
};

L.Proj4.crs = function (code, options) {
	code = code || 'EPSG:3857'; // ?
	options = options || {};

	return L.extend({}, L.CRS.Earth, { // "inherit" from CRS.Earth because of distance method (and R property)
		code: code,

		infinite: options.infinite !== undefined ? options.infinite : !options.bounds,

		wrapLat: options.wrapLat,
		wrapLng: options.wrapLng, // [-180, 180] in CRS.Earth

		projection: options.projection ? options.projection :
			this.projection(code, options.proj4def, options.bounds),

		transformation: options.transformation ? options.transformation :
			options.origin ? new L.Transformation(1, -options.origin[0], -1, options.origin[1]) :
			L.Transformation(1, 0, -1, 0),

		_scale: options.scale ? options.scale :
			options.resolution ? 1 / options.resolution : // units per pixel
			options.scaleDenominator ? 1e3 / 0.28 / options.scaleDenominator : // 0.28 mm/pixel
			256, // ?

		scale: function (zoom) {
			return Math.pow(2, zoom) * this._scale;
		},

		zoom: function (scale) {
			return Math.log(scale / this._scale) / Math.LN2;
		}
	});
};
