$(function () {
  $.getJSON('content.json', function (data) {
    for (var i in data) {
      let title = '<a target="_blank" href="' + data[i].url + '">' + data[i].title + '</a>';
      let day = '<span class="day">' + data[i].day + '</span>';
      let type = '<span class="icon"><img src="img/logo/' + data[i].type + '.svg" alt="' + data[i].type + '"></span>';
      $('.content ul').append('<li>' + type + title + day + '</li>');
    }
  });
});
