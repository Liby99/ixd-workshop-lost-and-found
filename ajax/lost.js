/* TODO: Implement the Found AJAX Handler */
module.exports = {
  get: function (req, res) {
    var data = require("./data.json");
    res.success(data);
  }
  catch (ex) {
    res.error(10, "no data");
  }
}
