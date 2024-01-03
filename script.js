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
