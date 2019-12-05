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
    <div class="d-flex justify-content-center">
        <button class="btn btn-success" onclick="app.gifController.addMyGifAsync('${this.id}')">Add to MyGifs</button>
    </div>
        `
    }

    get myGifsTemplate() {
        return `
        <li>${this.title}</li>
        `
    }
}