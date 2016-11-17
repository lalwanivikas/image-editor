
// adding an image via url box
function addImage(e) {
	var imgUrl = $("#imgUrl").val();
	if (imgUrl.length) {
		$("#imageContainer img").attr("src", imgUrl);
	}
	e.preventDefault();
}

//on pressing return, addImage() will be called
$("#urlBox").submit(addImage);


// editing image via css properties
function editImage() {
	
	var gs 		 = $("#gs").val();      // grayscale
	var blur 	 = $("#blur").val();    // blur
	var br 		 = $("#br").val();      // brightness
	var ct 		 = $("#ct").val();      // contrast
	var huer	 = $("#huer").val();    //hue-rotate
	var opacity      = $("#opacity").val(); //opacity
	var invert 	 = $("#invert").val();  //invert
	var saturate     = $("#saturate").val();//saturate
	var sepia 	 = $("#sepia").val();   //sepia

	var filter = 	'grayscale(' + gs+
			'%) blur(' + blur +
			'px) brightness(' + br +
			'%) contrast(' + ct +
			'%) hue-rotate(' + huer +
			'deg) opacity(' + opacity +
			'%) invert(' + invert +
			'%) saturate(' + saturate +
			'%) sepia(' + sepia + '%)';

	$("#imageContainer img").css("filter", filter);
	$("#imageContainer img").css("-webkit-filter", filter); 

}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').on('reset', function () {
	setTimeout(function() {
		editImage();
	},0);
});
