import React from "react";
import UploadIcon from "../assets/uploadicon.png";

const ShareWorkForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-7 mt-10" onSubmit={submitForm}>
      <div className="mt-2.5 min-h-64 border-2 border-dashed font-normal text-gray-700 text-sm border-gray-300 rounded-lg flex flex-col gap-2 items-center justify-center ">
        <img src={UploadIcon} width={80} alt="upload img" />
        <p>Only upload media you own the rights to</p>
      </div>
      <label className="text-black-500 font-semibold">
        Title
        <input
          className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
          type="text"
          placeholder="Add a title"
          required
        />
      </label>
      <label className="text-black-500 font-semibold">
        Decription
        <textarea
          className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
          type="text"
          placeholder="Add a detailed decription"
          rows={3}
          required
        />
      </label>
      <label for="small" className="text-black-500 font-semibold">
        Category
        <select
          id="small"
          className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5  text-gray-700 shadow-sm"
        >
          <option selected>none</option>
          <option value="Anime">Anime</option>
          <option value="Sketches">Sketches</option>
          <option value="Anatomy">Anatomy</option>
          <option value="Realism">Realism</option>
          <option value="Comic art">Comic art</option>
          <option value="Tutorials">Tutorials</option>
        </select>
      </label>
      <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-2.5 text-white font-semibold text-sm">
        Submit
      </button>
    </form>
  );
};

export default ShareWorkForm;
