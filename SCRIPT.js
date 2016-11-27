document.body.onload = start;

function start() {
  testjQuery();
  linkNames();
  crewTags();
}

function testjQuery() {
  if (!window.jQuery) {
    console.log("jQuery is not loaded");
  } else {
    console.log("jQuery is loaded");
  }
}

function linkNames() {
  console.log("Running function linkNames()");
  $('span:not([class])').replaceWith(function() {
    var username = $.trim($(this).text());
    return '<a href="https://socialclub.rockstargames.com/member/' + username + '" target="_blank">' + username + '</a>';
  });
}

function crewTags() {
  console.log("Running function crewTags()");
  $('span.crew').replaceWith(function() {
    var val = $.trim($(this).text());
    console.log("val = " + val);
    var rank = (val.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g) || []).map(function(v) {
      return +v;
    }).shift();
    if (rank > 5) {
      rank = 5
      console.log("'rank' too large. Changed to '5'");
    }
    console.log("rank = " + rank);
    var crew = val.substr(val.length - 4).toLowerCase();
    var tag = '<div class="crew-tag private"><span class="crew-tag-name">' + crew + '</span><div class="hierarchy" title="">'
    if (rank > 0) {
      var i, j, ref;
      for (i = j = 1, ref = rank; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        tag += '<span class="rank-banner"id="' + crew + '"></span>';
      }
    }
    tag += '</span></div></div>'

    return tag;
  });
}