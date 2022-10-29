// Security gaurde
// Check queue of people, if person is older than 18 and younger than 35, admit. Otherwise, appologize.

// write variables to contain the limitations of the age.
const minAge = 18;
const maxAge = 35;

// we will loop through the queue.
do {
    let age = prompt("Please enter your age");
    if (age >=minAge   && age <= maxAge ) {
    let person=prompt("What is your Name");
    //let welcome= "Hello " + person + "! How are you today?";
    console.log("Hello " + person + "! How are you today?")}

    else {    
      console.log("you are too old")
  }
  }
  // if current person is younger than 18, will print (you are too young)
  // if older than 35, will print (you are too old)
  // if between 18 and 35, ask for the user name, and welcome the user by his/her name.
 while (confirm("Is there anyone else?"));
