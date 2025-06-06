
// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import  Layout  from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";
import { Signup } from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Quiz from "./pages/Quiz";
import PersonalizedContentBook from "./pages/PersonalizedContentBook";
import MyBookPreferences from "./pages/MyBookPreferences";
import MyMoviePreferences from "./pages/MyMoviePreferences";
import MyMusicPreferences from "./pages/MyMusicPreferences";
import PersonalizedContentMovie from "./pages/PersonalizedContentMovie";
import PersonalizedContentMusic from "./pages/PersonalizedContentMusic";
import Settings from "./pages/Settings";
import { History} from "./pages/History";
import { Favorites} from "./pages/Favorites";
import { Movies } from "./pages/Movies";
import { Music } from "./pages/Music";



export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />  {/* Dynamic route for single items */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/profile" element={<PrivateRoute><Private /></PrivateRoute>} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/preferences-book" element={<MyBookPreferences />} />
      <Route path="/preferences-music" element={<MyMusicPreferences />} />
      <Route path="/preferences-movie" element={<MyMoviePreferences />} />
       <Route path="/personalized-book" element={<PersonalizedContentBook />} />
      <Route path="/personalized-movie" element={<PersonalizedContentMovie/>} />
      <Route path="/personalized-music" element={<PersonalizedContentMusic/>} />

      <Route path="/settings" element={<Settings />} />


    </Route>
  )
);