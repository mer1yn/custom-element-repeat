class UserDetailComponent extends HTMLElement {
    constructor(user) {
        super()
        this.user = user
        // this.user = JSON.parse(this.getAttribute('user').replace(/\'/g, "\""))
        this.innerHTML = `
            <div>
                <img src="${this.user.picture.thumbnail}" >
                <span>${this.user.name.title}</span>
                <span>${this.user.name.first}</span>
                <span>${this.user.name.last}</span>
            </div>
        `
    }


}

customElements.define('user-detail', UserDetailComponent)