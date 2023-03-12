import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.color = data.color
    this.bed = data.bed
    this.bath = data.bath
    this.price = data.price
    this.img = data.img
    this.area = data.area
    this.description = data.description
  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
    <div class="card elevation-2 fw-bold text-shadow">
      <img
        src="${this.img}"
        alt="${this.area}}">
      <div class="p-2">
        <h5 class="text-center border-bottom border-dark">${this.area} | ${this.bed} | ${this.bath}</h5>
        <div class="color px-5 rounded" style="background: ${this.color}" >🎨</div>
        <p>${this.description}</p>
        <p class="text-end">🍔${this.price}</p>
        <button class="btn btn-outline-danger" title="delete car" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete" ></i></button>
      </div>
    </div>
  </div>`
  }



  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
    <h3>List a House</h3>
  <div class="mb-2 col-4">
    <label for="area">Area</label>
    <input type="text" name="area" id="area" class="form-control">
  </div>
  <div class="mb-2 col-4">
  <label for="bed">Bed</label>
    <input type="number" name="bed" id="bed" class="form-control" required min="0" max="20"
      value="1">
      </div>
  <div class="mb-2 col-4">
    <label for="bath">Bath</label>
    <input type="number" name="bath" id="bath" class="form-control" required min="0" max="10"
      value="1">
  </div>
  <div class="mb-2 col-12">
  <label for="img">Image URL</label>
  <input type="url" name="img" id="img" class="form-control" required
      placeholder="please enter a url for an image...">
  </div>
  <div class="mb-2 col-12">
    <label for="description">Description</label>
    <input type="text" name="description" id="description" class="form-control" maxlength="50">
    </div>
    <div class="mb-2 col-6">
    <label for="color">Color</label>
    <input type="color" name="color" id="color" class="form-control" required value="#4747ff">
    </div>
    <div class="mb-2 col-6">
    <label for="price">Price</label>
    <input type="number" name="price" id="price" class="form-control" required min="1" value="1">
    </div>
    <div class="text-end mt-2">
    <button class="btn" type="button">cancel</button>
    <button class="btn btn-primary" type="submit">submit</button>
    </div>
    </>`
  }
} 