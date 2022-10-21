# [AdoptDog](https://adoptdog.netlify.app)
Hackathon project, 30 hours of coding, to create an adoption system for the municipality of Dimona. 

## Table of contents 
- [AdoptDog](#adoptdog)
  - [Why was AdoptDog made](#why-was-adoptdog-made)
  - [Running the project](#running-the-project)
  - [Screenshots](#screenshots)
    + [Home page](#home-page)
    + [Adoption](#adoption-page)
    + [Volunteering Page](#volunteering-page)

  - [Technologies](#technologies)
    + [Client-Side](#client-side)
    + [Server-Side](#server-side)
  - [Tools and libraries:](#tools-and-libraries)
    + [Client-Side](#client-side)
    + [Server-Side](#server-side)
  - [Whats Next](#whats-next)
  
## Why was AdoptDog made

1. The municipality of Dimona asked us to build this for them so they could find more people who would love to adopt the Dogs that gets to their corral.
2. Creating our first fullstack project with MERN stuck.
3. Practice coding as team with the pressure of a contest and time limit.

## Running the project

1. Clone the repo.
2. Open two terminals.
3. Enter the server folder in one terminal and the client folder in the other.
4. Run `npm install` in both terminals.
4. Run 'npm start' in both terminals.
5. Navigate to `http://localhost:3000`.

## Screenshots

### Home page
Welcome page with video of different dogs that my project's partner made by himself.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666362429/Screenshots/Adoption%20site/homedog_jxr95g.jpg"/></p>


### Adoption page

This is the main page of the application. On this page you can find all the dogs in the system, you can filter them By: Age, Gender, and Size. 
We wanted to make the user experience simple and convinient, that's why we decided to keeop it all in one page, using Hover and Modal.

Hover - a user can put his mouse on a card and get most of the details he need to make a choice. 
Modal - If a user got interested, he can click the button below the card, and a window with more details and a form to leave contact details will appear.

It's important to mention that if a dog already adopted, he will apear in the page but the user will not be able to open the modal and leave his contact details. 
That's because we want to motivate more people to adopt by letting them know that others adopting the dogs as well. 

In addition, if a user can't find the dog he was looking for, he can send us his contact details, with his prefered dog parameters (Size, Age, Gender), And the system will save that. He will get a mail saying that his request got into our system and we will contact him soon.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666362116/Screenshots/Adoption%20site/adoption_by5iz2.jpg"/></p>

### Volunteering page

On this page we were focused on structure it simple. So the "Admin" will be able to add the necessery details about volunteerings (title, description, and working hours) and it will display orderly in the website.  

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666362171/Screenshots/Adoption%20site/voulenteer_jkogyi.jpg"/></p>


## Technologies:

### Client-side:
* React.JS
* EmailJS

### Server-side:
* Node.JS
* MongoDB

## Tools and libraries:

### Client-side:
  * react-redux
  * react-router
  * bootstrap
  * axios
  * formik and yup

### Server-side:
  * Express
  * mongoose

## What's next:
- [ ] Add the News and Contact sections/pages. 
- [x] Add Responsiveness. 
- [ ] Save the user's contact details in the DB
- [ ] Admin dashboard

