const express = require('express');
const router = express.Router();

router.post('/dynamicSolver', (req, res) => {
    let W = Number.parseInt(req.body.max,10);
    let n = Number.parseInt(req.body.amount,10);
    let w = req.body.weight.split(",", n).map((charValue)=>{
        return Number.parseInt(charValue,10)
    });
    let c = req.body.worth.split(",", n).map((charValue)=>{
        return Number.parseInt(charValue,10)
    });

    console.log({
    maxWaga: W,
    n: n,
    w: w,
    c: c});
    
    A = new Array(n);
    for (var i=0; i <= n; i++) {
        A[i] = new Array(W+1);
    }

    for(var i=0; i<=n; i++){
        A[i][0] = 0;
    }
    for(var j=0; j<=W; j++){
        A[0][j] = 0;
    }

    for(var i=1; i<=n; i++){
        for(var j=0; j<=W; j++){
            if(w[i-1]>j)
            {
                A[i][j] = A[i-1][j];
            }
            else
            {
                A[i][j] = Math.max(A[i-1][j],A[i-1][j-w[i-1]]+c[i-1])
            }
        }
    }
    console.log(A);
    console.log("Wynik:")
    console.log(A[n][W]);

    res.status(200).json({
        maxWorth: A[n][W]
    });
})

module.exports = router;