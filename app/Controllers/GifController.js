import GifService from "../Services/GifService.js";
import store from "../store.js";

//Private
function _draw() {
  let gif = store.State.gifs;
  let template = ""
  gif.forEach(gif => template += gif.Template)
  console.log(gif);
  document.querySelector("#theRandoGif").innerHTML = template
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
}
