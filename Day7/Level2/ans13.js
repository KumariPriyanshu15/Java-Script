function evensAndOdds(n) {
    let counteven = 0
    let countodd = 0
    for(let i=0;i<=n;i++){
        if(i%2==0){
            counteven++
        }
        else{
            countodd++
        }
    }
    return{
        odd: countodd++,even: counteven++
    }
    }
    console.log(evensAndOdds(100))

