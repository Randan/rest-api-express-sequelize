// controllers should be separated from routers
const router = require('express').Router();
const Subscriber = require('../models/subscriber');

router.get('/', (req, res) =>
    Subscriber.findAll({ raw: true })
        .then(subscribers => res.json(subscribers))
        .catch(err => res.status(500).json({ message: err.message })) // Create middleware to catch 500 status errors
);

router.get('/:id', (req, res) =>
    Subscriber.findAll({ // we can use findByPk method
        where: { id: req.params.id },
        raw: true
    })
        .then(subscribers => res.json(subscribers))
        .catch(err => res.status(500).json({ message: err.message })) // Create middleware to catch 500 status errors
);

router.post('/', (req, res) => {
    const newSubscriber = { // we can use destructuring here
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
    };

    Subscriber.create(newSubscriber)
        .then(() => res.status(201).json(newSubscriber))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', (req, res) => {
    const updatedSubscriber = {};

    if (req.body.name != null) // These should be undefined? How does this one work?
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
        .catch(err => res.status(500).json({ message: err.message })); // Create middleware to catch 500 status errors
});

module.exports = router;