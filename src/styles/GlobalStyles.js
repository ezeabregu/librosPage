import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
         --rojo: #ed1b2e;  
         --textGray: #d7d7d8;
         --gray: #e2e2e2;
         --moreGray: #6d6e70;
         --success:#279b37;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        background-color: var(--gray);
        font-family: "Quicksand", sans-serif;
        overflow-x: hidden;
        color: var(--moreGray);
    }
`;
