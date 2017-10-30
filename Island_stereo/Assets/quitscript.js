function Start() {
	Screen.showCursor = false;
}

function Update () { 
   if (Input.GetKeyDown("q")) {
		Application.Quit();
   }
}
