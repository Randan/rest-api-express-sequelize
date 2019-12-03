const Subscriber = require('../models/subscriber');

module.exports = {
    get: (req, res, next) =>
        Subscriber.findAll({ raw: true })
            .then(subscribers => res.json(subscribers))
            .catch(next),

    getById: (req, res, next) =>
        Subscriber.findByPk(req.params.id)
            .then(subscribers => res.json(subscribers))
            .catch(next),

    post: (req, res, next) => {
        const { name, subscribedChannel } = req.body;

        Subscriber.create({ name, subscribedChannel })
            .then(() => res.status(201).json({ name, subscribedChannel }))
            .catch(next);
    },

    patch: (req, res, next) => {
        const { name, subscribedChannel } = req.body;

        Subscriber.update({ name, subscribedChannel }, { where: { id: req.params.id } })
            .then(() => res.json({ name, subscribedChannel }))
            .catch(next);
    },

    delete: (req, res, next) => {
        Subscriber.destroy({ where: { id: req.params.id } })
            .then(() => res.json({ message: 'This Subscrider was deleted' }))
            .catch(next);
    }
};