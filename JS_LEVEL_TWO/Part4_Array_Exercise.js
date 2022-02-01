// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
    roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function removeName(name) {
    roster.indexOf(name);
    roster.pop(name);
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
    alert(roster)
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while (1) {
    command = prompt("Would you like to use roster wep app? (Y/n)");
    if (command === 'Y' || command === 'y') {
        var Func = prompt("Please select an action add, remove, display or quit.");
        if (Func === 'add') {
            addNew(prompt("What name would you like to add?"))
        }
        else if (Func === 'remove') {
            removeName(prompt("What name would you like to remove??"))
        }
        else if (Func === 'display') {
            display()
        }
        else if (Func === 'quit') {
            break
        }
    }
    else if (command === 'N' || command === 'n') {
        break
    }

}
alert("Bye bye.")
