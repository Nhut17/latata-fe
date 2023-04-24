import React from "react";
import styled from "styled-components";
export const Tabs = styled.div`
    overflow: hidden;
    margin-bottom: 15px;
    text-align: center;
    margin-top: 1rem;

`;

export const Tab = styled.button`
  
    display : inline-block;
    padding: 7px 15px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-right: 5px;
    font-size: 1em;
    border: ${props => (props.active ? "1px solid #11698E" : "1px solid #e4e4e4")};
    background-color: ${props => (props.active ? "#D8E3E7" : "white")};
    transition: all 0.3s ;
        
    :hover {
        border: 1px solid gray;
    }
`;
export const Content = styled.div`
    margin-left: 1rem;
    ${props => (props.active ? "" : "display:none")}
`;