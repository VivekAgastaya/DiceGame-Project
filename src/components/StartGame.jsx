import styled from "styled-components"
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
    return (
        <Container>
            <div>
            <img src="/images/dices.png" alt="dice picture" />

            </div>
            <div className="content">
                <h1>Dice Game</h1>
               
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
max-height: 1180px;
height: 100vh;
display: flex;
margin-left: 180px;
align-items: center;

   .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
   }
`;

