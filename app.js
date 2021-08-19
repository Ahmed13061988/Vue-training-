new Vue({
    el: '#app', 
    data: {
        name : "Alex", 
        age: 31, 
        email: "alex@gmail.com", 
        gender: "male", 
        picture: "",
        salary: 57000, 
        classes: ['blue', 'underline']
    }, 
    methods: {
     async changeUser(){
       const res = await fetch('https://randomuser.me/api')
       const { results } = await res.json()
        
       this.name = results[0].name.first
       this.email = results[0].email
       this.gender = results[0].gender
       this.age = results[0].age  
       this.salary = 55000; 
       this.picture = results[0].picture.large
     }
    }
})