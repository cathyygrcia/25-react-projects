import useLocalStorage from "./UseLocalStorage";

export default function DarkLightMode() {
  const [theme, setTheme] = useLocalStorage({
    key: "theme",
    defaultValue: "dark",
  });

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <p>Welcome!</p>
        <button className={theme} onClick={handleToggleTheme}>
          Change Theme
        </button>
      </div>
    </div>
  );
}
