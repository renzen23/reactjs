import { Fragment } from "react";
import { Portfolio } from "../data/dataGallery";
export default function Gallery({ data = [] }) {
  return (
    <Fragment>
      {Portfolio.map((value) => {
        return (
          <div key={value.id} className="col-4">
            <img
              src={require(`../../img/${value.imageUrl}`)}
              className="img-fluid"
              alt={value.name}
            />
            {/* <p>{value.catergory}</p>
            <p>{value.name}</p> */}
          </div>
        );
      })}
    </Fragment>
  );
}
