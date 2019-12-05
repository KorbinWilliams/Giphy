export default class Gif {
    constructor(data) {
        this.title = data.title
        this.mp4 = data.image_mp4_url
        this.user = data.user
    }

    get Template() {
        return `
        <h3>${this.title}</h3>
        <video src="${this.mp4}"></video>
        `
    }
}