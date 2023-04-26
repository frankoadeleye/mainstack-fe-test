import styled from "styled-components";

export const DBTGHeaderBlock = styled.div`
display: flex;
width: 100%;
gap: 10px;
flex-direction: column;

.top{
    display: flex;
    width: 100%;
    justify-content: space-between;

    div: first-child{
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: -0.015em;
        color: #131316;
         font-weight: bold;
    }

    div:last-child{

    }
}
.bottom{
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #4D5760;
    width: 100%;
}

.view{
    font-size: 48px;
    line-height: 120%;
    display: flex;
    font-weight: bold;
    align-items: center;
    letter-spacing: -0.015em;
    color: #131316;
    margin: 24px 0px;
}
`;
