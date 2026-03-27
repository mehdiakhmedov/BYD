import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
  const { id } = useParams(); 
  const [singleNews, setSingleNews] = useState(null);

  useEffect(() => {
    axios.get('/news.json')
      .then(res => {
        const findNews = res.data.find(item => item.id === parseInt(id));
        setSingleNews(findNews);
      });
  }, [id]);

  if (!singleNews) return <h2 className='text-center py-20'>Yüklənir...</h2>;

  return (
    <div className="container mx-auto py-20 px-4">
      <img src={singleNews.image} className="w-full h-[500px] object-cover rounded-2xl" alt="" />
      <h1 className="text-4xl font-bold mt-10">{singleNews.title}</h1>
      <p className="text-gray-500 mt-4">{singleNews.date}</p>
      <div className="mt-8 text-xl leading-relaxed">
        {singleNews.description || "Bu xəbər haqqında ətraflı məlumat çox yaxında paylaşılacaq."}
      </div>
    </div>
  );
};

export default NewsDetail;