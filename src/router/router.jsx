import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";

import Presentation from "../pages/presentation";
import Practice from "../pages/practice";
import Videos from "../pages/videos";
import Tutorial from "../pages/tutorial";
import TestAPage from "../pages/tests";

import "./const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
  VIDEOS_PAGE,
  presentationsArr,
} from "./const";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={TUTORIAL_PAGE} element={<Tutorial />} />
        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={VIDEOS_PAGE} element={<Videos />} />
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          {presentationsArr.map((item) => {
            return (
              <Route key={item.id} path={item.path} element={item.Element} />
            );
          })}
        </Route>

        <Route path={PRACTICE_PAGE} element={<Practice />} />
        <Route path={TEST_PAGE} element={<TestAPage />} />
      </Routes>
    </div>
  );
}

export default router;
