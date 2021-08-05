/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("epic-sidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("epic-sidebar").style.width = "0";
} 

function toggleNav()
{
	var sidebar = document.getElementById("epic-sidebar");
	
	if (sidebar.style.width == "250px")
		sidebar.style.width = "0px";
	else
		sidebar.style.width = "250px";
}