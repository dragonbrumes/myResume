import React from "react"

import Header from "~/containers/Header/Header"
import Main from "~/containers/Main/Main"
import Experiences from "~/containers/Experiences/Experiences"
import Educations from "./Educations/Educations"
import Projects from "./Projects/Projects"
import Login from "./Login/Login"
import Footer from "~/containers/Footer/Footer"
//auth0
import Callback from "../auth/Callback"
import Home from "./Home/Home"
//admin
import AddExperience from "~/containers/Admin/AddExperience"
import DeleteExperience from "~/containers/Admin/DeleteExperience"
import DelExpProccess from "~/containers/Admin/DelExpProccess"

export {
  Header,
  Main,
  Experiences,
  Educations,
  Projects,
  Footer,
  AddExperience,
  DeleteExperience,
  DelExpProccess,
  Login,
  Callback,
  Home
}
