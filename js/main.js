
// $("#imageContainer").append("<img/>");

// function addImage() {
// 	var imgUrl = $("#imgUrl").val();
// 	$("#imageContainer img").attr("src", imgUrl);
// }

// $("#go").click(addImage);

$("#imageContainer").append("<img/>");
$("#imageContainer img").attr("src", "image/pup.jpg");

function editImage() {
	var gs = $("#gs").val(); // grayscale
	var blur = $("#blur").val(); // blur
	var br = $("#br").val(); // brightness
	var ct = $("#ct").val(); // contrast
	var huer = $("#huer").val(); //hue-rotate
	var opacity = $("#opacity").val(); //opacity
	var invert = $("#invert").val(); //invert
	var saturate = $("#saturate").val(); //saturate
	var sepia = $("#sepia").val(); //sepia

	$("#imageContainer img").css("-webkit-filter", 'grayscale(' + gs+
													 '%) blur(' + blur +
													 'px) brightness(' + br +
													 '%) contrast(' + ct +
													 '%) hue-rotate(' + huer +
													 'deg) opacity(' + opacity +
													 '%) invert(' + invert +
													 '%) saturate(' + saturate +
													 '%) sepia(' + sepia + '%)'); 

}

//When sliders change
$("input[type=range]").change(editImage).mousemove(editImage);








