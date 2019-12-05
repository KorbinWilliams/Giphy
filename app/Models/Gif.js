export default class Gif {
    constructor(data) {
        this.title = data.title
        this.user = data.user || ""
        this.url = data.image_url
        this.id = data.id
    }

    get Template() {
        return `
    <div class="d-flex justify-content-center">
        <h3>${this.title}</h3>
    </div>        
    <div class="d-flex justify-content-center align-content-center gifsize">
        <img src="${this.url}"></img>
    </div>
    <button onclick="app.gifController.addMyGifAsync(${this.id})"></button>
        `
    }

    get myGifsTemplate() {
        return `
        <li>${this.title}</li>
        `
    }
}