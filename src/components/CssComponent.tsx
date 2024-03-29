import React from "react";
import styled from "styled-components";

export const HeadTitle = styled.h1`
  text-align: center;
  font-size:40px;
   @media (max-width: 600px) {
    font-size:20px;
     margin-top:-20px;
  }
`;

export const CalendarContainer = styled.div`
  
  width:90vw;
  font-size:20px;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
  
   @media (max-width: 720px) {
    
    font-size:15px;
     margin-top:-20px;
  }
   @media (max-width: 590px) {
    
    font-size:70%;
     
  }
    @media (max-width: 440px) {
    
    font-size:55%;
     
  }
   @media (max-width: 350px) {
    
    font-size:45%;
     
  }
   @media (max-width: 290px) {
    
    font-size:35%;
     
  }
   @media (max-width: 230px) {
    
    font-size:25%;
     
  }
`;

export const ItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DatePickerHeader = styled.h2`
  text-align: center;
`;

export const TitleInput = styled.input`

  height: 4vh;
`;

export const DescriptionTextarea = styled.textarea`
  
  height: 8vh;
`;

export const AddButton = styled.button`
  width: 150px;
  height: 4vh;
  margin-top: 2vh;
  border: none;
  background-color: #58f0fb;
  color: white;
  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalMain = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0.26);
  border-radius: 10px;
  
  height: 150px;
  z-index: 100;
  overflow: hidden;
  background-color: white;
  top:45%;
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 300px;
`;

export const ModalMainContents = styled.div`
  
  margin-right: 1vw;
  height: 3vh;
`;

export const ModalMainTitle = styled.div`
  text-align: center;
  margin-top: 3vh;
  font-size: 17px;
`;

export const DeleteButton = styled.button`
  
  height: 3vh;
  align-items: center;
  margin-top: 3vh;
  border: none;
  color: white;
  background-color: #58f0fb;
  cursor: pointer;
`;

export const UserAuthContainer = styled.div`
  width: 450px;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #4bcb89;
  border-radius: 15px;
  margin-top: 6vh;
  border: 0.5px solid white;
  @media (max-width: 600px) {
    width:300px;
  }
`;

export const UserAuthContainerOuline = styled.div`
  display: flex;
  justify-content: center;
  
`;


export const UserIDInput = styled.input`
  width: 250px;
  height: 3vh;
  border-radius: 25px;
  border: 0.5px solid white;
   @media (max-width: 600px) {
    width:200px;
  }
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  margin-top: 2vh;
`;

export const LoginButton = styled.button`
  width: 250px;
  height: 3vh;
  border: 0.5px solid white;
  border-radius: 25px;
  background-color: white;
  @media (max-width: 600px) {
    width:210px;
  }
`;

export const Icons = styled.div`
  margin-right: 2vw;
`;

export const UserAuthHeader = styled.h2`
  margin-top: -4vh;
`;

export const UserAuthErrorDiv = styled.div`
  margin-left: 2vw;
  margin-top: 1vh;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  padding:50px;

`;

export const NaviDiv = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  font-size: 20px;
  color: black;
  cursor: pointer;
    @media (max-width: 720px) {
    font-size: 17px;
     margin-left: 17px;
  margin-right: 17px;
  }
  @media (max-width: 590px) {
    
    font-size:70%;
     
  }
    @media (max-width: 440px) {
    
    font-size:55%;
     
  }
   @media (max-width: 350px) {
    
    font-size:45%;
     
  }
  @media (max-width: 290px) {
    
    font-size:35%;
     margin-left: 10px;
  margin-right: 17px;
  }
   @media (max-width: 230px) {
    
    font-size:25%;
     
  }
`;

export const MultipleColor = styled.div`
  background-color: ${(props) => props.theme.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const GropTwoDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
export const EventDescriptions = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  z-index: 100;
  left: ${(props) => props.theme.x + 10}px;
  top: ${(props) => props.theme.y + 10}px;
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

export const TimeScheduleContainer = styled.div`
  
  
`;


export const DateScheduleContainer = styled.div`
  
 
`;