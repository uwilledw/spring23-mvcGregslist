import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', '[Make it]')
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }
}