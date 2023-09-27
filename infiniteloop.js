document.addEventListener( "DOMContentLoaded", function() {
    console.log("scroll");
    var div = document.getElementById( "content" );
    div.addEventListener( "scroll", function() {
      console.log("hi")
      var max_scroll = this.scrollHeight - this.clientHeight;
      var current_scroll = this.scrollTop;
      var bottom = 100;
      if (current_scroll + bottom >= max_scroll) {
          var ul = document.querySelector("ul"); 
          var current = parseInt(ul.dataset.current, 10);
          var liToClone = ul.querySelector("li:nth-child(" + (current + 1) + ")");
  
          if (liToClone) {
            var new_li = liToClone.cloneNode(true);
            ul.appendChild(new_li);
            ul.dataset.current = current + 1;
          }
        }
    } );
  } );
  
  
  
  