const router = require('express').Router();
const Subscriber = require('../models/subscriber');

router.get('/', (req, res) =>
    Subscriber.findAll({ raw: true })
        .then(subscribers => res.json(subscribers))
        .catch(err => res.status(500).json({ message: err.message }))
);

router.get('/:id', (req, res) =>
    Subscriber.findAll({
        where: { id: req.params.id },
        raw: true
    })
        .then(subscribers => res.json(subscribers))
        .catch(err => res.status(500).json({ message: err.message }))
);

router.post('/', (req, res) => {
    const newSubscriber = {
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
    };

    Subscriber.create(newSubscriber)
        .then(() => res.status(201).json(newSubscriber))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', (req, res) => {
    const updatedSubscriber = {};

    if (req.body.name != null)
        updatedSubscriber.name = req.body.name;

    if (req.body.subscribedChannel != null)
        updatedSubscriber.subscribedChannel = req.body.subscribedChannel;


    Subscriber.update(updatedSubscriber, { where: { id: req.params.id } })
        .then(() => res.json(updatedSubscriber))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', (req, res) => {
    Subscriber.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ message: 'This Subscrider was deleted' }))
        .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;