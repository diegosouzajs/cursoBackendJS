class MyDataBase{
    static _intance = null;
    #users = []

    constructor(){
        if(MyDataBase._intance){
            throw new Error('Não é possível instanciar a classe. Use instance!');
        }
    }

    static get instance(){
        if(!MyDataBase._instance){
            MyDataBase._instance = new MyDataBase();
        }
        return MyDataBase._instance;
    }

    add(user){
        this.#users.push(user);
    }

    remove(index){
        this.#users.splice(index, 1);
    }

    show(){
        for(const user of this.#users){
            console.log(user)
        }
    }
}


    

const db1 = MyDataBase.instance;
const db2 = MyDataBase.instance;

console.log(db1 === db2);
db1.add({name: 'Diego', age: 39});
db1.add({name: 'Jose', age: 50});
db1.add({name: 'Alana', age: 25});
db1.add({name: 'Gumercindo', age: 80});

db1.show();