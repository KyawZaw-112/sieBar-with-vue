const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            title: "SideBar With Vue",
            LeftPositon: -250,
            hanburgerDisplay:'block',
            titleColor: '#fff'
        }
    },
    methods: {
        toggleHandler() {
            this.LeftPositon =  0
            this.hamburgerDisplay = 'none'
        },
        closeHandler() {
            this.LeftPositon = -250;
            this.hamburgerDisplay = 'block'
        }
    }
})

app.mount('#app')