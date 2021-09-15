const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Thing = require('./models/thing');

const stuffRoutes = require('./routes/stuff');

app.use('/api/stuff', stuffRoutes);

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.use('/api/stuff', (req, res, next) => {
    const product = [
      {
        _id: 'oeihfzeoi',
        name: 'name',
        description: 'descrption',
        price: 1000,
        inStock: true,
      },
    ];
    res.status(200).json(stuff);
  });

 

mongoose.connect('mongodb+srv://OpenClassroom2021:OpenClassroom2021@cluster0.ydhcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());


module.exports = app;
