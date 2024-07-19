import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

/* Import home pages */
import Home from "./pages/Home/Home";
import Nosotros from "./pages/homePages/Nosotros/Nosotros"
import Deposito from "./pages/homePages/Deposito/Deposito";
import Servicios from "./pages/homePages/Servicios/Servicios"
import Clientes from "./pages/homePages/Clientes/Clientes"
import Contacto from "./pages/homePages/Contacto/Contacto"
import Login from "./pages/homePages/Login/Login"
import ResetPassword from "./pages/homePages/ResetPassword/ResetPassword";

/* Import features */
import ScrollToTop from './components/ScrollToTop';

import ServiceFormPage from "./pages/ServiceFormPage";
import ProtectedRoute from "./ProtectedRoute"
import { IntranetProvider } from "./context/IntranetContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Intranet from "./pages/Intranet/Intranet";

import IntranetStock from "./pages/PagesIntranet/IntranetStock/IntranetStock";
import IntranetProgramacion from "./pages/PagesIntranet/IntranetProgramacion/IntranetProgramacion";
import IntranetStatus from "./pages/PagesIntranet/IntranetStatus/IntranetStatus";
import IntranetFacturacion from "./pages/PagesIntranet/IntranetFacturacion/IntranetFacturacion";
import IntranetStockPuerto from "./pages/PagesIntranet/IntranetStockPuerto/IntranetStockPuerto";
import IntranetVacios from "./pages/PagesIntranet/IntranetVacios/IntranetVacios";
import IntranetTransitoMaritimo from "./pages/PagesIntranet/IntranetTransitoMaritimo/IntranetTransitoMaritimo";

function App() {

  return (
    <AuthProvider>
      <IntranetProvider>
        <BrowserRouter>
        <ScrollToTop />
          <Navbar/>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Deposito" element={<Deposito />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />






            <Route element={<ProtectedRoute />}>
              <Route path="/intranet" element={<Intranet />} />
              <Route path="/intranet/stock" element={<IntranetStock />} />
              <Route path="/intranet/stockPuerto" element={<IntranetStockPuerto />} />
              <Route path="/intranet/programacion" element={<IntranetProgramacion />} />
              <Route path="/intranet/status" element={<IntranetStatus />} />
              <Route path="/intranet/vacios" element={<IntranetVacios />} />

              <Route path="/intranet/facturacion" element={<IntranetFacturacion />} />
              <Route path="/intranet/transitoMaritimo" element={<IntranetTransitoMaritimo />} />
              
              {/* <Route path="/intranet/:id" element={<ServiceFormPage />} /> */}
            </Route>

          
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </IntranetProvider>
    </AuthProvider>
  )
}

export default App


