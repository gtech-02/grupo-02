import React from 'react';
import line from '../assets/line-show-all.svg'

let Section = ({ children, props }) => {
    return (
        <section className='Section' style={{ padding: "0px 7.2222222% 0px 7.2222222%" }}>
            <div style={{ display: props.display, justifyContent:props.justfy}}>
                <h3>{props.title}</h3>
                <div>
                    <a href='/produtos' >Ver todos<img src={line} /></a>
                </div>
            </div>
            {children}
        </section>
    )
}

export default Section
