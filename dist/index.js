"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    door = false;
    key;
    tenants = [];
    constructor(key) {
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("Мешканець зайшов у будинок");
        }
        else {
            console.log("Двері зачинені");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log("Двері відчинено");
        }
        else {
            console.log("Неправильний ключ");
        }
    }
}
class Key {
    signature;
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    key;
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
console.log(house.tenants);
//# sourceMappingURL=index.js.map