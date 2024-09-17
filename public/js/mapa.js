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

/***/ "./src/js/mapa.js":
/*!************************!*\
  !*** ./src/js/mapa.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function() {\n    const lat = 4.8367424;\n    const lng = -75.6808774;\n    const mapa = L.map('mapa').setView([lat, lng ], 13);\n    let marker;\n    \n    //Utilizar Provider y Geocoder\n    const geocodeService = L.esri.Geocoding.geocodeService();//permite obtener la direción de la clle\n\n\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n        attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n    }).addTo(mapa);\n\n     //Pin para poder dar la ubicación y poder mover\n      marker = new L.marker([lat, lng], {\n        draggable: true,\n        autoPan: true  //mueve el pin y se mueve el mapa\n        })\n        .addTo(mapa)\n\n        //detectar moviemiento del Pin para leer latitud y longitud\n    marker.on('moveend', function(e){\n        marker = e.target\n        const posicion = marker.getLatLng();\n            mapa.panTo(new L.LatLng(posicion.lat, posicion.lng)) //panTo-permite centrar la posición en el mapa\n    //obtener la información de las calles donde se suelte el Pin\n    geocodeService.reverse().latlng(posicion, 13).run(function(error, resultado) {\n    //console.log(resultado)\n    marker.bindPopup(resultado.address.LongLabel) //imprime en el globo toda la información\n\n    //llenar los campos para luego almacenarlos en la BF.\n    document.querySelector('.calle').textContent = resultado?.address?.Address ?? '';\n    document.querySelector('#calle').value = resultado?.address?.Address ?? '';\n    document.querySelector('#lat').value = resultado?.latlng?.lat ?? '';\n    document.querySelector('#lng').value = resultado?.latlng?.lng ?? '';\n\n        })\n    })\n\n})()\n\n//# sourceURL=webpack://proyecto_node_js/./src/js/mapa.js?");

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
/******/ 	__webpack_modules__["./src/js/mapa.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;