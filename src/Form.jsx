import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  //event handler
  let handleChange = (e) => {
    console.log(formData);

    //functional state update
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (e) => {
    //Prevent page reload and default form submission
    e.preventDefault();

    // Reset form fields to empty after submission
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        id="name"
        name="name"
      />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        id="email"
        name="email"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}