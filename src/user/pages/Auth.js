import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MIN,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/Util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmithandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    console.log(event);
  };

  return (
    <form className="place-form" onSubmit={placeSubmithandler}>
      <Input
        id="email"
        element="input"
        type="text"
        label="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="text"
        label="Passwrod"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid password (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        AUTHENTICATE
      </Button>
    </form>
  );
};

export default Auth;
