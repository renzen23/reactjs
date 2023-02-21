import { Helmet } from "react-helmet";
import { Fragment } from "react";

export default function Meta() {
  return (
    <Fragment>
      <Helmet>
        <title>SEO Master - SEO Agency Website Template</title>
        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        ></meta>
        <meta content="" name="keywords"></meta>
        <meta content="" name="description"></meta>
        <link href="../../img/favicon.ico" rel="icon"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
      </Helmet>
    </Fragment>
  );
}
