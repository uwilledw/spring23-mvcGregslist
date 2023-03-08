import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.color = data.color
  }


  get HouseCard() {
    return `[${this.id} - ${this.color}]`
  }
}