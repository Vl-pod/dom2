/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Container.js
/* eslint-disable class-methods-use-this */
class ContainerGame {
  constructor(element) {
    this.element = element;
  }
  create() {
    let randomIndex = this.random();
    const containerItem = Array.from(document.querySelectorAll('.container-item'));
    containerItem.forEach((item, index) => {
      if (item.classList.contains('active') && randomIndex === index) {
        randomIndex = this.random();
      }
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    containerItem[randomIndex].classList.add('active');
  }
  random() {
    return Math.floor(Math.random() * 15);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const containerGame = new ContainerGame(document.querySelector('.container'));
  window.containerGame = containerGame;
  setInterval(() => {
    window.containerGame.create();
  }, 2000);
});
;// CONCATENATED MODULE: ./src/index.js
/* eslint-disable linebreak-style */



/******/ })()
;