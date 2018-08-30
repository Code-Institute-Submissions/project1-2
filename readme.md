# Max Miguta Personal Profile

## Overview

### What is this website for?

This website is designed to inform any potential employer of my key skills and competencies as well as my employment history and thus to act as a comprehensive online CV.

### What does it do?

The website will list all of my key skills and competencies as well as my employment history for the last 10 years. It will also allow any potential employer to get in touch with me.

### How does it work?

Users will be able to scroll down the pages that will guide them through my skill set and work history. On the Contact page users will be able to fill out a form in order to get in touch with me.

## Demo

You can see the live website [here](https://maxmiguta.github.io/project1/).

## Features

- Responsive design ensures the website will display well on any screen size
- Virtually all of the images and graphics used are my own
- Modals were used on the home page to reveal additional info when a user clicks on specific buttons
- A basic submission form with validation is used on the contact page
- Additional feature includes a current date display based on a real-time calendar

## Technologies used

### Some of the tech used includes:
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Flexbox

## Testing

### Modals on home page

For my Work History I needed to include extra information relating to the multiple roles I had with one of my previous employers while keeping the page from being too congested. To achieve this I needed to hide the extra content initially and make it displayable on demand. Firstly, I created pop-outs (similar to accordion panels) that would slide out from under each button (representing one of the jobs) when clicked.

Upon testing the feature on different screen sizes it became apparent that due to the website's mobile-first responsiveness factor the changing widths of the buttons at different screen sizes made the text boxes very inconsistent and especially poor visually on small screens.

The users need a more consistent result across all screen sizes and so I came up with a much more elegant solution. The modals provide that consistency by always appearing on top of all other content once a button is clicked. You can position the pop-ups exactly as you like, which will be in the middle of the browser window most of the time. In addition, the modals will always remain in the same position relative to the window no matter how the screen is resized.

### Contact form

After I created the contact form and tested filling it out and submitting it I noticed the page simply refreshed afterwards, which left me wondering whether the information I filled in was submitted at all. I realised there was no way for users at that point to be sure that the form was sent.

To make sure users are certain that the information they enter is actually sent I included a simple alert feature that will cause a pop-up box to appear when a user hits the Submit button. The message in the pop-up will notify the user that the form has been submitted successfully.

## Deployment

To deploy the website I used Git Bash and GitHub. In summary, I created a remote repository on GitHub and made that the master branch by default. Next, I connected my local repository to the remote master branch and then pushed or uploaded all the files to that location using Git Bash. Finally, I enabled GitHub Pages to host my website based on the remote repository.

## Wireframing

I used **Balsamiq Mockups** to create a wireframe/storyboard for my website and the mockup file can be found in the *docs* folder.

## Contributing

### Getting the code up and running

1. Firstly you will need to clone this repository by running the ```git clone <project's GitHub URL>``` command
2. Next, you will need to download Node Package Manager (NPM) from [here](https://nodejs.org/en/) and install it on your computer
3. Finally, install **http-server** - this can be done by running the following: ```npm install -g http-server```. This may also require sudo on Mac/Linux.
4. In addition, you will need to manually download and install bootstrap (with no dependencies) from [this link](https://getbootstrap.com/docs/3.3/getting-started/). Alternatively you may like to use bootstrap CDN, in which case you should add the links provided on the same download page in the head of each of your pages.

## Credits

### Basic date display

www.javascriptbank.com