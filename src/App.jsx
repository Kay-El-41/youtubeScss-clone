import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import"./_app.scss"
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import { useState } from "react";
import {AuthProvider} from "./components/AuthProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import WatchPage from "./pages/Watch/WatchPage";

export  function Layout() {
  const [sidebar, toggleSidebar] = useState(false)
  
  const handleToggleSidebar = () => toggleSidebar((value)=>!value)
  return (
     <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main ">
          <Outlet/>
        </Container>
      </div>
    </>
  )
}


export default function App() {
  
  
  return (
    <Provider store={store}>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
              {/* <Route path="/search" element={}/> */}
          <Route path="watch/:id" element={<WatchPage />} />
           </Route>
        <Route path="*" element={<LoginPage/>} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      </Provider>
  )
}
