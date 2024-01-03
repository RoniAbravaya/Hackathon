
// onDragstart4pinkSquare(event): Initiates when the user starts dragging the pink box. It sets the data for the drag operation.

// onDragend4pinkSquare(event): Executes when the user stops dragging the pink box. It's currently logging "end" to the console.

// onDrag4PinkSquare(event): Updates the text content of the pink box with the current mouse coordinates during the drag.

// onDragOver4orange(event): Prevents the default behavior during a drag over the orange box.

// onDrop4orangeSquare(event): Handles the drop event when the pink box is dropped onto the orange box. It appends the pink box to the orange box, triggers a man animation, hides the orange box by reducing opacity, and reveals a hidden volunteer form.



let isPinkBoxInOrange = false;

function onDragstart4pinkSquare(event) {
    console.log("start");
    event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragend4pinkSquare(event) {
    console.log("end");
}

function onDrag4PinkSquare(event) {
    event.target.textContent = event.clientX + " " + event.clientY;
    globalId = event.target.id;
}

function onDragOver4orange(event) {
    console.log("over orange");
    event.preventDefault();
}

function onDrop4orangeSquare(event) {
    console.log("Drop Orange");

    const id = event.dataTransfer.getData("text/plain");
    console.log(id);

    const pinkSquare = document.getElementById(id);
    console.log(pinkSquare);

    event.target.appendChild(pinkSquare);

    // Check if the pink box is dropped into the orange box
    if (event.target.id === "drop-element" && !isPinkBoxInOrange) {
        // Man animation
        const man = document.getElementById("man");
        man.style.animation = "dance 2s forwards"; // You can adjust the animation duration
        isPinkBoxInOrange = true;

        // Hide the orange box by setting opacity to 0
        const dropElement = document.getElementById("drop-element");
        dropElement.style.opacity = 0;

        // Show the user form by setting visibility to visible
        const volunteerForm = document.getElementById("volunteerForm");
        volunteerForm.style.visibility = "visible";
    }
}
