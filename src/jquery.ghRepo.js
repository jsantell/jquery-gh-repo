// jquery.ghRepo.js
// @jsantell (c) 2012

;(function ( $ ) {

  var
    REPO_API = 'https://api.github.com/repos/',
    ghRegex = /https?\:\/\/(www\.)?github.com\//;

  $.fn.ghRepo = function ( options ) {
    options = $.extend( {}, $.fn.ghRepo.defaults, options );

    return this.each(function () {
      var
        $this = $( this ),
        repo = options.repo || $this.data( 'ghRepo' );
      if ( !repo ) {
        repo = ( $this.is( 'a' ) ? $this : $this.closest( 'a' ) ).attr( 'href' );
      }
      $.ajax({
        url      : REPO_API + repo.replace( ghRegex, '' ),
        dataType : 'jsonp',
        success  : function ( res ) {
          $this.append( $('<span />', { text: res.data[ options.data ] }) );
        }
      });
    });
  };

  $.fn.ghRepo.defaults = {
    data : 'watchers',
    repo : ''
  };

})( jQuery );
