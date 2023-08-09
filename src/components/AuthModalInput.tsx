import React from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const AuthModalInput = ({ inputs, handleChangeInput, isSignIn }: Props) => {
  return (
    <>
      {isSignIn && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] outline-none"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] outline-none"
            value={inputs.lastName}
            placeholder="Last Name"
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full outline-none"
          value={inputs.email}
          placeholder="Email"
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%] outline-none"
          value={inputs.phone}
          placeholder="Phone"
          onChange={handleChangeInput}
          name="phone"
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%] outline-none"
          value={inputs.city}
          placeholder="City"
          onChange={handleChangeInput}
          name="city"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full outline-none"
          value={inputs.password}
          placeholder="Password"
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </>
  );
};

export default AuthModalInput;
