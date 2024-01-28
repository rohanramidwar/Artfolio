//font
import "@fontsource/karla";
import "@fontsource/karla/600.css";
//user photo
import UserPhoto from "./assets/user_img.png";
//lucide icons
import { Search } from "lucide-react";

function App() {
  return (
    <div>
      <nav className="flex justify-between p-10">
        <div className="flex gap-6 items-center">
          <h2 className="font-semibold text-2xl ">LOGO</h2>
          <ul className="flex gap-6">
            <li>Find artist</li>
            <li>Inspiration</li>
            <li>Learn art</li>
            <li>Workshops</li>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              className="pl-[48px] py-[16px] pr-[24px] outline-none rounded-full bg-gray-100"
              placeholder="Search..."
            />
            <label className="absolute left-[24px] top-[16px]">
              <Search size={16} />
            </label>
          </div>
          <div>
            <img
              className="rounded-full w-[45.33px]"
              src={UserPhoto}
              alt="Avatar"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
