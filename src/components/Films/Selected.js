import React from 'react';

const Selected = ({currentIdx, selectedIdx}) => {
  if(currentIdx === selectedIdx){
    return (<strong>selected</strong>)
  } else {
    return (
        null
    )
  }
}
export default Selected;