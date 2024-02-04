import React from "react";

const AddComment = () => {
  return (
    <div className="flex gap-2">
      <div>
        <img
          src="https://i.pinimg.com/564x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg"
          className="rounded-full w-[32px] h-[32px]"
          alt="profile"
        />
      </div>

      <form className="w-[86%]" onSubmit={(e) => e.preventDefault()}>
        <textarea
          className="p-2.5 bg-gray-200 border focus:border-gray-700 outline-none rounded  shadow-sm w-full"
          placeholder="Write a comment"
        />
        <div className="flexEnd">
          <button className="font-semibold text-sm h-9 px-4 shadow bg-purple-500 hover:bg-purple-600 text-white rounded-xl">
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
