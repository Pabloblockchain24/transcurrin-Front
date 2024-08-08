/* import dependencies*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

/* import context*/
import { AuthProvider } from "./context/AuthContext";
import { IntranetProvider } from "./context/IntranetContext";

/* import features */
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from "./ProtectedRoute"

/*import components*/
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

/* import home pages */
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros"
import Deposito from "./pages/Deposito/Deposito";
import Servicios from "./pages/Servicios/Servicios"
import Clientes from "./pages/Clientes/Clientes"
import Contacto from "./pages/Contacto/Contacto"
import Login from "./pages/Login/Login"
import ResetPassword from "./pages/ResetPassword/ResetPassword";

/* import intranet pages */
import Intranet from "./pages/Intranet/Intranet";
import IntranetStockDepot from "./pages/PagesIntranet/IntranetStockDepot/IntranetStockDepot";
import IntranetProgramacion from "./pages/PagesIntranet/IntranetProgramacion/IntranetProgramacion";
import IntranetStatus from "./pages/PagesIntranet/IntranetStatus/IntranetStatus";
import IntranetFacturacion from "./pages/PagesIntranet/IntranetFacturacion/IntranetFacturacion";
import IntranetStockPuerto from "./pages/PagesIntranet/IntranetStockPuerto/IntranetStockPuerto";
import IntranetVacios from "./pages/PagesIntranet/IntranetVacios/IntranetVacios";
import IntranetTransitoMaritimo from "./pages/PagesIntranet/IntranetTransitoMaritimo/IntranetTransitoMaritimo";

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <IntranetProvider>
            <ScrollToTop />
            <Navbar />
            <hr />
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/deposito" element={<Deposito />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/resetPassword" element={<ResetPassword />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/intranet" element={<Intranet />} />
                <Route path="/intranet/stock" element={<IntranetStockDepot />} />
                <Route path="/intranet/stockPuerto" element={<IntranetStockPuerto />} />
                <Route path="/intranet/programacion" element={<IntranetProgramacion />} />
                <Route path="/intranet/status" element={<IntranetStatus />} />
                <Route path="/intranet/vacios" element={<IntranetVacios />} />
                <Route path="/intranet/facturacion" element={<IntranetFacturacion />} />
                <Route path="/intranet/transitoMaritimo" element={<IntranetTransitoMaritimo />} />
              </Route>

            </Routes>
            <Footer />
          </IntranetProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App


