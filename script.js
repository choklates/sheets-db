function handleData(error, options, response) {
  var raw, table, headers, html;

  console.info(response);

  if (!error) {
    raw = response.raw;
    table = raw.table;
    headers = '<thead><tr>';
    response.attributes.labels.forEach(function(header) {
      headers += '<th>' + header + '</th>';
    });
    headers += '</tr></thead>';
    html = headers + response.html;

    $('#table').html(html);
  } else {
    console.warn('haz error');
  }
}

$(document).ready(function() {
  var sheetUrl = 'https://docs.google.com/a/mixamo.com/spreadsheets/d/1uaL9cSSrabNBdR5kW25TKzDdoZUPTvVqHz0L8EsI3-o/edit#gid=1178021648';

  sheetrock({
    url: sheetUrl,
    callback: handleData
  });
});