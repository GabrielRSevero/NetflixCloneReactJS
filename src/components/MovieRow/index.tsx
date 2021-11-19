import * as C from './styles';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import { useState } from 'react';

export type MovieRowProps = {
    slug: string,
    title: string,
    items: {
      id: number,
      original_name: string,
      results: [
        {
            poster_path: string
            original_name: string
        }
        ]
    }
}

export default function MovieRow({title, items}: MovieRowProps) {
    const [scrollX, setScrollX] = useState(0);


    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0) {
            x = 0
        } 
        
        setScrollX(x);
    }

    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if(window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }


    return (
        <C.Container
            marginLeft={scrollX}
            width={items.results.length * 150}
        >
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeRoundedIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextRoundedIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listArea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => {
                        return (
                            <div key={key} className="movieRow--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </C.Container>
    )
}