// Создать тамагочи, у которого должно быть минимум 6 методов, минимум 6 переменных, от которых зависит его жизнь.
// Например: создается инстанс тамагочи и дается имя питомцу, он может кушать, гулять, спать, пить, умереть или сбежать и т.д.
// За эти или иные действия отвечают переменные самого инстанса, например health, happiness и так далее...

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.health = 40;
        this.stomach = 500;
        this.weight = 5;
        this.happynes = 5;
        this.age = 0;
        this.dead=false;
        this.live();
    }

    live(){
        let myAge = setInterval(()=>{
            this.age ++;
            console.log("alive ",this.age,' seconds');
            if(this.age>10){
                this.dead=true;
                console.log('I AM DEAD');
                clearInterval(myAge);
            }
        },300)
    }

    eat(calories) {
        this.stomach += calories;
        if(this.stomach>1000){
            this.stomach=500;
            this.health -= 5;
            this.happynes -=5;
            console.log('BEEEEEE, TO MUCH !!!');
        }if (this.stomach = 1000){
            this.stomach = 600;
            this.weight += 1;
            console.log('My weyght now: ' + this.weight);
        } if (this.stomach>400){
            this.age -= 5;
            this.health += 5;
            console.log('I am hungry');
        }
    }

    hello() {
        console.log('Hello world, My name is :' + this.name);
    }

    play(game){
        if (this.health <= 10){
            console.log('I don’t want to play today, I got sick !!!')
        }if(this.health > 10){
            this.happynes += game;
            console.log('Pit happynes: ' + this.happynes);
        }
    }

    sleep(hours){
        if (this.health <= 50){
            this.health += hours
        }if (this.haealth >= 50){
            this.health =50;
            this.happynes += 1;
            console.log('I don\'t want to sleep anymore');
        }
        console.log('Pit health: ' + this.health);
    }

    walk(){
        this.health += 5;
        console.log('add health after walk: ' + this.health);
    }
    doctor(){
        this.health += 5;
        console.log('cured + 5od health: ' + this.health);
    }

    bye(){
        if (this.happynes <=10){
            console.log('Bye-bye');
        }
    }
}
let name = prompt('Hello! Give a name to your pet');
let tamagotchi = new Tamagotchi(name),
    game = 3;
    tablet = 5,
    hours = 5;

tamagotchi.hello();
tamagotchi.eat();
tamagotchi.sleep(hours);
tamagotchi.play(game);
tamagotchi.walk(5);
tamagotchi.doctor(tablet);
tamagotchi.bye();
