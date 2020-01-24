const express = require('express');
const bioRouter = express.Router();
const Biology = require('../models/biology');

// POST VOCABULARY
    bioRouter.post('/', (req, res, next) => {
        const newVocabulary = new Biology(req.body);
        newVocabulary.save((err, savedVocab) => {
            if(err){
                res.status(500);
                return next(err);
            }
            res.status(201).send(savedVocab);
        })
    })

    // GET VOCABULARY
    bioRouter.get('/', (req, res, next) => {
        Biology.find((err, vocab) => {
            if(err){
                res.status(500);
                return next(err);
            }
            res.status(200).send(vocab);
        })
    })

    // DELETE VOCABULARY
    bioRouter.delete('/:_id', (req, res, next) => {
        Biology.findOneAndRemove({ _id:req.params._id }, 
            (err, deletedVocab) => {
                if(err){
                    res.status(500);
                    return next(err);
                }
                return res.status(200).send(deletedVocab);
        })
    })

    // UPDATE VOCABULARY
        bioRouter.put('/:_id', (req, res, err) => {
            Biology.findOneAndUpdate({ _id: req.params._id }, 
                req.body, (err, updatedVocab) => {
                    if(err){
                        res.status(500);
                        return next(err);
                    }
                    return res.status(201).send(updatedVocab);
                })
        })

        module.exports = bioRouter