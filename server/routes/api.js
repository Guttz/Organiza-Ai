const express = require('express');
const router = express.Router();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";
var ObjectId = require('mongodb').ObjectID;

//Full login experience implementing all libs below
//var CT = require('../libs/country-list');
var AM = require('../libs/account-manager');
//var EM = require('../libs/email-dispatcher');


router.post('/get_cli', (req,res) =>{
  console.log("Running get_user Post.");

  MongoClient.connect('mongodb://localhost/', function(err, db) {
    if (err) {
      throw err;
    } 

    if(req.body.cpf != undefined)
    {
      db.db(req.session.user.assistencia).collection('clientes').findOne( { cpf: req.body.cpf }, function(err, result) {
        if (err) {
          throw err;
        }
        //Checking if founded any user
        if(result != null)
        {
          console.log("The user is present on DB");
          res.send(result);
        }
        else
        {
          console.log("The user is not present on DB");
          res.send(null);
        }
      });
    }
    else
    {
      console.log("Can't get the CPF to make get_user post");
      res.send(null);
    }
  });

});

router.post('/update_cli', function(req, res, next){
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.cpf != undefined)
    {
      db.db(req.session.user.assistencia).collection('clientes').update( { cpf: req.body.cpf }, req.body, function(err, result){
        if(err)
        {
          throw err;
        }
        else
        {
          console.log("Update_cli with success");
          res.send('');
        }
      });
    }
    else
    {
      console.log("Invalid params, can't complete update_cli");
    }

  })
});

router.post('/add_cli', function(req, res, next){
    model = require('../model/cliente')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.redirect('/');
      })
});

router.post('/add_orca', function(req, res, next){
      model = require('../model/orca')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      console.log(req.body);
      
      var body = req.body;
      body.status = false;

      

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.redirect('/');
      })

});

router.post('/remove_orca', function(req, res, next){
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("orcas").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send("deleted");  
    db.close();
    });
  });
});

router.get('/get_orcas', (req, res) => { 
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('orcas').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});


router.post('/update_orca', function(req, res, next){
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.bd_id != undefined)
    {
      db.db(req.session.user.assistencia).collection('orcas').updateOne({ _id: (new ObjectId(req.body.bd_id))}, {$set: {marca: req.body.marca, defeito: req.body.defeito, modelo: req.body.modelo, data: req.body.data, periodo: req.body.periodo}}, function(err, result){
        if(err)
        {
          throw err;
        }
        else
        {
          console.log("Updated orca with success");
          res.send(result);
        }
      });
    }
    else
    {
      console.log("Invalid params, can't complete update_orca");
    }

  })
});

router.post('/add_atendimento', function(req, res, next){
      //Geting the model
      model = require('../model/atendimento')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      console.log(req.body);
      
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.send("");
      })

});

router.get('/get_atendimentos', (req, res) => { 
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('atendimentos').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});

router.post('/remove_atendimento', function(req, res, next){
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("atendimentos").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send("deleted");  
    db.close();
    });
  });
});

router.post('/add_finalizado', function(req, res, next){
      //Geting the model
      model = require('../model/finalizado')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      console.log(req.body);
      
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.send("");
      })

});

router.get('/get_finalizados', (req, res) => { 
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('finalizados').find({}, {limit: 5}).toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});

router.post('/remove_atendimentos', function(req, res, next){
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("finalizados").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send("deleted");  
    db.close();
    });
  });
});

router.post('/add_card', function(req, res, next){
  var model = require('../model/cards')();

  //Variavel que recebe os dados do fomulario
  var body = req.body;
  body.status = false;

  model.create(body, function(err, usuario){
    if(err)
    {
      throw err;
    }

    res.redirect('/');
  })

});

router.post('/login', function(req, res){
  AM.manualLogin(req.body['user'], req.body['pass'], function(e, o){
    if (!o){

      res.status(400).send(e);
    } else{
      console.log('eu sou o ' + o);
      req.session.user = o;
      res.cookie('dcJJe4ZEsB', "&5nPPAJk0i#{DBw]<{,@:d+RQGp7xb", { maxAge: 900000 });

      res.status(200).send(o);
    }
  });
});

router.post('/signup', function(req, res){
  AM.addNewAccount({
    user  : req.body['user'],
    pass  : req.body['pass'],
    assistencia  : 'Rosa',
  }, function(e){
    if (e){
      res.status(400).send(e);
    } else{
      res.status(200).send('ok');
    }
  });
});

router.post('/logout', function(req, res){
  res.clearCookie('dcJJe4ZEsB');

    //TEM QUE APAGAR A SESSION DO MONGODB AQU
    
    req.session.destroy( function(e){ res.status(200).send('') });
  });

router.get('/header', function(req, res) {
  res.send(req.session.user);
});



module.exports = router;