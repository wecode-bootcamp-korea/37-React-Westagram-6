import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './components/Feeds';
import Aside from './components/Aside';
import Footer from './components/Footer';
import '../Main/Main.scss';

function Main() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch('/data/articleDataJuan.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setArticleData(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="Main">
        <main>
          <section className="feeds">
            {articleData.map(data => {
              return <Feeds key={data.id} data={data} />;
            })}
          </section>
          <Aside />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Main;

export const USER_DATA = [
  {
    id: 0,
    user_id: 'tiger_abc',
    time: '14분전',
    profile_url:
      'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
  },
  {
    id: 1,
    user_id: 'fox_tail',
    time: '30분전',
    profile_url:
      'https://images.fineartamerica.com/images/artworkimages/medium/1/funny-fox-series-fox-poto-bomb-roeselien-raimond.jpg',
  },
  {
    id: 2,
    user_id: 'ttabong_gosuemdochi',
    time: '35분전',
    profile_url:
      'https://img.animalplanet.co.kr/news/2019/08/10/700/v4q0b0ff4hcpew1g6t39.jpg',
  },
  {
    id: 3,
    user_id: 'doge_space',
    time: '36분전',
    profile_url:
      'https://i.kym-cdn.com/entries/icons/facebook/000/013/564/doge.jpg',
  },
  {
    id: 4,
    user_id: 'i_am_not_human',
    time: '14분전',
    profile_url:
      'https://www.rd.com/wp-content/uploads/2020/11/eastern-chimpanzee-male-fudge-aged-17-years-portrait.jpg',
  },
  {
    id: 5,
    user_id: 'american_eagle',
    time: '14분전',
    profile_url:
      'https://safariniagara.com/wp-content/uploads/2017/01/BaldEagle-Portrait.jpg',
  },
  {
    id: 6,
    user_id: 'fat_cat',
    time: '45분전',
    profile_url:
      'https://i.chzbgr.com/full/9018583552/h43E44E88/cat-when-you-explain-something-17-times-and-they-still-dont-get-it',
  },
  {
    id: 7,
    user_id: 'dogflower',
    time: '46분전',
    profile_url:
      'https://cdn.shopify.com/s/files/1/0972/5474/files/9d891ea4dad4547389af15e45ba25d42.jpg?16699883088683802383',
  },
];
