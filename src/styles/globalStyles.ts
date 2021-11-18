import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-weight: 400;
        min-height: 100vh;
    }

    body,
    input,
    button,
    textarea,
    select {
        font-weight: 400;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }
    input, textarea, select { 
        transition: all 0.2s;

        &:focus {
            outline: none;
            box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
        }
    }

    img {
        display: block;
    }

    ul {
        list-style: none;
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
    }


    .container {
        width: 100%;
        padding: 0;
        margin-right: auto;
        margin-left: auto;
    }

    /* settings simple containers for responsive */
    @media(max-width:575px){
        .container{
            padding: 0 2rem;
        }
    }
    @media (min-width: 576px) {
        .container {
            width: 540px;
        
        }
    }
    @media (min-width: 768px) {
        .container {
            width: 720px;
        }
    }
    @media (min-width: 992px) {
        .container {
            width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1140px;
        }
    }
    @media(min-width:1400px){
        .container {
            width: 1400px;
        }
    }


`;
