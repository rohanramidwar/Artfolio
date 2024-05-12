import React, { useState } from "react";
import { Button } from "./ui/button";
import { Heart, SendHorizontal } from "lucide-react";

const ClickedPost = () => {
  const [fullSc, setFullSc] = useState(false);

  return (
    <div className="flex overflow-auto">
      {/* left */}
      <div
        className={`flex flex-col gap-7 px-10 text-gray-800 transition-all ${
          fullSc ? "w-full" : "w-2/3"
        }`}
      >
        <h1 className="mt-5 text-2xl font-semibold">Aeroplane painting</h1>

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
        <p className="px-5 text-xl">
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

      <div className="px-10">
        <h2 className="text-xl">Feedback</h2>

        {/* input */}
        <div>
          <input className="rounded-xl border" />
          <button>
            <SendHorizontal />
          </button>
        </div>

        {/* feedbacks  */}
        <div className="flex flex-col gap-7">
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.pinimg.com/280x280_RS/dd/73/58/dd73584f718d8fa359c5b8972baa7434.jpg"
              alt="artist"
            />
            <div>
              <p className="font-semibold">Emma</p>
              <p>Good!</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.pinimg.com/280x280_RS/dd/73/58/dd73584f718d8fa359c5b8972baa7434.jpg"
              alt="artist"
            />
            <div>
              <p className="font-semibold">Emma</p>
              <p>Good!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickedPost;
