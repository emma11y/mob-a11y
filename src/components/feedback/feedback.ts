import feedbackTemplate from './feedback.html?raw';

export class CustomFeedback extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = feedbackTemplate;
  }
}

customElements.define('custom-feedback', CustomFeedback);
