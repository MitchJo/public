
//maps

	function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(12.887685,77.625598),
	    zoom:16,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

 // popover demo
	 
