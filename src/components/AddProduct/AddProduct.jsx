import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddProduct = ({ show, handleClose, addProduct }) => {
  const [title, setTitle] = useState("");
  const [desc, setDecs] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function createProduct() {
    if (!title || !desc || !price || !image) {
      alert("some inputs are empty!");
      return;
    }
    let newObj = {
      title,
      desc,
      price,
      image,
      id: Date.now(),
    };

    addProduct(newObj);
    setTitle("");
    setDecs("");
    setPrice("");
    setImage("");

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="desc"
              value={desc}
              onChange={e => setDecs(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="iamge"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={createProduct}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
