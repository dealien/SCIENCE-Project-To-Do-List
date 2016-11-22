$('.sampleClass span').replaceWith(function() {
    var url = $.trim($(this).text());
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});