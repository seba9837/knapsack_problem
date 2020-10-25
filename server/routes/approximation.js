const express = require('express');
const router = express.Router();

router.post('/approximationSolver', (req, res) => {

    let W = Number.parseInt(req.body.max,10);
    let n = Number.parseInt(req.body.amount,10);
    let w = req.body.weight.split(",", n).map((charValue)=>{
        return Number.parseFloat(charValue,10)
    });
    let c = req.body.worth.split(",", n).map((charValue)=>{
        return Number.parseFloat(charValue,10)
    });

    console.log({
        maxWaga: W,
        iloscPrzedmiotow: n,
        wagi: w,
        wartosci: c}
    );

    for(var i=0; i<n-1; i++)
    {
        for(var j=0; j<n-1; j++)
        {
            if(c[j]/w[j]<c[j+1]/w[j+1])
            {
                let temp1 = c[j];
                c[j] = c[j+1];
                c[j+1] = temp1;

                let temp2 = w[j];
                w[j] = w[j+1];
                w[j+1] = temp2;
            }
        }
    }
    console.log("Po sortowaniu");
    console.log({wagi: w, wartosci: c});

    let currentWeight = 0;
    let currentPosition = 0;

    knapsack_weight = new Array(n);
    knapsack_worth = new Array(n);
    knapsack_Hj = new Array(n);
    

    for(var i=0; i<n; i++)
    {
        if(w[i]+currentWeight<W)
        {
            knapsack_weight[currentPosition] = w[i];
            knapsack_worth[currentPosition] = c[i];
            knapsack_Hj[currentPosition] = c[i]/w[i];

            currentWeight = currentWeight + w[i];
            currentPosition++;
        }
    }

    console.log({
        wagi: knapsack_weight,
        wartości: knapsack_worth,
        stosunek_CW: knapsack_Hj
    });
    
    knapsack_weight.splice(currentPosition,n-currentPosition);
    knapsack_worth.splice(currentPosition,n-currentPosition);
    knapsack_Hj.splice(currentPosition,n-currentPosition);

    console.log("Po obcięciu");
    console.log({
        wagi: knapsack_weight,
        wartości: knapsack_worth,
        stosunek_CW: knapsack_Hj
    });
    
    res.status(200).json({
        response: "m"
    });
})

module.exports = router;