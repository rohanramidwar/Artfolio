import React, { useState } from "react";
import { Button } from "./ui/button";
import { Bookmark, Heart, Save, SendHorizonal, X } from "lucide-react";

const ClickedPost = () => {
  const [fullSc, setFullSc] = useState(false);

  return (
    <div className="flex overflow-auto justify-between text-gray-800 ">
      {/* left */}
      <div
        className={`flex flex-col gap-7 px-10 transition-all ${
          fullSc ? "w-full" : "w-2/3"
        }`}
      >
        <h1 className="mt-10 text-2xl font-semibold">Aeroplane painting</h1>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.pinimg.com/280x280_RS/dd/73/58/dd73584f718d8fa359c5b8972baa7434.jpg"
              alt="artist"
            />
            <p>Emma</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="border-2 rounded-full h-10 w-10 flex items-center justify-center">
              <Heart size={16} />
            </button>
            <button className="border-2 rounded-full h-10 w-10 flex items-center justify-center">
              <Bookmark size={16} />
            </button>
            <Button
              onClick={() => setFullSc(!fullSc)}
              className="rounded-full font-semibold"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <img
          className="rounded-lg w-full"
          src="https://i.pinimg.com/564x/25/0c/0b/250c0b956e33c96c151d7535b03061a8.jpg"
          alt="artwork"
        />
        <p className="pb-14 px-5 text-xl">
          Robert Breedlove is a freedom maximalist, ex-hedge fund manager, a
          philosopher and influencer in the Bitcoin space. To him, Bitcoin is
          fundamentally a humanitarian movement exposing the greatest con in
          human history: central banking. As Robert was becoming recognized as
          one of the most influential Bitcoin thinkers of our time, he was
          looking to level up his personal brand accordingly. He didn’t have a
          personal website and wanted to create one that not only presented him
          to the world, but also showcased his personal philosophy, top
          podcasts, reading, and writing.
        </p>
      </div>

      {/* right */}

      <div
        className={`fixed ${
          fullSc ? "hidden" : "block"
        } border-l min-h-full end-0 flex flex-col gap-7 px-10 w-1/3`}
      >
        <button
          onClick={() => setFullSc(!fullSc)}
          className="absolute bg-white top-10 -left-4 w-8 h-8 rounded-full border-2 flex items-center justify-center"
        >
          <X size={16} />
        </button>

        {/* feedback  */}
        <div className="flex flex-col gap-7 justify-center">
          <div className="mt-9 flex items-center gap-3">
            <button className="border-2 rounded-full h-10 w-10 flex items-center justify-center">
              <Heart size={16} />
            </button>
            <button className="border-2 rounded-full h-10 w-10 flex items-center justify-center">
              <Bookmark size={16} />
            </button>
          </div>

          {/* input  */}
          <div>
            <h2 className="mb-3 text-xl font-medium">Feedback</h2>
            <div className="relative w-full">
              <textarea className="w-full p-3 border outline-none rounded-xl" />
              <button className="bg-purple-500 hover:bg-purple-600 text-slate-100 p-2 rounded-full absolute right-2 bottom-4 text-xs font-semibold">
                Comment
              </button>
            </div>
          </div>

          {/* feedbacks  */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pinimg.com/280x280_RS/dd/73/58/dd73584f718d8fa359c5b8972baa7434.jpg"
                alt="artist"
              />
              <div>
                <p className="font-medium">Emma</p>
                <p>GOOD!</p>
              </div>
            </div>

            <div className="flex gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pinimg.com/280x280_RS/dd/73/58/dd73584f718d8fa359c5b8972baa7434.jpg"
                alt="artist"
              />
              <div>
                <p className="font-medium">Emma</p>
                <p>GOOD!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickedPost;
