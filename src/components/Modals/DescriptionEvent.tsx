import React from 'react'
import styled from "styled-components";


const EventDescriptions = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  z-index: 100;
  left: ${(props) => props.theme.x+10}px;
  top:${(props)=>props.theme.y +10}px;
  background-color:black;
  color:white;
  border-radius:10px;
  padding:10px;
`;
interface ChildPropsType {
  x: number | undefined;
  y: number | undefined;
  description:string | undefined;
}

function DescriptionEvent({ x, y, description }: ChildPropsType) {
  return (
    <div>
      <>
        
        <EventDescriptions theme={{ x: x, y: y }}>
          {description}
        </EventDescriptions>
      </>
    </div>
  );
}

export default DescriptionEvent