/* eslint-disable class-methods-use-this */
export default class ContainerGame {
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
