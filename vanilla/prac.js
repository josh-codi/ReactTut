
function getEven (maxNum){
    let result = []
    for(let x = 1; x <= maxNum; x++){
        if(x%2 === 0){
            result.push(x)
        }
    }
    return result
}

function getOdd(maxNum){
    let result = [];
    let x = 0;
    while(x <= maxNum){
        if(x%2 != 0){
            result.push(x)
        }
        x++
    }
    return result;
}


function getPrime(maxNum){
    range = []
    for(let x=1;x<=maxNum; x++){
        range.push(x)
    }

    if(maxNum > 1){
        let prime = [1]
        for(let x=2; x<=range.length; x++){
            let t = []
            for(let j=1; j<=x;j++){
                if(x%j === 0){
                    t.push(j)
                }
            }
            if(t.length === 2){
                prime.push(x)
            }
        }
        return prime
    }else return [1]
}

console.log(getPrime(1))