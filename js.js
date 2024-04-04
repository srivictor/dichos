function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, x;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
	x=0

// Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
			x++;
		}
    } 
	
	document.getElementById("resultado").innerHTML = (9000 - x) + " Dichos encontrados. ";
}






// Get the modal
//var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}





