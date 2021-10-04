/* eslint-disable no-unused-vars */
import { Button } from "components/button";
import { TextField } from "components/text-field";
import * as React from "react";

const registerUser = (name,email, password,avatar) =>
  fetch("https://ecomm-service.herokuapp.com/register", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      avatar

    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const RegisterForm = ({ onSuccess }) => {
  const [name,setName] = React.useState("")
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [avatar, setAvatar] = React.useState('');
  
  const [status, setStatus] = React.useState("idle");

  return (
    <div className="max-w-md mx-auto m-6 shadow">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log(status)
          setStatus("loading");
          console.log(status)
          registerUser(name,email, password,avatar)
            .then((res) => onSuccess(res.access_token))
            .catch(() => setStatus("error"));
          console.log(status)
        }}
        className="p-6"
      >
        {/* {status === "error" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Fail to login.
          </div>
        )} */}
        
        {status ==="loading" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Register Success Please login
          </div>
        )}

        <div className="text-3xl mt-4 mb-8 font-extrabold text-center">
          Register
        </div>
        <div className="space-y-6">
        <TextField
            label="Name"
            value={name}
            onChangeValue={setName}
            name="name"
            id="name"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Email"
            value={email}
            onChangeValue={setEmail}
            name="email"
            id="email"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Password"
            value={password}
            onChangeValue={setPassword}
            name="password"
            id="password"
            type="password"
            required
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={status === "loading"}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
