1. [ Description. ](#desc)
2. [ Web Address. ](#web-address)
3. [ Usage tips. ](#usage)
4. [ Assignment. ](#assign)


<a name="desc"></a>
## 1. Description


### This is a password generator for the Module 3 Challenge


Desktop screen:

![Top-Page-Area](./assets/images/landing-page.JPG?raw=true "Top-Page-Area")

Smaller devices screen:

![Top-Page-Area](./assets/images/landing-page-smaller-screen.JPG?raw=true "Top-Page-Area")

<a name="web-address"></a>

## 2. Generator URL

### Open your favorite web browser and enter the following web address to access.

```html
https://esroleo.github.io/javascript-challenge-password-generator/
```

## 3. How it Works


### Follow the criteria instructions to generate a password matching the criteria selected.

Steps to have a successfulvalid password generated.


### Click Generate Password

### Possible criteria options

![nav-menu](./assets/images/pw-criteria.JPG?raw=true "Navigational Menu")

### Enter criteria options: enter the integer corresponiding to the option you want.
#### Leave  space between the criteria selected. ####
#### Duplicated values are not allowed. #### 
#### Incorrect criteria will cause application to restart. ####
#### If you wish to exit the application, please close the browser tab. ####

![nav-menu](./assets/images/enter-criteria.JPG?raw=true "Navigational Menu")

### Read the lenght rules. That is from 8-128 characters. E.x 23.

![nav-menu](./assets/images/enter-lenght.JPG?raw=true "Navigational Menu")

### Enter the desired lenght

![nav-menu](./assets/images/enter-lenght-integer.JPG?raw=true "Navigational Menu")

### Lenght selected confirmation

![nav-menu](./assets/images/enter-lenght-integer-confirmation.JPG?raw=true "Navigational Menu")

### End result - test of 20 performed. Copy and paste you password. Note that you cannot type once the password has been provided for security.

![nav-menu](./assets/images/copy-paste-your-password.JPG?raw=true "Navigational Menu")

<a name="assign"></a>
## 4. Assignment

###Your Task

This week’s Challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.

The password can include special characters. If you’re unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation (Links to an external site.).

###User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

###Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page