$(document).load(function() {
    $('.sampleClass span').replaceWith(function() {
        var user = $.trim($(this).text());
        return '<a href="https://socialclub.rockstargames.com/member/' + user + '" target="_blank">' + user + '</a>';
    });
})