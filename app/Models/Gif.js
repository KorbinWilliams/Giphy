export default class Gif {
    constructor(data) {
        this.title = data.title
        this.user = data.user || ""
        this.url = data.image_url
    }

    get Template() {
        return `
        <h3>${this.title}</h3>
        <img src="${this.url}"></img>
        `
    }
}