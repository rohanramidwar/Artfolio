import React from "react";

const ProjectDetails = () => {
  return (
    <div className="w-[882px] px-10  border-r border-gray-200 flex flex-col gap-7">
      <h1 className="text-2xl font-semibold">Thomas Shelby's Intensity</h1>
      <div className="flex items-center gap-2 font-semibold">
        <img
          src="https://i.pinimg.com/564x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg"
          className="rounded-full w-[45.33px] h-[45.33px]"
          alt="profile"
        />
        <p>Raj</p>
      </div>
      <p>
        I meticulously sketched Thomas Shelby from Peaky Blinders using a
        combination of graphite and charcoal. Starting with a light graphite
        outline, I built up depth with layers of charcoal, blending for a
        realistic texture. Detailed facial features were refined with graphite,
        and the background added subtle depth. The final touches included
        reviewing and adjusting for accuracy before discreetly signing the
        completed artwork.
      </p>
      <img
        src="https://i.pinimg.com/564x/a6/c3/c5/a6c3c51826a5a2a832e8ff882ae562e9.jpg"
        className=" w-full h-full object-cover rounded-2xl"
        alt="project"
      />
    </div>
  );
};

export default ProjectDetails;
