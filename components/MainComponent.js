class MainComponent extends HTMLElement {
    constructor() {
        super()
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.users = data.results
                this.render()
            })
    }

    render() {
        this.users.forEach(user => {
            this.appendChild(
                new UserDetailComponent(user)
            )
        })
    }
}

customElements.define('main-component', MainComponent)
