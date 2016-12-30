// var name = 'aihong';
// module.exports = name;

// let name = 'zhangshan';
//
// export default name;

var $ = require('./lib/jquery');

var common = {
  getList: function () {
    $.ajax({
      url: '/api/list',
      success: function (res) {
        console.log(res);
      }
    })
  }
};

module.exports = common;
