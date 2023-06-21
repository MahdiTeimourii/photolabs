import React from "react";

import "../styles/TopicList.scss";

  const TopicList = ({ topics }) => {
    return (
      <ul className="top-nav-bar">
        {/* Map over the topics array and render a TopicListItem for each topic */}
        {topics.map((topic, index) => (
          <TopicListItem
            key={`${topic.id}_${index}`}
            label={topic.title}
            link={topic.link}
            className="top-nav-bar"
          />
        ))}
      </ul>
    );
  };
  
  // TopicListItem component
  const TopicListItem = ({ label, link, className }) => {
    return (
      <li className={className}>
        <a href={link}>{label}</a>
      </li>
    );
  };
  
export default TopicList;