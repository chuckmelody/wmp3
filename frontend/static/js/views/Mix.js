import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Mix");
  }

  async getHtml() {
    return `

  <div class="row">
    <div class="col">
      <div class="d-flex">
        <div class="bg-dark">
        house
        </div>
        <div>
        car
        </div>
      </div>
    </div>
  </div>
</div>

        `;
  }
}
