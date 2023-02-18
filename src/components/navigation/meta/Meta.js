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
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        ></link>
        <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          type="text/javascript"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
    </Fragment>
  );
}
