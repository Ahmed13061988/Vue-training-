new Vue({
    el: '#app', 
    data: {
        name : "ahmed", 
        age: 31, 
        salary: 57000
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
      }
    }
})