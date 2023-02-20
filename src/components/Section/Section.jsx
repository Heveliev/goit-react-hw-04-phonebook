import { Container } from "./Section.styled"

export const Section = ({title,children}) =>{
    return(
        <Container><h2>{title}</h2>
        {children}</Container>
    )
}