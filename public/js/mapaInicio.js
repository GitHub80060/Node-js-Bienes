/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mapaInicio.js":
/*!******************************!*\
  !*** ./src/js/mapaInicio.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n\tconst lat = 4.8143;\n\tconst lng = -75.6946;\n\tconst mapa = L.map('mapa-inicio').setView([lat, lng], 13);\n\n\tlet markers = new L.FeatureGroup().addTo(mapa);\n\tlet propiedades = [];\n\n\t//filtros\n\tconst filtros = {\n\t\tcategoria: '',\n\t\tprecio: '',\n\t};\n\n\tconst categoriaSelect = document.getElementById(\"categoria\");\n\tconst precioSelect = document.getElementById(\"precio\");\n\n\tL.tileLayer(\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n\t\tattribution:\n\t\t\t'&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n\t}).addTo(mapa);\n\n\t//filtrado de categorias y precios\n\tcategoriaSelect.addEventListener(\"change\", (e) => {\n\t\tfiltros.categoria = Number(e.target.value);\n\t\tfiltrarPropiedades();\n\t});\n\n\tprecioSelect.addEventListener(\"change\", (e) => {\n\t\tfiltros.precio = Number(e.target.value);\n\t\tfiltrarPropiedades();\n\t});\n\n\tconst getPropiedades = async () => {\n\t\ttry {\n\t\t\tconst url = await fetch(\"/api/propiedades\");\n\t\t\tpropiedades = await url.json();\n\t\t\tmostrarPropiedades(propiedades);\n\t\t} catch (error) {\n\t\t\tconsole.log(error);\n\t\t}\n\t};\n\n\tconst mostrarPropiedades = (propiedades) => {\n\t\t//limpiar los markers previos\n\t\tmarkers.clearLayers();\n\n\n\t\tpropiedades.forEach((propiedad) => {\n\t\t\t//agregar los pines\n\t\t\tconst marker = new L.marker([propiedad?.lat, propiedad?.lng], {\n\t\t\t\tautoPan: true,\n\t\t\t}).addTo(mapa).bindPopup(`\n\t\t\t\t\t\t<h1 class=\"font-extrabold mb-2\">${propiedad?.titulo}</h1>\n\t\t\t\t\t\t<img class=\"w-40 h-40 object-cover\" src=\"/uploads/${propiedad?.imagen}\" alt=\"${propiedad?.titulo}\">\n\t\t\t\t\t\t<p class=\"text-gray-700\">Categoría: ${propiedad?.categoria.nombre}</p>\n\t\t\t\t\t\t<p class=\"text-gray-700\">Precio: $${propiedad?.precio.nombre}</p>\n\t\t\t\t\t\t<p class=\"text-gray-700\">${propiedad?.calle}</p>\n\t\t\t\t\t\t<a href=\"/propiedad/${propiedad.id}\" class=\"bg-indigo-600 block text-white text-center p-2 rounded-full hover:bg-indigo-700 transition-colors cursor-pointer font-bold\">Ver propiedad</a>\n\t\t\t\t`);\n\n\t\t\t\tmarkers.addLayer(marker);\n\t\t});\n\t};\n\n\tconst filtrarPropiedades = () => {\n\t\tconst resultado = propiedades\n\t\t\t.filter(filtrarCategoria)\n\t\t\t.filter(filtrarPrecio);\n\t\tmostrarPropiedades(resultado);\n\t};\n\n\tconst filtrarCategoria = (propiedad) => {\n\t\tif (filtros.categoria) {\n\t\t\treturn propiedad.categoriaId === filtros.categoria;\n\t\t}\n    console.log(propiedad);\n\t\treturn propiedad;\n\t};\n\n\tconst filtrarPrecio = (propiedad) => {\n\t\tif (filtros.precio) {\n\t\t\treturn propiedad.precioId === filtros.precio;\n\t\t}\n    console.log(propiedad);\n    return propiedad;\n\t};\n\n\tgetPropiedades();\n})();\n\n\n//# sourceURL=webpack://proyecto_node_js/./src/js/mapaInicio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/mapaInicio.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;