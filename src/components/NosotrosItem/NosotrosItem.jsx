/*import styles*/
import "./NosotrosItem.css"

function NosotrosItem({ title, description, img }) {
    return (
        <article className="nosotrosArticle">
            <div className="nosotrosItem">
                <h2 class="nosotrosItemTitle"> {title}</h2>
                <p className="nosotrosItemParagraph">{description}</p>
            </div>
            <img src={img} className='nosotrosItemImg' />
        </article>
    )
}

export default NosotrosItem 