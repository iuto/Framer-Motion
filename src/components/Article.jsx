import React, { useState, useEffect } from 'react';
import articlesData from '../rss/articles.json';

const formatDate = (isoDate) => {
    if (!isoDate || isNaN(Date.parse(isoDate))) {
      return ""; // 無効な日付の場合は空の文字列を返す
    }
    const date = new Date(isoDate);
    return date.toISOString().split('T')[0];
  };

const RssFeedComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // JSONファイルから記事データを読み込む
    setArticles(articlesData);
  }, []);

  return (
    <div className="items-center pt-20">
      {articles.map((article, index) => (
        <div key={index}>
            <div id="toast-simple" className="mx-auto mb-4 w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <a href={article.link}>
                    <div className="text-sm font-normal">{article.title}<br></br>{article.pubDate}</div>
                </a>
            </div>
        </div>
      ))}
    </div>
  );
};

export default RssFeedComponent;