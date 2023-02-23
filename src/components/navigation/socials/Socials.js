import { Fragment } from "react";

export default function Socials({ data = [] }) {
  const socialLink = [
    {
      url: "facebook.com",
    },
    {
      url: "twitter.com",
    },
    {
      url: "instagram.com",
    },
    {
      url: "linkedin.com",
    },
  ];
  return (
    <Fragment>
      {data.map((val) => {
        return (
          <a className={val.className} href="/">
            <i className={val.icon} />
          </a>
        );
      })}
    </Fragment>
  );
}
