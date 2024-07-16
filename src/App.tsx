import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutMePage,
  ArticlesPage,
  ContactPage,
  Error404Page,
  HomePage,
  ProjectsPage,
} from "./pages";
import React from "react";
import { useAppSelector } from "./hooks/redux-hooks/useAppSelector";
import { Root } from "react-dom/client";
import { RootState } from "./redux/store";
import { useAppDispatch } from "./hooks/redux-hooks/useAppDispatch";
import { ThemeModeType, setThemeMode } from "./redux/slices/ThemeModeSlice";
import { useTranslation } from "react-i18next";

function App() {
  const dispatch = useAppDispatch();
  let isOnDarkMode = useAppSelector(
    (state: RootState) => state.themeModeSlice.isOnDarkMode
  );

  React.useEffect(() => {
    let themeMode = localStorage.getItem("theme");
    if (themeMode) {
      try {
        const parsedThemeMode: ThemeModeType = JSON.parse(
          themeMode
        ) as unknown as ThemeModeType;

        dispatch(setThemeMode({ isOnDarkMode: parsedThemeMode.isOnDarkMode }));
      } catch {
        dispatch(setThemeMode({ isOnDarkMode: false }));
      }
    } else {
      dispatch(setThemeMode({ isOnDarkMode: false }));
    }
  }, []);

  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    //we want the html element of the DOM.
    const html = window.document.documentElement;

    /*we want the value of the previous state which is the opposite of the current state.
      And we remove it from the classList of the html element so that tailwind css will notice that the mode changed 
    */
    const prevTheme = isOnDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    /*we want the value of the next state which is the value of the current state.
      And we add it to the classList of the html element so that tailwind css will notice that the mode changed 
    */
    const nextTheme = isOnDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);

    localStorage.setItem(
      "theme",
      JSON.stringify({ isOnDarkMode: isOnDarkMode })
    );
  }, [isOnDarkMode]);

  return (
    <div
      className="h-screen w-full font-josefin flex flex-col items-center justify-center sm:text-4xl lg:text-base text-light-textColor-main"
      id="app"
    >
      <div className="px-20">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
        dolor. Deserunt ex voluptates quo totam laudantium itaque blanditiis
        accusantium! Autem repellat iusto accusantium veniam, earum amet
        repudiandae quisquam at iure.
      </div>
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </div>
  );
}

export default App;
