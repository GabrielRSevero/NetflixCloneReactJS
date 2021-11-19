import * as C from './styles';

type FeatureMovieProps = {
    item: {
        id?: number,
        original_name?: string,
        first_air_date?: number,
        backdrop_path?: string,
        number_of_seasons?: number,
        overview?: string,
        vote_average?: number,
        genres?: [
            {
                name: string
            }

        ]
    },
}

export function FeatureMovie({item}: FeatureMovieProps){

    let firstDate = new Date(`${item.first_air_date}`);
    let genres: string[] = [];

    item.genres?.forEach((c, i) => genres.push(c.name));

    return(
        <C.Container background={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}>
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="feature--name">{item.original_name}</div>
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--date">{firstDate.getFullYear().toString()}</div>
                        <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="feature--description">{item.overview}</div>
                    <div className="feature--buttons">
                        <a className='feature--watchButton' href={`/watch/${item.id}`}>► Assistir</a>
                        <a className='feature--myListButton' href="/">+ Minha Lista</a>
                    </div>
                    <div className="feature--genres">
                        <strong>Gêneros: </strong>
                        {genres.join(', ')}
                    </div>
                </div>
            </div>
        </C.Container>
    )
}