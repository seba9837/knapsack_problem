const express = require('express');
const router = express.Router();

router.post('/dynamicSolver', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        response: 'cokolwiek'
    });
})

module.exports = router;