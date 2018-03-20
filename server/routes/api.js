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

function checkSession(req)
{
  console.log(req.session.user)
  if(req.session.user === undefined)
  {
    console.log("cai enssa poha");
    return false;
  }
  return true;
}

router.post('/get_cli', (req,res) =>{
  if(!checkSession(req))
  {
    return;
  }
  console.log("Running get_user Post.");

  MongoClient.connect('mongodb://localhost/', function(err, db) {
    if (err) {
      throw err;
    } 

    if(req.body.cpf != undefined)
    {
      db.db(req.session.user.assistencia).collection('cliente').findOne( { cpf: req.body.cpf }, function(err, result) {
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
  if(!checkSession(req))
  {
    return;
  }
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.cpf != undefined)
    {
      db.db(req.session.user.assistencia).collection('cliente').update( { cpf: req.body.cpf }, req.body, function(err, result){
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
  if(!checkSession(req))
  {
    return;
  }
    model = require('../model/cliente')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.send(null);
      })
});

router.post('/add_orca', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
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
        res.send(null);
        //res.redirect('/');
      })

});

router.post('/remove_orca', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("orca").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send(null);  
    db.close();
    });
  });
});

router.get('/get_orcas', (req, res) => { 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('orca').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});


router.post('/update_orca', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.bd_id != undefined)
    {
      db.db(req.session.user.assistencia).collection('orca').updateOne({ _id: (new ObjectId(req.body.bd_id))}, {$set: {marca: req.body.marca, defeito: req.body.defeito, modelo: req.body.modelo, data: req.body.data, periodo: req.body.periodo, observacoes: req.body.observacoes}}, function(err, result){
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
  if(!checkSession(req))
  {
    return;
  }
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
          MongoClient.connect(url, function(err, db){
            if(err) {
              throw err;
            }
            db.db(req.session.user.assistencia).collection('atendimento').updateOne({ _id: output._id},
            {$set: {ordServ: output._id.toString()}}, function(err, result){
              if(err)
              {
                throw err;
              }
              else
              {
                console.log("Added ordServ to the orca");
                output.ordServ = output._id;
                res.send(output);
              }
            });
          });
      });

});

router.get('/get_atendimento', (req, res) => { 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('atendimento').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});

router.post('/remove_atendimento', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("atendimento").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send(null);  
    db.close();
    });
  });
});

router.post('/update_atendimento', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.bd_id != undefined)
    {
      db.db(req.session.user.assistencia).collection('atendimento').updateOne({ _id: (new ObjectId(req.body.bd_id))}, {$set: {marca: req.body.marca, defeito: req.body.defeito, modelo: req.body.modelo, realizado: req.body.realizado, pecas: req.body.pecas, servico: req.body.servico, maoObra: req.body.maoObra, metPag: req.body.metPag, valorFinal: req.body.valorFinal, observacoes: req.body.observacoes, imei: req.body.imei}}, function(err, result){
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

  });
});

router.post('/add_agPecas', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
      //Geting the model
      model = require('../model/agPecas')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      console.log(req.body);
      
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.send(null);
      })

});

router.get('/get_agPecas', (req, res) => { 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('agPecas').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send(result);
    });
  });
});

router.post('/remove_agPecas', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("agpeca").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send(null);  
    db.close();
    });
  });
});

router.post('/update_agPecas', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.bd_id != undefined)
    {
      db.db(req.session.user.assistencia).collection('agpeca').updateOne({ _id: (new ObjectId(req.body.bd_id))}, {$set: {marca: req.body.marca, defeito: req.body.defeito, modelo: req.body.modelo, realizado: req.body.realizado, pecas: req.body.pecas, servico: req.body.servico, maoObra: req.body.maoObra, metPag: req.body.metPag, valorFinal: req.body.valorFinal, observacoes: req.body.observacoes, imei: req.body.imei}}, function(err, result){
        if(err)
        {
          throw err;
        }
        else
        {
          console.log("Updated AG with success");
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

router.post('/add_rtVisita', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
      //Geting the model
      model = require('../model/rtVisita')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      console.log(req.body);
      
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.send(null);
      })

});

router.get('/get_rtVisita', (req, res) => { 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('rtVisita').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      res.send(result);
    });
  });
});

router.post('/remove_rtVisita', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("rtvisita").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send(null);  
    db.close();
    });
  });
});

router.post('/update_rtVisita', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.bd_id != undefined)
    {
      db.db(req.session.user.assistencia).collection('rtvisita').updateOne({ _id: (new ObjectId(req.body.bd_id))}, {$set: {marca: req.body.marca, defeito: req.body.defeito, modelo: req.body.modelo, realizado: req.body.realizado, pecas: req.body.pecas, servico: req.body.servico, maoObra: req.body.maoObra, metPag: req.body.metPag, valorFinal: req.body.valorFinal, observacoes: req.body.observacoes, imei: req.body.imei}}, function(err, result){
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

router.post('/add_pagamento', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
      //Geting the model
      model = require('../model/pagamento')(req.session.user.assistencia);
      //Variavel que recebe os dados do fomulario
      console.log(req.body);
      
      var body = req.body;
      body.status = false;

      model.create(body, function(err, output){
        if(err)
        {
          throw err;
        }

        res.send(null);
      })

});

router.post('/add_and_remove', function(req, res, next)
{
  if(!checkSession(req))
  {
    return;
  }
  console.log("ENTREI NA ADD AND REMOVE");
  //Geting the proper model

  model = require('../model/' + req.body.toList)(req.session.user.assistencia);
  //Variavel que recebe os dados do fomulario
  console.log(req.body);
  
  var body = req.body;
  body.status = false;

    MongoClient.connect(url, function(err, db) 
    {
      if (err) throw err;
      
      //Deleting the 
      console.log(req.body.fromList);
      db.db(req.session.user.assistencia).collection(req.body.fromList).deleteOne({ ordServ: req.body.ordServ}
        ,function(err, obj){
          if (err){
            throw err; 
          } 

          model.create(body, function(err, output)
          {
            if(err)
            {
              throw err;
            }
            res.send(obj);  
            db.close();
        });
    });
  });
});

router.get('/get_pagamento', (req, res) => 
{ 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) 
  {
    if (err) 
    {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('pagamento').find().toArray(function(err, result) 
    {
      if (err) 
      {
        throw err;
      }
      res.send(result);
    });
    
  });
});

router.post('/remove_pagamento', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
  
  console.log("my body" + req.body.cpf);
    
  db.db(req.session.user.assistencia).collection("pagamento").deleteOne({ _id: (new ObjectId(req.body.bd_id))}, function(err, obj) {
    if (err) throw err;
    res.send(null);  
    db.close();
    });
  });
});

router.post('/update_pagamento', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
  //console.log("Running update_cli Post.");
  
  MongoClient.connect(url, function(err, db){
    if(err) {
      throw err;
    }

    //Checking if the params has at least a valid cpf
    if(req.body.bd_id != undefined)
    {
      db.db(req.session.user.assistencia).collection('pagamento').updateOne({ _id: (new ObjectId(req.body.bd_id))}, {$set: {marca: req.body.marca, defeito: req.body.defeito, modelo: req.body.modelo, realizado: req.body.realizado, pecas: req.body.pecas, servico: req.body.servico, maoObra: req.body.maoObra, metPag: req.body.metPag, valorFinal: req.body.valorFinal, observacoes: req.body.observacoes, imei: req.body.imei}}, function(err, result){
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
 

router.post('/add_finalizado', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
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

        res.send(null);
      })

});

router.get('/get_finalizado', (req, res) => { 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('finalizado').find({}, {limit: 5}).toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});

router.get('/get_all_finalizados', (req, res) => { 
  if(!checkSession(req))
  {
    return;
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    db.db(req.session.user.assistencia).collection('finalizado').find({}).toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });
});


router.post('/add_card', function(req, res, next){
  if(!checkSession(req))
  {
    return;
  }
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
      res.cookie('dcJJe4ZEsB', "&5nPPAJk0i#{DBw]<{,@:d+RQGp7xb", { maxAge: 315360000 });
      res.status(200).send(o);
    }
  });
});

router.post('/signup', function(req, res){

  AM.addNewAccount({
    user  : req.body['user'],
    pass  : req.body['pass'],
    assistencia  : req.body['assistencia'],
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