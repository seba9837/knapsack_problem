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
    let currentWorth = 0;

    var knapsack = [];

    for(var i=1; i<=n; i++)
    {
        if(w[i-1]+currentWeight<=W)
        {
            knapsack.push({
                id: i,
                weight: w[i-1],
                worth: c[i-1],
                ratio: c[i-1]/w[i-1]
            })
            currentWeight = currentWeight + w[i-1];
            currentPosition++;
            currentWorth = currentWorth + c[i-1];
        }
    }
    console.log(knapsack);

    res.status(200).json({
        knapsack: knapsack,
        totalWorth: currentWorth
    });
})

module.exports = router;