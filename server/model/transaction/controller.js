const Controller = require('../../lib/controller')
const transactionFacade = require('./facade')

class TransactionController extends Controller {
    create(req, res, next) {
        this.facade.create(req.body)
            .then(doc => res.status(201).json({
                success: true,
                data: doc
            }))
            .catch(err => {
                console.error(err);
                if (err._message === 'Transaction validation failed') {
                    const messages = Object.values(err.errors).map(val => val.message)
                    return res.status(400).json({
                        success: false,
                        error: messages
                    })
                } else {
                    return res.status(500).json({
                        success: false,
                        error: 'Server error'
                    })
                }
            })
    }

    find(req, res, next) {
        console.log(req.query);
        return this.facade.find(req.query)
            .then(collection => res.status(200).json({
                success: true,
                count: collection.length,
                data: collection
            }))
            .catch(err => {
                return res.status(500).json({
                    success: false,
                    error: 'Server error'
                })
            })
    }

    findOne(req, res, next) {
        return this.facade.findOne(req.query)
            .then(doc => res.status(200).json(doc))
            .catch(err => {
                return res.status(500).json({
                    success: false,
                    error: 'Server error'
                })
            })
    }

    findById(req, res, next) {
        return this.facade.findById(req.params.id)
            .then((doc) => {
                if (!doc) { return res.sendStatus(404) }
                return res.status(200).json(doc)
            })
            .catch(err => {
                return res.status(500).json({
                    success: false,
                    error: 'Server error'
                })
            })
    }

    update(req, res, next) {
        this.facade.updateOne({ _id: req.params.id }, req.body)
            .then((results) => {
                if (results.n < 1) { return res.sendStatus(404) }
                if (results.nModified < 1) { return res.sendStatus(304) }
                res.sendStatus(204)
            })
            .catch(err => {
                return res.status(500).json({
                    success: false,
                    error: 'Server error'
                })
            })
    }

    remove(req, res, next) {
        this.facade.remove({ _id: req.params.id })
            .then((doc) => {
                if (!doc) { return res.sendStatus(404) }
                return res.sendStatus(204)
            })
            .catch(err => {
                return res.status(500).json({
                    success: false,
                    error: 'Server error'
                })
            })
    }
}

module.exports = new TransactionController(transactionFacade)
