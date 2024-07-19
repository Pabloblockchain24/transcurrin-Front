/*import styles*/
import "./DepositoItem.css"

function DepositoItem({img, title, description}) {
    return (
        <article className="depositoArticle">
                <img src={img} alt={title} className="depositoImg"/>
                <h2 className='depositoArticleTitle'>{title}</h2>
                <p className='depositoArticleDescription'> {description} </p>
        </article>
    )
}

export default DepositoItem;