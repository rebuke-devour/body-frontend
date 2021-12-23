## Celestial Bodies

# Project Summary
- A "to-do list" style list of celestial bodies and  an interesting fact for each


# User Story
- I can create a new Celestial Body and see that it loads on the page. 
- I can see a list of all my Celestial Bodies when I login.
- click on one of my Celestial Bodies and have it take me to the linked website.
- delete a Celestial Body. 
- Able to update a Celestial Body. 

## User Persona(s)
 This approach follows the "Four Perspectives" method by Lene Nielsen outlined in interaction-design.org.

 This is designed toward the the "Goal-Oriented" Persona, and is defined as follows: "...by its personal, practical, and company-oriented goals as well as by the relationship with the product to be designed, the emotions of the persona when using the product, and the goals of the persona in using the product (hence Goal-Directed)." 

Thus, the desired outcome for this application is to provide the user a way to list their vacation plans, and will provide simple intiutive UI with the functions and features outlined below...

### Scope of Functionalities
- Basic CRUD Functionality; User should be able to Create, Read, Update and Delete their stored information.


## Acceptance Criteria
To meet Minimum Viable Product, this application will provide: 
- Detailed README
- Postgres DB
- Backend API created with language/ framwork of choice
- Backend & Live on Heroku
- Frontend built with language/framwork of choice
- Minimum of one model with full CRUD functionality to its data model
- Minimum of 5 components in Frontend App
- Follow RESTful conventions 
- Responsive Styling
- At least one (Carosel, Modal, Sandwich, Sandwich Menu)


## List of technologies
Backend: Python, Masonite
Frontend: ReactJS, Node.JS, Tailwind CSS

Dependencies and Version outlined below:

attrs==21.2.0
backpack==0.1
bcrypt==3.1.7
certifi==2021.10.8
cffi==1.15.0
charset-normalizer==2.0.8
cleo==0.8.1
clikit==0.6.2
crashtest==0.3.1
cryptography==36.0.0
exceptionite==1.0.1
Faker==4.18.0
gunicorn==20.1.0
hfilesize==0.1.0
hupper==1.9.1
idna==3.3
inflection==0.3.1
iniconfig==1.1.1
Jinja2==2.11.3
MarkupSafe==2.0.1
masonite==3.0.12
masonite-dot==0.0.5
masonite-logging==1.0.1
masonite-orm==1.0.60
masonite-validation==3.0.14
packaging==21.3
passlib==1.7.4
pastel==0.2.1
pendulum==2.1.2
pluggy==1.0.0
psutil==5.6.7
psycopg==3.0.5
psycopg2==2.9.2
py==1.11.0
pycparser==2.21
pylev==1.4.0
pyparsing==3.0.6
pytest==6.2.5
python-dateutil==2.8.2
python-dotenv==0.10.5
pytzdata==2020.1
requests==2.26.0
requests-file==1.5.1
simplejson==3.17.6
six==1.16.0
tabulate==0.8.9
termcolor==1.1.0
text-unidecode==1.3
tldextract==2.2.3
toml==0.10.2
urllib3==1.26.7
whitenoise==4.1.4


## Models

body model:

name: String
date_discovered: String
details: String

# Challenges: 
Had various issues with masonite, which was a reminder to install things in the proper scope.

Encountered an issue showing the added celestial body when created, this was fixed by going through the props and variables and editing them for consistency.

Lastly, Tailwind CSS was a bit confusing as to where to make the proper edits to customise buttons and styling.



## Route Table

| url | method | action |
|-----|--------|--------|
|/ | GET | get all Celestial Bodied (index)|
|/body/:id | GET | get individual Celestial Body(show)| 
|/body/:id/edit | GET | Show (edit) form |
|/body/new | GET | Show (new) Celestial Body input form|
|/body | POST | Input Celestial Body, redirect home|
|/body/:id | PUT | Update Celestial Body, redirect home |
|/body/:id | DELETE |Delete Celestial Body,redirect home|