class BankAccount{
    
    constructor()// this is setter by default
    
    {
      var balance
    }
    setBalnce(a){
      this.balance=a
    }
    getBalance(){
      const username=prompt("enter your username")
      const password=prompt("enter your password")
      if(username=="trivenee" && password=="welcome"){
        alert(this.balance)
      }
      else{
        alert("invalid user")
      }
    }
}
const ba= new BankAccount()
ba.setBalnce(40000)
ba.getBalance()