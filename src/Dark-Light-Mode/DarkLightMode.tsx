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
    <div className="h-screen">
      <div className="container">
        <p>Welcome!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
