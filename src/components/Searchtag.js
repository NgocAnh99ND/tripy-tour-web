import React from "react";
import "./Searchtag.css";

const keywords = [
  "iphone 16",
  "iphone 16 pro",
  "iphone 16 pro max",
  "iphone 16 plus",
  "iphone 16 128gb",
  "iphone 15",
  "iphone 15 plus",
  "iphone 15 pro",
  "tai nghe airpods",
  "airpods 4",
  "airpods 4 anc",
  "apple watch series 10",
  "apple watch series 9",
  "apple watch ultra 2",
  "asus",
  "laptop gaming",
  "macbook air",
  "macbook pro",
  "macbook air m2",
  "macbook air m3",
  "airtag",
  "loa jbl",
  "tai nghe sony",
  "loa marshall",
  "bàn phím gaming",
  "chuột logitech",
  "loa harman kardon",
  "đồng hồ frederique constant",
  "đồng hồ movado",
  "itel",
  "orient star",
  "đồng hồ thụy sỹ",
  "đồng hồ baby g",
  "macbook",
  "macbook pro m4",
  "samsung s25",
  "samsung s25 plus",
  "samsung galaxy s25 ultra",
  "iphone 16e",
  "iphone 14",
  "oppo find n5",
];

function SearchTags() {
  return (
    <div className="search-tags-container">
      <h3>Mọi người cũng tìm kiếm</h3>
      <div className="tags-box">
        {keywords.map((word, index) => (
          <a key={index} href={`#${word}`} className="tag">
            {word}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SearchTags;
