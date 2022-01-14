import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./Components/AboutUs.js/AboutUs";
import Home from "./Components/Home/Home";
import DrawerForMobileMenu from "./Components/Menu/DrawerForMobileMenu";
import Menu from "./Components/Menu/Menu";
import MenuForMobileScreen from "./Components/Menu/MenuForMobileScreen";
function App() {
  const forBelow700 = useMediaQuery("(max-width:730px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  return (
    <div>
      <BrowserRouter>
      {forBelow700 ? (
        <MenuForMobileScreen openDrawerHandler={openDrawer} />
      ) : (
        <Menu />
      )}
      <DrawerForMobileMenu open={isDrawerOpen} toggleDrawerHandler={toggleDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
