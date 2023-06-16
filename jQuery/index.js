// $('h1').css('color', 'red');
$('h1').addClass('big-title margin-50');
console.log($('h1').hasClass('big-title'));

// $('button').text('Dont click me');
$('button').html('<em>HEY</em>');

$('img').attr(
  'src',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfrzsu8c4adk55ZWbtoggbdjB-P2XTB5cTcBDiaSGxdo2hcJJRkVFWZvSYylzlFupAcA&usqp=CAU',
);

$('a').attr('href', 'https://www.youtube.com/');
