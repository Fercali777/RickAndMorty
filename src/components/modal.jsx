import { useEffect, useRef } from "react";

function ShowModal() {
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const myModal = modalRef.current;
    const myInput = inputRef.current;

    if (myModal) {
      myModal.addEventListener("shown.bs.modal", function () {
        if (myInput) myInput.focus();
      });
    }

    // Cleanup para evitar memory leaks
    // return () => {
    //   if (myModal) {
    //     myModal.removeEventListener("shown.bs.modal", function () {
    //       if (myInput) myInput.focus();
    //     });
    //   }
    // };
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowModal;