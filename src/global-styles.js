import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;600&display=swap');

:root{
     --main-color : #242629;
     --background-color: #16161a; 
     --link-color : #7f5af0;
     --headline : #fffff0;
     --secondary : #72757e;
     --tertiary : #2cb67d;
     --paragraph : #94a1b2;
     --border : #010101;
}

html, body{

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: var(--main-color);

}

`;
