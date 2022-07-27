const isFetching:boolean = true 
const isLoading:boolean = false

const int: number = 42
const float: number = 4.2
const num:number = 3e10


const message:string = "hello TS"

const numberArray: number[] = [1,1,2,3,5,8,13]
const numberArray2: Array<number> = [1,1,2,3,5,8,13]

const words: string[] = ['Hello TS']

//Tuple

const contact:[string,number] = ['Bael',12345]

//any

let variable:any = 42
variable = 'newString'
variable = []

//===
function sayMyname(name:string):void{

    console.log(name);
    
}
sayMyname('Bael')


//Never
function throwErro(message:string): never{
 
throw new Error(message)
        

}

function infinie():never{
    while(true){

    }
}

//Type
type Login = string

const login: Login = 'admin'

type ID = string | number

const id1: ID = 1234
const id2: ID ='1234'

type SomeType = string |null | undefined