new Vue({
    el: '#app', 
    data: {
        name : "ahmed", 
        age: 31, 
        salary: 57000, 
        classes: ['blue', 'underline']
    }, 
    methods: {
      sayMyName(){
          return this.name
      }, 

      sayMySalary(){
        return this.salary
      }, 

      putYourName(name){
          return name + " "+this.age
      },

      sayHi(message){
        return alert(message)
      }
    }
})