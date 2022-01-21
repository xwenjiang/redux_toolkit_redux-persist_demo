app.get('/hello', function(req, res) {
    res.send({
      status: 0,
      msg: "hello hunger valley"
    })
  });