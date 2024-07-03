const app = Vue.createApp({
    
    data () {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: '/another tutorial/profile-pictures/profile picture.png',
        }
    },

    methods: {
        getUser() {
            this.firstName = 'Sam',
            this.lastName = 'Smith',
            this.email = 'Sam@gmail.com',
            this.gender = 'female',
            this.picture = '/another tutorial/profile-pictures/profile picture woman.png'
        }   
     }
})

app.mount('#app')