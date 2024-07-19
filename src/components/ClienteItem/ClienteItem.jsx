/*import styles*/
import "./ClienteItem.css";

function ClienteItem({ empresa, descripcion, contacto, cargo }) {
    return (
        <article className="clientesArticle">
            <h2 className='clientesArticleEmpresa'> {empresa}</h2>
            <p className='clientesArticleDescription'> "{descripcion}."</p>
            <p className='clientesArticleContacto'> {contacto}  </p>
            <p className='clientesArticleCargo'> {cargo}</p>
        </article>
    );
}
export default ClienteItem