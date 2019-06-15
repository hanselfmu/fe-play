console.log('carousel component loaded');

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: block;
  border: 5px solid orange;
}
.title {
  color: blue;
}
</style>
<div class="title">hello world</div>
`;

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-carousel', Carousel);
