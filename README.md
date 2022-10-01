# Form Exercise

## Overview

The goal of this exercise is to use _react-redux, react-final-form and material-ui_ to build a very, simple form and submit it. The Submitted Form card should show the values of the form when the form has been successfully submitted. The scaffolding is in place, now it's up to you to implement it.

## Getting Started

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Requirements

- Use functional components and hooks!
- There should only be two fields: Full Name & Email
- Full Name, is not required to submit the form
- Email, is required and must be not be empty and a valid email address (hint: use `composeValidators.ts` and find a email regex validation from StackOverflow or wherever)
- Use @mui/material/TextField for the fields
- Updating the fields should not affect what is displayed in the Submitted Form card, only a successful submission should update the Submitted Form card
- You can style and display the values displayed in the Submitted Form any way you want
- Extra points if you use immer in the reducer!

## Submission

Once complete, reply to the original email that you recieved from us with the link to your Github repo.
