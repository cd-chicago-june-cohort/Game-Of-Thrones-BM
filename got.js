
$(document).ready(function() {
console.log('NOW READY')
 
        $('img').click(function(){
        $('#houseTitles').html('');
        id = $(this).attr('id');

        var url = 'http://anapioficeandfire.com/api/houses/' + id;

        // CORS Anywhere is a NodeJS reverse proxy which adds CORS headers to the proxied request.
        var cors = 'https://cors-anywhere.herokuapp.com/';
      
        $.get(cors + url, function(info) {

            var name = info.name;
            var words = info.words;
            var titles = info.titles;

            $('#houseName').html("");
            $('#houseName').append('<h2>' + name + '</h2>');
            $('#houseName').append('<h3>' + words + '</h3>');

            // iterate through 'titles'
            for (var i = 0; i < titles.length - 1; i++) {

                $('#houseTitles').append('<li></h4>' + titles[i] + '</h3></li>');
                console.log(titles);
            };
                  
          }, 'json');

    });
    
});