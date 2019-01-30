import React from 'react';
function Teacher(props) {
    return(
        <li className="Teacher">
            {props.name}<a href={`https://github.com/${props.github}`}>{props.github}</a>
        </li>
    )
}
export default Teacher;