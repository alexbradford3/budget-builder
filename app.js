const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var router = express.Router();
var database = require('./dbcon.js')
var PORT = process.env.PORT || 4000;
app.set('port', PORT);

// Budget model
// let Product = require ('./product.model.js');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(database.uri, 
{ useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// router.route('/').get(function(req, res) {
//   Product.find(function(err, products) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(products);
//     }
//   });
// });

// router.route('/:id').get(function(req, res) {
//   Product.findById(req.params.id)
//     .then(product => {
//       res.status(200).json(product);
//     })
//     .catch(err => {
//       res.status(400).send('Could not find product');
//     })
// });

// router.route('/add').post(function(req, res) {
//   let product = new Product(req.body);
//   product.save()
//     .then(product => {
//       res.status(200).json({'product': 'product added successfully'});
//     })
//     .catch(err => {
//       res.status(400).send('adding new product failed');
//     })
// });

// router.route('/delete/:id').delete(function(req, res) {
//   Product.findByIdAndDelete(req.params.id)
//     .then(product => {
//       res.status(200).send(product + '\n\nProduct was successfully deleted');
//     })
//     .catch(err => {
//       res.status(400).send('deleted product id: ' + req.params.id + ' failed');
//     })
// });

// app.use('/products', router);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});