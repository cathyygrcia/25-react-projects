import useLocalStorage from "./UseLocalStorage";

export default function DarkLightMode() {
  const [theme, setTheme] = useLocalStorage({
    key: "theme",
    defaultValue: "dark",
  });

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div
      className={`h-screen flex justify-center items-center ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div>
        <p>Welcome!</p>
        <button
          className="px-4 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-white rounded-md"
          onClick={handleToggleTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}
