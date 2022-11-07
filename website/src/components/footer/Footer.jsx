import React from "react";

const Footer = () => {
  return (
    <>
    <div className="centre">
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" French Concession "}
            <a
              href="https://instagram.com/french.concession"
              target="https://instagram.com/french.concession"
              rel="noreferrer"
            >
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
