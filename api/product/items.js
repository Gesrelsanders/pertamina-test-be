// api/product/items.js
const express = require('express');
const router = express.Router();
const items = [];
const verifyToken = require('../../middleware/verifyToken');


router.get('/items', verifyToken, (req, res) => {
    const objResponse = {
        code: 200,
        message: "success",
        data: items
    }
    res.send(objResponse);
});

router.post('/items', verifyToken, (req, res) => {
    const ids = items.length +1;
    const item = { id: ids, ...req.body };
    items.push(item);
    req.body['id'] = ids;
    const objResponse = {
        code: 201,
        message: "success add",
        data: req.body
    }
    res.send(objResponse);
});

router.put('/items/:id', verifyToken, (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (!item) return res.status(404).send('Item not found.');

    Object.assign(item, req.body);

    const objResponse = {
        code: 200,
        message: "success edit",
        data: item
    }
    res.send(objResponse);
});

router.delete('/items/:id', verifyToken, (req, res) => {
    const index = items.findIndex(i => i.id == req.params.id);
    if (index === -1) return res.status(404).send('Item not found.');

    items.splice(index, 1);
    const objResponse = {
        code: 200,
        message: "success delete item",
    }
    res.send(objResponse);
});

module.exports = router;
