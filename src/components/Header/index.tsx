import * as C from './styles'

type HeaderProps = {
    blackState: boolean,
}

export function Header({blackState}: HeaderProps) {
    return (
        <C.Container blackState={blackState}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="netflix_logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user_img" />
                </a>
            </div>
        </C.Container>
    )
}