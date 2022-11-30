# App Interview Project

This is an example project we use for all app developer interview candidates. It is designed to look and feel like a real application so that we can better guage how you will operate in a project with our clients.

Thank you for taking the time to work on the project and interview with us. We appreciate your time.

## Grading Criteria

One thing we dislike about many interview processes is a lack of transparency to how a person is being graded. Below is our grading criteria for the assignment. This also mirrors many of the exact skills we need the ideal person to have.

### Fullstack Skillset
> How good are your fullstack developer skillsets?

You will be asked to add/fix code related to the entire software stack. This means some frontend UI, some API intergration, some backend, and some database. We don't need you to be an expert at all, but you must handle all for this job

### Client Business/Requirements
> How well are you able to understand the client business and adapt/suggest solutions that fit them specifically?

Every client project we have is unique, you will need to be able to quickly grasp concepts from the client's business. We are looking for people who adapt their solutions to better fit the business, not just good code.

### Feature Work
> Can you perform routine feature work development for the project?

We will assign a few small improvements to the code. You will be asked to complete these as part of the assignment. Completing features well is much better than completing all poorly.

### Bug Fixes
> How well can you identify and fix bugs the client finds during development?

All of our projects are developed in realtime with the client. You will be receiving feedback and need to tweak things nearly every week of the project.

### Effectiveness vs Perfection
> How well can you balance tech debt vs ideal code?

We routinely need to sacrifice ideal code in favor of effective code that gets the job done now. This means we often take on technical debt and document what needs improved later.

## The Project 

Before we dive in, let's quickly go over the project. Your working on a project called "My Breakup Registry". The founder's name is Natasha and she created the business to help people recover after difficult breakups.

It's the project is similar to a wedding registry, but for dating and breakups.

Users can create a registry for themselves (or a friend) and then add items to that registry for other people to chip in and help buy.

### How People Use The Product
An example user journey might be something like this:

1. Sarah listens to a podcast where My Breakup Registry is promoted
2. She thinks it would be perfect for her friend Meagan, who just went through a bad breakup and needs some help filling out her new apartment
3. Sarah goes to the website, signs up and creates a new registry for her friend, Meagan
4. Sarah begins to add a items and prices she thinks Meagan needs
4. Sarah finished the registry and shares it out on social media asking for people to help
5. People respond to Sarah's post and go to the website to donate and help Meagan
6. Meagan receives a notification that people are donating to her and now she's able to more easily get back on her feet

## Development Setup

We have intentionally made things easier to get going for you. Here are your setup steps

1. Fork the project on github
2. Clone it locally
3. Install depencies - `npm install`
4. Seed/Setup your database - `npm run db:seed`
5. Run the server - `npm run server`
6. Run the client `npm start`

You should now have the app running:

Client - http://localhost:3000
Server - http://localhost:4001

## Tasks

Once you get your project setup and running, complete the following tasks below. Make sure you commit your work and push up to your forked repo. We'll review your code later in a future meeting.

> Note: If you get on one issue for an too long just move on to another. The more work we have to review at the end the better off your interview will be. 

### 1. [BUG] Registration form should validate required fields

We've got a problem in our validation logic that users can submit the registration form, but the backend is throwing null constraint errors.

[ ] Please fix the user registration form to prevent users from submitting invalid data. We need to require first name, last name, and email.

### 2. [FEATURE] Let's add phone number to user accounts

The client is wanting to start sending SMS messages for their onboarding process. People are using the product, but falling off after creating a registry. We think they're losing engagement because the process of creating a registry takes a bit of time, probably more than one sitting for people.

[ ] Please add phone number to our registration process and save it to the database.
[ ] We're not sure if phone number should be required. The client is letting you decide that and will lean on your recommendation.

### 3. [BUG] Add registry item form does not submit when empty

Once a user account has been created we've noticed a small issue where the registration item form doesn't do anything when clicking submitting.

[ ] Please look into this issue and apply a fix if you see an easy solution.

### 4. [FEATURE] Validate registry item price as number

We've noticed some users are submitting random values/letters to the registry item price field. This should only be a number.

[ ] Please update the application to validate this field as a number
[ ] We're not sure if decimals, commas, and currency symbols should be accepted. The client is leaning on your recommendation here again.

### 5. [BUG] Some users are reporting duplicate entries in their registries

We're not sure what's going on here. Can you take a look at why some users might be submitting duplicate information. This is not a huge issue, but one the some peopel have been complaining about.

[ ] Please look at the add registry item form and prevent people from accidently sending duplicate information

### 6. [FEATURE] Users should be able to delete items from their registry

We need one more feature before launching this version of the code out to users. Right now you cannot delete an item from your registry. This is a simple oversight and needs to be addressed.

[ ] Add a way for users to delete items from their registry
[ ] The client is not too picky on design, but doesn't have time to give direction. They are leaning on your design recommendation here.

### 7. [ROADMAP/PLANNING] What should we look to build in the future?

The client is asking for recommendation on future features or logic we should be looking to add. What would your recommendations be? What are we missing? What needs to be there in order to launch?

[ ] Please take any final minutes you have on the project to create a rough roadmap that you would recommend for the client. This can be anything from new features, design changes, security, testing, third party integrations, etc.

## Next Steps

Thank you again for taking the time to complete this project. Our final step is to get on a 30-60min call and review your changes together. This is an opportunity for us to discuss your development choices and even dive into a bit of pair programming if needed.

Please reach out to whomever gave you the assignment and let them know you're ready for the next step. Or feel free to email john@betablox.com directly.