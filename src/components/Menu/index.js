import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav';

const StyledBurger = styled.section`
    width: 2rem;
    height: 2rem;
    z-index: 20;
    padding-right: 4rem;
    display: none;

    @media (width <= 900px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    section {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#b2aeee'};
        border-radius: 0.625rem;
        transform-origin: 0.0625rem;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <section />
                <section />
                <section />
            </StyledBurger>
            <RightNav open={open} />
        </>
    )
}

export default Burger;