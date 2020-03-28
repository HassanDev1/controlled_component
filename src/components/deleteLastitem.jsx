import React from 'react';

const DeleteLastItem = (props) => {
    return ( 
        <button onClick={props.onDelete} disabled={props.onDisabled} >
        Delete Last Item
      </button>
     );
}
 
export default DeleteLastItem;