import styled from 'styled-components';
import React, { useState } from "react";

const DropDownContainer = styled("div")`
    width: 16em;
    margin: 0 auto;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    border-radius: 5px;
    box-shadow: 0 2px 3px #b57178;
    font-weight: 500;
    font-size: 1rem;
    color: #ed4747;
    background: #fff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    padding: 8px;
    margin: 0;
    padding-left: 1em;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 3px #b57178;
    box-sizing: border-box;
    color: #ed4747;
    font-size: 1rem;
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
`;

const options = [ "Oral Pill", "IUD", "Implant", "Injection", "Morning After Pill", "Contraceptive Ring", "Diaphragm", "Female Condom" ]

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <div class="Dropdown">
        <DropDownContainer class="Drop-Down-Container">
            <DropDownHeader onClick={toggling}>
                {selectedOption || "My contraception method is ..."}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                <DropDownList>
                    {options.map(option => (
                        <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                        {option}
                        </ListItem>
                    ))}
                </DropDownList>
                </DropDownListContainer>
            )}
            
        </DropDownContainer>
        </div>
    );
}