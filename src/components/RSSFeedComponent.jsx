import React from 'react';
import RSSFeedComponent from './RSSFeedComponent';

const App = () => {
  const rssFeedUrl = 'https://sizu.me/iuto/rss'; // RSSフィードのURLを指定

  return (
    <div>
      <h1>RSS Feed Reader</h1>
      <RSSFeedComponent feedUrl={rssFeedUrl} />
    </div>
  );
};

export default App;
