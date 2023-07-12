class Governor{
    static rule = "free tuition"
    constructor(law,vote,spare){
this.law = law;
this.vote = vote;
this.spare = spare;
    }

    static veto(){
        this.vote = false;
        console.log(this.vote)
    }
}

const johnny = new Governor("free money", true, true)
console.log(johnny)

console.log(Governor.veto())


class Person{
    constructor(name,weight=10,job){
        this.name= name;
        this.weight= weight;
        this.job= job;

    }
    shout(){
        console.log(`${this.name}!`)
    }
    exercise(){
        weight--
    }
    work(){
        console.log(`I am a ${this.job}`)
    }
}

class PostalWorker extends Person{
    constructor(name, weight= 10, job){
    super(name, weight= 10, job)
    }

    deliver(){
        console.log(`Heres your package ${this.name}`)
    }
    run(){
        console.log(`There is a mean dog, run!`)
    }
}

class Chef extends Person{
    constructor(name, weight= 10, job){
        super(name, weight=10, job)
    }

    cook(){
        console.log("Cooking up some spaghet")
    }

    salt(){
        console.log('*Elbow sprinkles some salt*')
    }
}

const pw1 = new PostalWorker("bob", 150, "mailman")

const pw2 = new PostalWorker("tim", 160, "driver")

pw1.deliver()
pw2.deliver()
pw1.run()
pw2.run()

const chef1 = new Chef("chris", 200, "linecook")
const chef2 = new Chef("john", 160,"master chef")

chef1.cook()
chef2.cook()
chef1.salt()
chef2.salt()


//=====Hungry for More ==========

class BankAccount{
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum
    }

    deposit(num){
        this.balance += num
    }
}