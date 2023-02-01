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
import AdminDash from "./apps/admin/AdminDash";
import EtudiantAdmin from "./apps/admin/EtudiantAdmin";
import ProfAdmin from "./apps/admin/ProfAdmin";
import RdsAdmin from "./apps/admin/RdsAdmin";
import EtablissementList from "./components/UI/EtablissementList";
import EtablissementForm from "./pages/forms/etablissement";

function App() {

  return (
  <Routes>
          <Route path="/Admin" element={<AdminDash/>}>
              <Route path="Accounts">
                  <Route index element={<EtudiantAdmin/>}/>
                  <Route path="etudiant" >
                      <Route index element={<EtudiantAdmin/>}/>
                      <Route path=":id" element={<EtudiantsForm/>}/>
                      <Route path="add" element={<EtudiantsForm/>}/>
                  </Route>
                  <Route path="professeur" >
                      <Route index element={<ProfAdmin/>}/>
                      <Route path=":id" element={<ProfesseurForm/>}/>
                      <Route path="add" element={<ProfesseurForm/>}/>
                  </Route>
                  <Route path="responsable" >
                      <Route index element={<RdsAdmin/>}/>
                      <Route path=":id" element={<AdminForm/>}/>
                      <Route path="add" element={<AdminForm/>}/>
                  </Route>
                  <Route path="admin" >
                      <Route index element={<DynamicTable/>}/>
                      <Route path=":id" element={<AdminForm/>}/>
                      <Route path="add" element={<AdminForm/>}/>
                  </Route>
              </Route>
              <Route index element={<EtablissementList/>}/>
              <Route path="Home" element={<EtablissementList/>}/>
              <Route path="Etablissement/:idEta" element={<EtablissementForm/>}/>
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
