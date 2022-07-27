function strip(x:string | number){
    if(typeof x === 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse{
    header:"resHeader"
    result:'resResult'
}

class MyError{
    header:"errorHeader"
    message:'erroMessage'
}

function handle(res:MyResponse | MyError){
    if(res instanceof MyResponse){
        return{
            info:res.header + res.result
        }

        
    }else{
        return{
            info:res.header + res.message
        }
    }
}  

//////////////

type AlertRtype = 'succes'|'danger' | 'warning'

function setAlertType(type:AlertRtype){

}

setAlertType('succes')
setAlertType('warning')


