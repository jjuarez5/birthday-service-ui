import React, { useState } from "react";

function BirthdayInput() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const nameRef = React.useRef();
  const dateRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("name:", nameRef.current.value);
    console.log("date:", dateRef.current.value);
    document.getElementById("birthdayInput").reset();
  }

  return (
    <div className="h-screen w-screen p-4 m-4">
      <div className="flex justify-center">
        <form
          className="pt-6 pb-8 mb-4"
          id="birthdayInput"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="text-zinc-100 text-lg mb-2" for="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="contactName"
              type="text"
              ref={nameRef}
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="text-zinc-100 text-lg mb-2" for="birthday">
              Birthday:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="contactBday"
              type="date"
              ref={dateRef}
              placeholder="mm-dd-yyyy"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div className="rounded-md border-2 border-black w-1/3">
        <h1>Input your birthday here:</h1>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <br />
        <input type="date" value={date} onChange={handleDateChange} />
        <p>Name: {name}</p>
        <p>Date: {date}</p>
      </div> */}
    </div>
  );
}

export default BirthdayInput;
