import React, {useReducer} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Form } from 'react-final-form';
import { composeValidators } from './composeValidators';
import {validateEmail} from './validate/validateEmail'
import {validateEmpty} from './validate/validateEmpty'
import produce from 'immer'

const ACTIONS ={
  HANDLE_CHANGE: 'handleChange',
  HANDLE_SUBMIT: 'handleSubmit'
}

//handles the dispatch action types
function reducer(draft: any, action: any){
  switch (action.type){
    case ACTIONS.HANDLE_CHANGE:
      draft[action.payload.name] = action.payload.value
      return
    case ACTIONS.HANDLE_SUBMIT:
      draft.submittedName = draft.fullName
      draft.submittedEmail = draft.email
      return
    default:
      return 
  }
}
//curriedReducer allows us to have less boilerplate code
const curriedReducer = produce(reducer)

function ExerciseComponent() {  
  const [state, dispatch] = useReducer(curriedReducer, {
    fullName: "",
    email: "",
    submittedName: "",
    submittedEmail: ""
  })
  
  const handleSubmit = () => {
    //if email field valid 
    if(composeValidators(validateEmpty, validateEmail)(state.email)){
      //update submitted form
      dispatch({type:ACTIONS.HANDLE_SUBMIT})
    }
  };

  //Update values as typed
  const updateInputChange = (event: any) =>{
    dispatch({type:ACTIONS.HANDLE_CHANGE, payload: event.target})
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Form
          onSubmit={handleSubmit}
          render={({ form, handleSubmit }) => {
            return (
              //Could remove noValidate and that would handle a lot
              //Would defeat purpose of excerise
              <form onSubmit={handleSubmit} noValidate>
                <Card>
                  <CardHeader title="Form" />
                  <CardContent>
                    <TextField 
                      name="fullName"
                      label="Full Name" 
                      type="text" 
                      placeholder="Full Name" 
                      value={state.fullName} 
                      onChange={updateInputChange}
                    >
                    </TextField>
                    <TextField 
                      name="email" 
                      label="Email" 
                      type="email" 
                      required={true} 
                      placeholder="Email" 
                      value={state.email}
                      onChange={updateInputChange}
                    >
                    </TextField>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained" type="submit">
                      Submit
                    </Button>
                  </CardActions>
                </Card>
              </form>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Submitted Form" />
          <CardContent>
            <Typography>
              <strong>Full Name: {state.submittedName}</strong>
            </Typography>
            <Typography>
              <strong>Email: {state.submittedEmail}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export const Exercise = ExerciseComponent;
