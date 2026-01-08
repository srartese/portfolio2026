import Modal from "react-modal";
import { useState } from "react";
import "./DetailModal.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function DetailModal({ title, description, gallery, index }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const images = gallery.map((value) => {
    return { original: "images/media/" + value };
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="openModal" onClick={openModal}>
        See project details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
        key={index}
      >
        <button onClick={closeModal} className="closebtn">
          x
        </button>
        <h1>{title}</h1>
        <div className="description">{description}</div>

        <div className="galleryContainer">
          <div className="gallery">
            <ImageGallery
              items={images}
              lazyLoad={true}
              showThumbnails={true}
              showPlayButton={false}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DetailModal;
