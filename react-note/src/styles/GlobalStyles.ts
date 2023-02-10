import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    body {
	    font-family: Pretendard, sans-serif;
        font-size: 14px;
        color: black;
        background: #f6f6f6;
        text-align: center;
        overflow-x: hidden;
    }
    button{
        border: none;
        background: none;
        cursor: pointer;
    }
    ul {
        list-style: none;
        padding-left: 0px;
    }
    li {
        list-style: none;
    }

    .Toastify__toast-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export default globalStyles;
