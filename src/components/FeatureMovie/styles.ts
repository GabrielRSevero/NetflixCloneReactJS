import styled from "styled-components";

export const Container = styled.div<{background: string}>`
    height: 100vh;
    background-image: ${(props) => `url(${props.background})` || 'black'};
    background-size: cover;
    background-position: center;

    @media(max-width: 760px) {
        height: 90vh;
    }

    .feature--vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
        
        .feature--horizontal {
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, #111 30%, transparent 70%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 70px 0 150px 30px;

            .feature--name {
                font-size: 60px;
                font-weight: bold;
                @media(max-width: 760px) {
                    font-size: 40px;
                }
            }
            
            .feature--info {
                font-size: 18px;
                font-weight: bold;
                margin-top: 15px;
                display: flex;
                @media(max-width: 760px) {
                    font-size: 16px;
                }

                .feature--points {
                    color: #46d369;
                    margin-right: 15px;
                }

                .feature--date {
                    margin-right: 15px;
                }
            }

            .feature--description {
                margin-top: 15px;
                font-size: 20px;
                color: #999;
                max-width: 40%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                @media(max-width: 760px) {
                    font-size: 14px;
                    max-width: 100%;
                    margin-right: 30px;
                }
            }

            .feature--buttons {
                display: flex;
                margin-top: 15px;
                .feature--watchButton, .feature--myListButton {
                    font-size: 20px;
                    font-weight: bold;
                    padding: 12px 25px;
                    border-radius: 5px;
                    text-decoration: none;
                    margin-right: 10px;
                    transition: all ease .2s;
                    @media(max-width: 760px) {
                        font-size: 16px;
                    }
                    &:hover{
                        opacity: .7;
                    }
                }
                .feature--watchButton{
                    background-color: #fff;
                    color: #000;
                }
                .feature--myListButton {
                    background-color: #333;
                    color: #fff;
                }
            }

            .feature--genres {
                margin-top: 15px;
                font-size: 18px;
                color: #999;
                @media(max-width: 760px) {
                    font-size: 14px;
                }
            }
        }
    }
`;