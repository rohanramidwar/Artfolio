import React from "react";
import { SendHorizontal } from "lucide-react";
import SingleComment from "./SingleComment";

const UserFeedbackSection = () => {
  return (
    <div className="p-6 md:border-l md:border-t-0 border-t border-[#43444b] ">
      <div className="flex flex-col w-[300px]">
        <h2 className="font-semibold text-xl mb-4">Feedback</h2>

        <label className="relative flex items-center mb-6">
          <button className="absolute right-2">
            <SendHorizontal width={20} />
          </button>
          <textarea
            className="bg-[#1e1f22] p-2 w-full outline-none rounded"
            placeholder="add your thoughts"
          />
        </label>

        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  );
};

export default UserFeedbackSection;
