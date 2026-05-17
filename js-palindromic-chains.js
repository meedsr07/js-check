function palindromicChain(numbers) {
    let res = [] ; 
    let count = 0 ; 
    for ( let  i = 0 ; i < numbers.length ; i++) {
        let nb =  numbers[i] 
        while ((!ispalindrom(nb)) && count != 100) {
            let str  = nb.toString()
            let rev = revers(str)
            nb = nb + parseInt(rev)
            count++
        }

        if (ispalindrom(nb)) {
            res.push(nb)

        }else {
            res.push(0)
        }

        
    } 
    return res
}


function revers(str ) { 
    let rev = "" ;
    for (let i = str.length -1 ; i>= 0 ; i--) {
        rev+= str[i]
    }
    return rev
}

function ispalindrom(num) {
    let str = num.toString() 
    let revstr = revers(str) 
    let numrev = parseInt(revstr) 
    return (num === numrev)

}



