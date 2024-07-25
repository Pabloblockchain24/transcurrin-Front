/*import styles*/
import "./CommitmentItem.css";
function CommitmentItem({title, description, img }) {

    return (
        <article className='CommitmentContainer'>
            <img src={img} className='CommitmentImg' />
            <h2 className='CommitmentTitle'>{title}</h2>
            <h3 className='CommitmentDescription'> {description}</h3>
        </article>
    )
}

export default CommitmentItem;
