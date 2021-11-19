import styled from "styled-components";

export const Container = styled.div<{marginLeft: number, width: number}>`
    margin-bottom: 30px;

    &:hover{
        .movieRow--left, .movieRow--right {
            opacity: 1;
        }
    }

    h2 {
        margin: 0 0 0 30px;
    }

    .movieRow--left, .movieRow--right {
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0, 0, 0, .6);
        z-index: 90;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease .2s;

        @media(max-width: 760px) {
            opacity: 1;
        }
    }

    .movieRow--left {
        left: 0;
    }

    .movieRow--right {
        right: 0;
    }

    .movieRow--listArea {
        overflow-x: hidden;
        padding-left: 30px;
    }

    .movieRow--list {
        width: ${props => props.width}px;
        margin-left: ${props => props.marginLeft}px;
        transition: all ease .5s;
        .movieRow--item {
            display: inline-block;
            width: 150px;
            cursor: pointer;
            img {
                width: 100%;
                transform: scale(0.9);
                transition: all ease 0.2s;
                &:hover {
                    transform: scale(1);
                }
            }
        }
    }
`;