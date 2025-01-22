// Question 2: Create three functions that take a number, multiply it by 2,
// subtract 3, and then add 10. Use callbacks to chain these operations together.

function mul(num,callback){
    return callback(num*2,false);
}

function sub(num,callback){
    return callback(num-3,false);
}

function add(num,callback){
    return callback(num+10,false);
}

mul(10,(res1,err)=>{
    if(!err){
        sub(res1,(res2,err)=>{
            if(!err){
                add(res2,(res3,err)=>{
                    if(!err){
                        console.log(res3)
                    }else{
                        console.log("error in addition")
                    }
                })
            }else{
                console.log("error in subtraction")
            }
        })
    }else{
        console.log("error in multiplication")
    }
})