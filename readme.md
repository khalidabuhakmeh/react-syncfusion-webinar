# Readme

- [When to use them](https://www.syncfusion.com/blogs/post/react-usestate-vs-context-api.aspx)

Good example of using `useState` and `context` together.

```javascript
import React, { createContext, useState } from "react";
const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainPage />
    </ThemeContext.Provider>
  );
}
function MainPage() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
function Header() {
  return (
    <header>
      <nav>
        <ThemeToggler />
      </nav>
    </header>
  );
}
function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle theme
    </button>
  );
}
```
