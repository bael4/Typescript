function add(a:number,b:number):number{
return a+b
}

function toUpperCase(str:string):string{
return str.trim().toUpperCase()
}
interface MyPosition{
    
    x:number | undefined
    y:number | undefined

}

interface MyPositionWithDefault extends MyPosition{
    default:string      
}
function possition():MyPosition
function possition(a:number):MyPositionWithDefault
function possition(a:number,b:number): MyPosition

function possition(a?: number,b?:number){
if(!a && !b){
    return {x:undefined,y:undefined }
}
if(a && b){
    return {x:a,y:undefined,default:a.toString()}
}
return {x:a,y:b}
}
console.log(possition);
console.log('Empty:',possition());
console.log('One param: ',possition(42));
console.log('Two params: ',possition(10,15));

