'use strict'

module.exports = function (app, db, collection) {
  var polls = db.collection(collection)

  app.get('/api/getpolls', function (req, res) {
    polls.find({}, { '_id': 0 }).sort({ '_id': 1 }).toArray(function (err, docs) {
      if (err) {
        console.error(err)
      } else {
        res.set({
          'Access-Control-Allow-Origin': 'http://localhost:4200'
        })
        res.json(docs)
      }
    })
  })
}
