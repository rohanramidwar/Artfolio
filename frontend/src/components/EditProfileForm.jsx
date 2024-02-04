import React from "react";

const EditProfileForm = () => {
  const saveChanges = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-7 mt-10" onSubmit={saveChanges}>
      <label className="text-black-500 font-semibold">
        Name
        <input
          className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
          type="text"
          placeholder="Name"
          required
        />
      </label>

      <label className="text-black-500 font-semibold">
        About
        <textarea
          className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
          type="text"
          placeholder="Tell your story"
          rows={3}
          required
        />
      </label>

      <label className="text-black-500 font-semibold">
        Website
        <input
          className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
          type="url"
          placeholder="Add a link to drive traffic to your site"
          required
        />
      </label>

      <button className="w-full bg-gradient-to-r  from-purple-500 to-purple-600 rounded-lg p-2.5 text-white font-semibold text-sm">
        Save changes
      </button>
    </form>
  );
};

export default EditProfileForm;
