import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
            {props.children}
        </div>
        // this styles the children of Scroll so we can scroll down without losing sight of the searchbar. overflowY property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges
    )
};

export default Scroll;