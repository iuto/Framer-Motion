import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser();

(async () => {
  let jsonFeed = {};
  const feed = await parser.parseURL("https://sizu.me/iuto/rss");
  const items = feed.items.map((data) => {
    // 必要なプロパティのみを新しいオブジェクトに抽出
    const newItem = {
      title: data.title,
      link: data.link
    };

    // pubDateの形式を変更
    if (data.pubDate) {
      const pubDate = new Date(data.pubDate);
      newItem.pubDate = pubDate.toISOString().split('T')[0];
    }

    return newItem;
  });
  jsonFeed = items;
  writeFileSync("src/rss/articles.json", JSON.stringify(jsonFeed));
})();
