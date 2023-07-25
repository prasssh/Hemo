const router = require("express").Router();
const auth = require("../middleware/auth");
const { Event } = require("../models/models");

router.post("/", auth, async (req, res) => {
    try {
        req.body.donors = [];
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/:address?", auth, async (req, res) => {
    try {
        let query = {};
        if (req.params.address) {
            query.address = req.params.address;
            
        } 
        const data = await Event.find(query).populate( '-_id -__v -password -requests -donations -stock').populate({
            path: "donors._id",
            select: '-__v -password'
        });
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/allEvents/:address/:date", async (req, res) => {
    try {
        if (req.params.date) {
            const data = await Event.find({
                address: req.params.address,
                date: new Date(req.params.date)
            }, { donors:  0 }).populate("-_id -password -donations -requests -stock +name");
            res.json(data);
        } else{
            res.json({});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.put("/:id/:userId?", auth, async (req, res) => {
    try {
        if (req.params.userId) {
            await Event.update(
                {
                    _id: req.params.id,
                    donors: { $elemMatch: { _id: req.params.userId, status: 0 } }
                },
                { $set: { "donors.$.units": req.body.units, "donors.$.status": 1 } }
            )
        } else {
            if (await Event.find({
                _id: req.params.id,
                donors: { $elemMatch: { _id: req.user } }
            }) != []) {
                await Event.updateOne(
                    { _id: req.params.id },
                    { $push: { donors: { _id: req.user } } }
                );
            }
        }
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
})

module.exports = router;