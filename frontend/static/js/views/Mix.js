import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Mix");
  }

  async getHtml() {
    return `
            <h1>Mix</h1>
            <p>You are viewing the Mix!</p>
        `;
  }
}
