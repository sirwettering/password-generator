1. [ Description. ](#desc)
2. [ Web Address. ](#web-address)
3. [ Usage tips. ](#usage)
4. [ Assignment. ](#assign)


<a name="desc"></a>
## 1. Description


### This is a password generator for the Module 3 Challenge


Desktop screen:

![main-page](https://user-images.githubusercontent.com/88121961/131273875-5ea57487-45ad-4d09-bdf4-0aa28be9ecf7.PNG)

## 2. Generator URL

### Open your favorite web browser and enter the following web address to access.

```html
https://sirwettering.github.io/password-generator/
```

## 3. How it Works


### Follow the criteria instructions to generate a password matching the criteria selected.

Steps to have a successfulvalid password generated.


### Click Generate Password

![generate-button](https://user-images.githubusercontent.com/88121961/131274074-e0878ca4-ff16-41d6-a569-5631659e5030.PNG)

### Possible criteria options

![pw-criteria](https://user-images.githubusercontent.com/88121961/131274481-c9340499-35e4-4068-a4f2-2621db8c45b8.PNG)

### Enter criteria options: enter the integer corresponiding to the option you want.

![pw-criteria-2](https://user-images.githubusercontent.com/88121961/131274224-9f0e067d-4136-475d-bbf0-ee1927940e25.PNG)

#### Leave  space between the criteria selected. ####

![pw-criteria-spaces](https://user-images.githubusercontent.com/88121961/131275311-7b1a5228-8f8d-4c72-a333-b67b553917f5.PNG)

#### Duplicated values are not allowed. #### 
#### Incorrect criteria will cause application to restart. ####
#### If you wish to exit the application, please close the browser tab. ####

![pw-generator-exit](https://user-images.githubusercontent.com/88121961/131274355-d5828dd4-80ab-4910-be2c-71cdbac3abb7.PNG)

### Read the lenght rules. That is from 8-128 characters. E.x 23.

![pw-length](https://user-images.githubusercontent.com/88121961/131274809-e9409c54-6ed3-4c92-99fd-e49d8fa3e21f.PNG)

### Enter the desired length

![pw-length-enter](https://user-images.githubusercontent.com/88121961/131274873-b3f0cc78-807e-4f09-a495-b35772150070.PNG)

### Lenght selected confirmation

![pw-length-confirm](https://user-images.githubusercontent.com/88121961/131274991-66d2667e-2729-404f-b92e-9cc69b006a96.PNG)

### End result - test of 23 performed. Copy and paste you password. Note that you cannot type once the password has been provided for security.

![pw-test-run](https://user-images.githubusercontent.com/88121961/131275103-64f63b11-586f-4493-aa2e-6a99cea2141a.PNG)

<a name="assign"></a>
## 4. Assignment

### Your Task

This week’s Challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.

The password can include special characters. If you’re unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation (Links to an external site.).

### User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria
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
