function setRouter(app){ 
 var router = app; 

app.get('/hello', function(req, res) {
    res.send({
      status: 0,
      msg: "hello hunger valley"
    })
  });}
 module.exports.setRouter = setRouter