function init(){
  var name = "Yejin Park: ";
  var input = document.getElementById('entryinput');
  var click_button = document.getElementById('entrybutton');
  var output = document.getElementById('textoutput');

  click_button.addEventListener('click', function(){
	alert(name + input.value);
	output.innerHTML = input.value;
    // output.innerHTML = "<h2>" + input.value + "</h2>";
	// above command might be used if it was not in h2. But, it is already in h2 size.
  });
};
window.addEventListener('load', init);
