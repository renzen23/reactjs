export default function Subscribe() {
  return (
    <div className="position-relative w-100 mt-3">
      <input
        className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
        type="text"
        placeholder="Enter Your Email"
        style={{ height: "48px" }}
      />
      <button
        type="button"
        className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
      >
        <i className="fa fa-paper-plane text-primary fs-4" />
      </button>
    </div>
  );
}
