import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiDribbble,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
 
  {
    iconName: <FiInstagram />,
    link: "https://instagram.com/french.concession",
  }
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
