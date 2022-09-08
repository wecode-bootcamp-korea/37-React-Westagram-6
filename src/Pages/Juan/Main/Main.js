import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './components/Feeds';
import Aside from './components/Aside';
import Footer from './components/Footer';
import '../Main/Main.scss';

function Main() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch('/data/articleDataJuan.json')
      .then(response => response.json())
      .then(data => {
        setArticleData(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <main>
        <section className="feeds">
          {articleData.map(article => {
            return <Feeds key={article.id} article={article} />;
          })}
        </section>
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
