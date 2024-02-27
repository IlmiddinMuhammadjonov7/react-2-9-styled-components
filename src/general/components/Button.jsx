import styled, { css } from "styled-components"

// variant = "circular" | "rectangular"

// Bu joyda yangi button ni kodlar yani styled component orqali
const StyledButton = styled.button`
    cursor: pointer;
    background: transparent;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    font-size: 32px;
    /* Props orqali kelgan elementni tekshrib shartga to'g'risini tanlab olib berish */
    ${props=>{
        switch(props.variant){
            case "circular":
                return css`
                    background-color: ${props=>props.theme.colors.blue};
                    padding: 12px 64px;
                    border-radius: 40px;
                `;
            case "rectangular":
                return css`
                    background-color: ${props=>props.theme.colors.blue};
                    padding: 12px 64px;
                    width: 100%;
                    text-align: center;
                    border-radius: 40px;
                `
        }
    }}
`

// Elementlar props orqali qabul qilinyapti
const Button = ({children, onClick, variant}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button