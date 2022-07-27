class TypeScript{
    version: string 
    constructor(version:string){
this.version = version
    }
    info(name:string){
    return`[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4 

    constructor(themodel:string){
     this.model = themodel
    }
}

class Car{
    readonly numberOfWheels: number = 4 
    constructor(readonly model:string){}
}

//модификаторы 

class Animal{
    protected voice: string = ''
    public color: string = 'black'

    constructor(){
        console.log("go");
        
    }
    private go(){
        console.log('go');
        
    }
}

class Cat extends Animal{
    public setVoice(voice:string): void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color);

///////////////////////

abstract class Component{
    abstract render(): void
    abstract info(): string
}

class  AppComponent extends Component{
    render(): void{
        console.log("Component of render");
        
    }
    info(): string {
        return 'This is info'
    }
}

