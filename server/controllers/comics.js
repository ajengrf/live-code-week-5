const { Comic } = require('../models')

class ComicController {
  static showAll(req, res, next) {
    Comic
      .findAll()
      .then(comics => {
        res.status(200).json(comics)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }

  static update(req, res, next) {
    let comic = {
      title: req.body.title,
      author: req.body.author,
      imageURL: req.body.imageURL
    }

    let id = req.params.id

    Comic
      .update(comic, {
        where: {
          id: id
        },
        returning: true
      })
      .then(updated => {
        if (updated[0] > 0) {
          res.status(200).json(updated[1][0])
        } else {
          res.status(400).json('Not found!')
        }
      })
      .catch(err => {
        console.log(err, '< catch error update')
        next(err)
      })
  }
}

module.exports = ComicController