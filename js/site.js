// Sep One - controller/accepts requests
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    displayValues(startValue, endValue);
}

// Final Step - view
function displayValues(start, end) {
    // First get the ol element from the page
    element = document.getElementById("results");
    // For loop
    for (let i = start; i <= end; i++) {
        // Create a new li element
        let item = document.createElement("li");
        // If item is even, make bold-else, make other color - through CSS
        if (i % 2 == 0) {
            item.classList.add("boldItem");
        } else {
            item.classList.add("coloredItem");
        }
        // Add classes to the li element
        item.classList.add("list-group-item");
        // Set the message for the li element
        item.innerHTML = i;
        // Add the new item to the list
        element.appendChild(item);
    }
}