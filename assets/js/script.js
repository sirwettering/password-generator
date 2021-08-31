//Global Variables

//Used to translate input array back to the user as a string
var arraySplit = ""; 

//Used to stop the Application
var exitApplication = false; 

//Used to generate password based on criteria
var userInput = ""; 

//Used as a variable to store temporatly a random passoword
var finalPassword = ""; 

//Used to display the final password
var displayPassword = ""; 

//Password Criteria
var pwCriteria = {
  lowercase: { indexNumber: 0, criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2, criteria: "0123456789"
  },
    symbols: { indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
}

//Password Generation
var generatePassword = function() {

  //Tell User the Criteria
  window.alert("The criteria for this password generator are lowercase, uppercase, numeric, and/or special characters.");

    userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters.\n");

    if (!userInput) {
      window.alert("If you wish to close the application, please close this password generator tab.");
      generatePassword();
    } else {
      userInput = userInput.split(" ");
      //Take the userInput Array and Slice it From Positon 0 to the End of the Array
      arraySplit = userInput.slice(0,userInput.length);
    }

    window.alert("You have selected: " + arraySplit);

    //Create a For Loop to Varify the User Input a Valid Criteria
    for (var i = 0; i < userInput.length; i++) {
      
      // Take One Item From the User Input and Move to an Integer For the Switch Case.
      var inputCriteria = userInput[i];
      
      // Convert This Output Into Integer For Further Validation
      var inputCriteriaInteger = parseInt(inputCriteria);
      
      // Switch Case
      switch(inputCriteriaInteger) {
        case 1:
        case 2:
        case 3:
        case 4:
          
          //The array is Cleared. Then Break to Check the Next Item Based on userInput.length
          break;
        
        // Anything Outside of Cases 1-4
        default: 
          
          //This Catches Invalid User Inputs
          if (!inputCriteriaInteger) { 
            window.alert("Please select a criteria using numbers and only from 1-4 seprated by one space.\nRestarting generator");
            
            //Go Back to Check Criteria Again
            generatePassword(); 
          } else { 
            window.alert("Please select a criteria using numbers and only from 1-4 seprated by space.\n\n" + "User input: " + inputCriteria + " is invalid");
            
            //Go Back to Check Criteria Again
            generatePassword();
          } 
      }
}

  // Validate For Repeated Inputs by Checking userInput
  var repeatedPassState = true;

  //Create an Empty Array and Assign the Same Values of the User Input
  var validateInput = [];
  var round1Shift = "";
  var round1Pop = "";
  var criteria3 = "";
  var criteria4 = "";
  var validateInputArray = []

  //Check if Only 1 Criteria Was Given
  if (userInput.length == 1) {
    repeatedPassState = false;
  }

  //Check for Repeated Numbers. Go Back to generatePassword();
  while (repeatedPassState) {

    //Create Array From User Input
    var tempVar = "";
    for (var i = 0; i < userInput.length; i++) {
      tempVar = userInput[i];
      validateInput.push(tempVar);
    }

    //First Check Passes = Second is Checked For Repeated Values
    round1Shift = validateInput.shift();
    round1Pop = validateInput.pop();
    if (round1Shift === round1Pop) {
      window.alert("Repeated values. Please check criteria rules.");
      generatePassword();
    } 
        
    else {
        debugger;
      var round2Shift = "";
      var round2Pop = "";
      round2Shift = validateInput.shift();
      round2Pop = validateInput.pop();

      //The First Check Was Okay - Nothing More to Check
      if(!round2Shift || !round2Pop) {
        repeatedPassState = false;
        break;
      }

      if (round1Shift === round2Shift) {
        window.alert("Repeated values. Please check criteria rules.");
        generatePassword();
      } else if (round1Pop === round2Pop) {
        window.alert("Repeated values. Please check criteria rules.");
        generatePassword();
      } else if (round1Shift === round2Pop) {
        window.alert("Repeated values. Please check criteria rules.");
        generatePassword();
      } else if (round1Pop === round2Shift) {
        window.alert("Repeated values. Please check criteria rules.");
        generatePassword();
      } else if (round1Shift === round1Pop) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } else if (round2Shift === round2Pop) {
        window.alert("Duplication detected, please check criteria rules.");
        generatePassword();
      } 
      else {    
        // Validation Passed For Repitions.
        repeatedPassState = false;
      }
    } 
  }

  var pLength = passLength();

  displayPassword = generateRandomness(userInput, pLength);

  function generateRandomness(userInput, pLength) {
    var valueRandom = 0;
      
    //Used in While Loop
    var counter = userInput.length 
  
    // Counter to Stay Within Parameters
    var UserCounter = userInput.length
  
    //Used to Stored Password to Pass to writePassword()
    var finalPassword = "";
    
    //Guarantee user.length Criteria
    for (var i = 0; i < userInput.length; i++) {

      var guaranteedCriteria = userInput[i];
    
      //Generate String Randomness Around the userInput Criteria of 1-4.
      if (guaranteedCriteria === "1") {
      
        //Will Yield 0-25 (26 alphabetical characters)
        valueRandom = Math.floor(Math.random() * 26);

        finalPassword += pwCriteria.lowercase.criteria[valueRandom];

      } else if (guaranteedCriteria === "2") {
      
        //Will Yield 0-25 (26 alphabetical characters)
        valueRandom = Math.floor(Math.random() * 26);
        finalPassword += pwCriteria.uppercase.criteria[valueRandom];

      } else if (guaranteedCriteria === "3") {

        //Will Yeild 0-9
        valueRandom = Math.floor(Math.random() * 10);
        finalPassword += pwCriteria.numeric.criteria[valueRandom];

      } else if (guaranteedCriteria === "4") {

        ///Will yield 0-29 (30 Possible Characters)
        valueRandom = Math.floor(Math.random() * 31);
        finalPassword += pwCriteria.symbols.criteria[valueRandom];
      } 
    }

    //Finish reaching pLength
    while ( counter < pLength )  {

      if (!userInput[(UserCounter - 1)]) {

        UserCounter -= Math.floor( ( (Math.random() * userInput.length) + 1) );
        counter += 1;
  
      } else {
        UserCounter = Math.floor( ( (Math.random() * userInput.length) + 1) );
        counter += 1;
      }

      var inputCriteria = userInput[(UserCounter - 1)];
    
      //Varify the Input is an Integer
      var inputCriteriaInteger = parseInt(inputCriteria);
      
      //Switch Case With inputCriteriaInteger to Check the userInput Criteria.
      switch(inputCriteriaInteger) { 
        case 1:
          valueRandom = Math.floor(Math.random() * 26);
          finalPassword += pwCriteria.lowercase.criteria[valueRandom];
            break; 
            //Completed - Check for Next Counter.
        case 2:
          valueRandom = Math.floor(Math.random() * 26);
          finalPassword += pwCriteria.uppercase.criteria[valueRandom];
          break;
        case 3:
          valueRandom = Math.floor(Math.random() * 10);
          finalPassword += pwCriteria.numeric.criteria[valueRandom];
          break;
        case 4:
          valueRandom = Math.floor(Math.random() * 30);
          finalPassword += pwCriteria.symbols.criteria[valueRandom];
          break;
        }
      }
      //Final Password is Ready to Move to writePassword()
      return finalPassword;
    }

  //Checks the User Input For Desired Length of Characters From 8-128
  function passLength() { 

    // Ask For Desired Length
    window.alert("How long do you want your password to be from 8-128 characters?\n E.x. 23");
    var pLength = parseInt(window.prompt("Please enter desired length of your password.")); 
  
    //Converts to an Integer to Check Validity
    if (pLength < 8 || pLength > 128) {
    
      window.alert("Please enter a valid number between 8-128.");
      passLength();
    } else if (!pLength) { 
      // If Null Send Back to the passLenght() Function.
      window.alert("Please enter a valid number between 8-128.");
      passLength();
    } else {
      window.alert("You have entered a valid length of: " + pLength + "\n Your password will now be generated.");
    
      //Length Input is Valid. Return the pLength Value.
      return pLength; 
    }
  }
}

// Write password to the #password input
function writePassword() {
 
  //Initialize Global Variables
  arraySplit = "";
  exitApplication = false;
  userInput = "";
  finalPassword = "";
  displayPassword = "";
  window.alert("Lets check our password criteria options");
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
    
  //Enable Text to Be Added to the Text Area to Insert Generated Password.
  document.getElementById("password").readOnly = false; 
  
  //Display password into the text area.
  document.getElementById("password").value = displayPassword;
  
  //Disable the Text Area so the User Can Only Copy and Paste - Not Modify the Password Generated.
  document.getElementById("password").readOnly = true; 
}

//Get References to the #generate Element
var generateBtn = document.querySelector("#generate");


//Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);

//Should the Application Start or Not
function exitApplicationForm () {
  if (exitApplication === true) {
    // Exit the Application
  } else {
    // Start the application
    // To initilze if refreshing
    writePassword();
  }
}