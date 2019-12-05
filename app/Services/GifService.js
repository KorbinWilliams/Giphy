import store from "../store.js";
import Gif from "../Models/Gif.js";

// @ts-ignore
let gifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/random?api_key=igVJdEL8q2aemDa2VeJiAGYS9fb7WvSA",
  timeout: 5000
})

// @ts-ignore
let myGifApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/Darryl/gifs",
  timeout: 5000
})

class GifService {
  async addMyGifAsync(id) {
    let gifPost = store.State.gifs
    let res = await myGifApi.post(gifPost)
    store.commit("myGifs", gifPost)
  }
  async randoGifAsync() {
    debugger
    let res = await gifApi.get("")
    console.log("res", res.data)
    let gifData = new Gif(res.data.data)
    store.commit("gifs", gifData)
  }
  constructor() {

  }
}

const service = new GifService();
export default service;
