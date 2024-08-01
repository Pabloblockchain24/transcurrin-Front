/*import styles*/
import "./Intranet.css"

/*import dependencies*/
import { useEffect } from "react";

/*import context*/
import { useAuth } from "../../context/AuthContext"

/*import components*/
import NavBarIntranet from "../../components/Intranet/NavbarIntranet/NavBarIntranet";
import SummaryTable from "../../components/Intranet/SummaryTable/SummaryTable";

/*import utils*/
import { formatFecha } from "../../utils/formatFechas"

function Intranet() {
    const { user } = useAuth()

    useEffect(() => {
        if (user && !user.verificado) {
            window.location.href = '/resetPassword';
        }
    }, [user]);

    return (
        <>
            <NavBarIntranet />
            <main className="homeIntranetContainer">
                <div className="homeIntranetText">
                    <h1 className='homeIntranetTitle'> RESUMEN OPERACIONAL {formatFecha(new Date())} </h1>
                    <p className="homeIntranetSubtitle"> Usuario: {user.name} </p>
                    <p className="homeIntranetSubtitle"> Compañia: {user.company} </p>
                </div>

                <SummaryTable />
            </main>
        </>
    )
}

export default Intranet
