$(document).ready(function(){
	var CurrDate = new Date()
		$("#chat-out").hide();
		$("#copyright").html("©"+ CurrDate.getFullYear() +" Yamaha");
		$("#Username").html("Current User : "+ Session.get("UserName"));
		$('body').on("click",function(e){
			if(e.target.className!="collapsible-header waves-cyan")
			{
				var values = $("#chat-out").css('transform').split(/[()]/)[1];
				if(values == "1, 0, 0, 1, 0, 0")			
					$("#chat-out").hide();
				else
					$("#chat-out").css('transform', 'translateX(-100%)');	
			}
			else{
				$("#chat-out").show();
				$("#chat-out").css('transform', 'translateX(0px)');	
			}	
		});
		
		$('.waves-effect').click(function(){
			$("#chat-out").css('transform', 'translateX(-100%)');
			$("#chat-out").show();
			$("#chat-out").css('transform', 'translateX(0px)');
		});
  
});

	function formatDate(date) {
			var d = new Date(date),
				month = '' + (d.getMonth() + 1),
				day = '' + d.getDate(),
				year = d.getFullYear();

			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;

			return [year, month, day].join('-');
		}
		
	function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

if (JSON && JSON.stringify && JSON.parse) var Session = Session || (function() {
  
  // window object
  var win = window.top || window;
   
  // session store
  var store = (win.name ? JSON.parse(win.name) : {});
   
  // save store on page unload
  function Save() {
    win.name = JSON.stringify(store);
  };
   
  // page unload event
  if (window.addEventListener) window.addEventListener("unload", Save, false);
  else if (window.attachEvent) window.attachEvent("onunload", Save);
  else window.onunload = Save;
 
  // public methods
  return {
   
    // set a session variable
    set: function(name, value) {
      store[name] = value;
    },
     
    // get a session value
    get: function(name) {
      return (store[name] ? store[name] : undefined);
    },
     
    // clear session
    clear: function() { store = {}; },
     
    // dump session data
    dump: function() { return JSON.stringify(store); }
  
  };
  
 })();

