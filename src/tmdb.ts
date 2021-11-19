const API_KEY='c974a4abe03bfc7f03f3393ce0f5b662'
const API_BASE='https://api.themoviedb.org/3';

async function basicFetch(endpoint: string) {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}

export async function getHomeList() {
    return [
        {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=28`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=35`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=27`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=10749`)
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=99`)
        },
    ]
}

export async function getMovieInfo(movieId: number, type: string) {
    let info = {};

    if(movieId){
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
        }
    }

    return info;
}