import GifService from "../Services/GifService.js";
import store from "../store.js";

//Private
function _draw() {
  let gif = store.State.gifs;
  let template = ""
  template += gif.Template
  console.log(gif);
  document.querySelector("#theRandoGif").innerHTML = template
}

function _drawMyGifs() {
  let myGifs = store.State.myGifs
  let template = ""
  myGifs.forEach(m => template += m.myGifsTemplate)
  document.querySelector("#myGifs").innerHTML = template
}

//Public
export default class GifController {
  constructor() {
    store.subscribe("gifs", _draw);
  }

  async randoGifAsync() {
    try {
      await GifService.randoGifAsync()
    } catch (error) {
      console.error(error)
    }
  }

  async addMyGifAsync(id) {
    try {
      await GifService.addMyGifAsync(id)
    } catch (error) {
      console.error(error)
    }
  }
}
