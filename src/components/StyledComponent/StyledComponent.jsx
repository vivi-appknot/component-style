import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height:300px;
    background : ${props => props.color || 'blue'}; // props에서 값을 받아와 바로 사용 가능

    /* scss처럼 네스팅 가능 */
    &.small {
        background:#fff;
    }

    /* 반응형 */
    @media (max-width : 1024px) {
        width:500px;
    }
`;

const Title = styled.h1`
    font-size:3rem;
    color:#fff;
    font-style: ${props => props.font}; // props에서 값을 받아와 바로 사용 가능

    /* 반응형 */
    @media (max-width : 1024px) {
        font-size:1em;
    }
`
const Button = styled.button`
    width:150px;
    height:80px;
    background:#666;

    /* scss처럼 네스팅 가능 */
    &:hover {
        background:#fff;
    }

    /* props가 특정값을 가질 때 스타일 변형 */
    ${props => props.mouseover &&
        css `
            background:purple;
            color:#fff;
            &:hover {
                color:purple;
            }
        `
    };
`;


const StyledComponent = () => {
    return (
        <Box color="black">
            <Title font="italic">styled-components 테스트입니당</Title>

            <Box className="small">
                <Button>버튼1</Button>
                <Button mouseover={true}>버튼2</Button>
            </Box>
        </Box>
    );
};

export default StyledComponent;