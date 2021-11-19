import { getHomeList, getMovieInfo } from "./tmdb";
import { useEffect, useState } from "react";
import MovieRow from './components/MovieRow'
import GlobalStyle from "./global.styles";
import { FeatureMovie } from "./components/FeatureMovie";
import { Header } from './components/Header'

type ResponseData = {
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

function App() {

  const [movieList, setMovieList] = useState<ResponseData[]>([]);
  const [featureData, setFeatureData] = useState({});
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    async function loadAll() {

      /* Pega lista total: */
      let list = await getHomeList();
      setMovieList(list);

      /* Pega filme em destaque: */
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);

    }
    loadAll();
  }, [])

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <>
    <GlobalStyle />
    <div className="page">
      <Header blackState={blackHeader} />

      {featureData && 
        <FeatureMovie item={featureData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            slug={item.slug}
          />
        ))}
      </section>

      <footer>
        Feito com a finalidade de aprender/praticar ReactJs por Gabriel R. Severo<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site TheMovieDB.org
      </footer>

      {movieList.length <= 0 && 
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }

    </div>
    </>
  );
}

export default App;