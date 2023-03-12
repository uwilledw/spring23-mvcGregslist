import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }


  createHouse() {
    event.preventDefault()
    console.log('create house');
    const form = event.target
    console.log(form);
    let formData = getFormData(form)
    housesService.createHouse(formData)
    form.reset()
  }
}