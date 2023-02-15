var options = { valueNames: ["name", "born"] };
var userList = new List("users", options);

var updateList = function () {
  var values_date = $(".date_s").val();
  var values_name = $(".name_s").val();

  userList.filter(function (item) {
    return (
      (_(values_date).contains(item.values().born) || !values_date) &&
      (_(values_name).contains(item.values().name) || !values_name)
    );
  });
};

$(function () {
  updateList();
  $(".date_s").change(updateList);
  $(".name_s").change(updateList);

  var all_born = [];
  var all_name = [];

  _(userList.items).each(function (item) {
    all_born.push(item.values().born);
    all_name.push(item.values().name);
  });

  _(all_born)
    .uniq()
    .each(function (item) {
      $(".date_s").append('<option value="' + item + '">' + item + "</option>");
    });
  _(all_name)
    .uniq()
    .each(function (item) {
      $(".name_s").append('<option value="' + item + '">' + item + "</option>");
    });
});
