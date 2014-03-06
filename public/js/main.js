(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
  });

  require(['jquery'], function($) {
    return console.log('jquery loaded (via assets/js/main.coffee)');
  });

}).call(this);
