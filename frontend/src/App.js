//font
import "@fontsource/exo-2";
import "@fontsource/exo-2/600.css";
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import ProfileMenu from "./components/ProfileMenu";

function App() {
  return (
    <div>
      <nav className="flexBetween px-14 py-[26px] text-gray-700">
        <div className="font-semibold  cursor-pointer">
          <h1 className="text-4xl hover:text-gray-600 underline decoration-purple-600">
            Artfolio
          </h1>
        </div>

        <ProfileMenu />
      </nav>
    </div>
  );
}

export default App;
