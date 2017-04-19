/* TODO: Implement the Found AJAX Handler */
module.exports = {
  post: function (req, res) {
    req.body.lat = parseFloat(req.body.lat);
    req.body.lng = parseFloat(req.body.lng);
    require("./data.json").push(req.body);
    res.success();
  }
}
