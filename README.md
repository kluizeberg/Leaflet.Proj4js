# Leaflet.Proj4js

Plugin for [Leaflet](http://leafletjs.com) offering a lightweight interface with [Proj4js](http://proj4js.org). Inspired by [kartena / Proj4Leaflet](https://github.com/kartena/Proj4Leaflet).

Compatible with Leaflet version 1.0 (tested with 1.1.0), **not** compatible with version 0.x.

See [demo](https://kluizeberg.github.io/Leaflet.Proj4js/demo.html) (GRB-basiskaart Vlaanderen, Belgian Lambert 72, EPSG:31370).

## Installation and usage

See [`demo.html`](demo.html).

## API

### Functions

| Method | Returns | Description |
| :----- | :------ | :---------- |
| `projection(<String> code, <String> proj4def?, <Bounds> bounds?)` | [`Projection`](http://leafletjs.com/reference-1.1.0.html#projection) | Projection factory. |
| `crs(<String> code?, <crs options> options?)` | [`CRS`](http://leafletjs.com/reference-1.1.0.html#crs) | CRS factory. |

### Crs Options

| Option | Type | Default | Description |
| :----- | :--- | :------ | :---------- |
| [`infinite`](http://leafletjs.com/reference-1.1.0.html#crs-infinite) | `Boolean` | | |
| `bounds` | `Bounds` | | Bounds of the CRS, in projected coordinates. |
| [`wrapLat`](http://leafletjs.com/reference-1.1.0.html#crs-wraplat) | `Number[]` | | |
| [`wrapLng`](http://leafletjs.com/reference-1.1.0.html#crs-wraplng) | `Number[]` | | |
| `projection` | `Projection` | | |
| `proj4def` | `String` | | Proj.4 definition. |
| `transformation` | `Transformation` | | To transform projected coordinates into pixel coordinates. |
| `origin` | `Number[]` | | Tileset origin, in projected coordinates. |
| `scale` | `Number` | | Scale for zoom level 0. |
| `resolution` | `Number` | | Resolution (projection units per pixel) for zoom level 0. |
| `scaleDenominator` | `Number` | | Scale denominator (WMTS) for zoom level 0. |
