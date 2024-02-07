import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";

import Presentation from "../pages/presentation";
import Practice from "../pages/practice";
import Videos from "../pages/videos";
import Tutorial from "../pages/tutorial";
import TaskPage from "../pages/task";
import Lectures from "../pages/lectures";
import Brat from "../pages/brat";

import "./const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  BRATS_PAGE,
  HOME_PAGE,
  LECTURES_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TASK_PAGE,
  TUTORIAL_PAGE,
  VIDEOS_PAGE,
  lecturesArr,
  practiceArr,
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
        <Route path={TASK_PAGE} element={<TaskPage />} />
        <Route path={LECTURES_PAGE}>
          <Route path="" element={<Lectures />} />
          {lecturesArr.map((item) => (
            <Route key={item.id} path={item.path} element={<item.Element />} />
          ))}
        </Route>
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          {presentationsArr.map((item) => (
            <Route key={item.id} path={item.path} element={<item.Element />} />
          ))}
        </Route>
        <Route path={PRACTICE_PAGE}>
          <Route path="" element={<Practice />} />
          {practiceArr.map((item) => (
            <Route key={item.id} path={item.path} element={<item.Element />} />
          ))}
        </Route>
        <Route path={BRATS_PAGE} element={<Brat />} />
      </Routes>
    </div>
  );
}

export default router;
