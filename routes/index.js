
/*
 * GET home header.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.demos = function (req, res) {
    var name = req.params.name;
    res.render('partials/demos/' + name);
};