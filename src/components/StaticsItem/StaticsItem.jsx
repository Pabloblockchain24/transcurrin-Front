/*import styles*/
import "./StaticItem.css";

/*import dependencies*/
import React from 'react';
import CountUp from 'react-countup';

function StaticItem({ title, description, end }) {
    return (
        <article className='counterContainer'>
            <CountUp start={0} end={end} duration={10} separator="," className='CounterItem' formattingFn={(value) => `+${value}`} />
            <h2 className='CounterTitle'>{title}</h2>
            <h3 className='CounterDescription'>{description}</h3>
        </article>
    )
}
export default StaticItem;
