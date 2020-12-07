[![Actions Status](https://github.com/naddiebell/MovieTheater-frontend/workflows/Movie_Theater_frontend/badge.svg)](https://github.com/naddiebell/MovieTheater-frontend/actions)

# Stockholm Retro Bio - frontend
We are a Movie Theater in central Stockholm that plays American Classic Films.  View what we are currently playing in theaters on our home page in at https://reverent-allen-568b2b.netlify.app/


### Tech

we are useing a number of open source tools:

- [React] - A JavaScript library for building user interfaces
- [Axios] - Promise based HTTP client for the browser and node.js
- [i18n] - Supportsq translation
### Installation

Install all dependencies and start the project.

```sh
$ cd frontend
$ npm install
$ npm start
```

### Setup

Eslint must be installed globally: `npm install -g eslint`

env variables are only available in node environment and not in the browser and we can access to them via `process.env.[VARIABLE_NAME]`

A `.env` file is created at the root directory of the application. Just add the variables to it.

```
REACT_APP_BASE_URL="http://localhost:5709"
```

Since we're using create-react-app, It does some tricks for you and simulates the same behavior inside the browser, only if you put the REACT*APP* prefix before your env variables.

Note:

> You must create custom environment variables beginning with REACT*APP*. Any other variables except NODE_ENV will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

# Stripe
You will need to set up a Stripe test account to handle payments from users.
Set your stripe public environment variable in your env as: REACT_APP_STRIPE_PUBLISHABLE: your key here
# Set up Send Email to receive Ticket

1. Set up an EmailJS account https://www.emailjs.com/
2. Navigate to Docs and follow the Getting Started Guide to create an email service and an email template
3. In your email template set up the following:

   Subject: 
   Message body: 
   
   To Email: {{to_email}}
   Reply To: {{reply_to}}
4. Set environment variables
    REACT_APP_EMAILJS_USERID="YOUR USER ID"

    REACT_APP_TEMPLATE_ID="YOUR TEMPLATE ID

    REACT_APP_SERVICE_ID="YOUR SERVICE ID"

    REACT_APP_EMAIL_API="https://api.emailjs.com/api/v1.0/email/send"

    REACT_APP_DOMAIN="http://localhost:3000"