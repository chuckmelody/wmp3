import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.mixId = params.id;
    this.setTitle("Viewing Mix");
  }

  async getHtml() {
    return `
            <h1>Post</h1>
            <p>You are viewing mix #${this.mixId}.</p>
        `;
  }
}
