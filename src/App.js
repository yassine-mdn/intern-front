import Container from "./layouts/container";
import Signup from "./pages/sign-up";
import Login from "./pages/login";
import Page404 from "./pages/404/Page404";
import {Route, Routes} from "react-router-dom";
import DynamicTable from "./components/UI/dynamic-table";
import EtudiantsForm from "./pages/forms/etudiants";
import ProfesseurForm from "./pages/forms/professeur";
import AdminForm from "./pages/forms/compte";
import Home from "./pages/home";
import Calendar from "./components/UI/calendar";
import {PermifyProvider} from "@permify/react-role";

function App() {

  return (
  <Routes>
          <Route path="/Role" element={<Container/>}>
              <Route path="Accounts">
                  <Route index element={<DynamicTable/>}/>
                  <Route path="etudiant" >
                      <Route index element={<DynamicTable/>}/>
                      <Route path=":id" element={<EtudiantsForm/>}/>
                      <Route path="add" element={<EtudiantsForm/>}/>
                  </Route>
                  <Route path="professeur" >
                      <Route index element={<DynamicTable/>}/>
                      <Route path=":id" element={<ProfesseurForm/>}/>
                      <Route path="add" element={<ProfesseurForm/>}/>
                  </Route>
                  <Route path="responsable" >
                      <Route index element={<DynamicTable/>}/>
                      <Route path=":id" element={<AdminForm/>}/>
                      <Route path="add" element={<AdminForm/>}/>
                  </Route>
                  <Route path="admin" >
                      <Route index element={<DynamicTable/>}/>
                      <Route path=":id" element={<AdminForm/>}/>
                      <Route path="add" element={<AdminForm/>}/>
                  </Route>
              </Route>
              <Route index element={<Home/>}/>
              <Route path="Home" element={<Home/>}/>
              <Route path="Calendar" element={<Calendar/>}/>
          </Route>
      <Route path={"/"} element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="*" element={<Page404/>}/>
  </Routes>
  );
}

export default App;
