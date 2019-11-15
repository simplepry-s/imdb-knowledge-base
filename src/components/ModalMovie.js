import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Rating } from "./";
import axios from "axios";

const ModalMovie = props => {
  let { movie, handleShow, show } = props;
  let API = `https://www.omdbapi.com/?t=${movie.Title}&apikey=bd96c767&plot=full`;
  let LINK_IMDB = "https://www.imdb.com/title/";

  const [detail, setDetail] = useState({});
  const [star, setStar] = useState({
    color: "yellow",
    rating: 0,
    number: 5
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async () => {
    try {
      const result = await axios.get(API);
      setDetail(result.data);
      setStar({
        ...star,
        rating:
          result.data.imdbRating === "N/A"
            ? 0
            : parseFloat(result.data.imdbRating) / 2
      });
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickIMDB = () => {
    window.open(LINK_IMDB + detail.imdbID, "_blank");
  };

  const showDetail = item => {
    // console.log(item);
    return (
      <div className="modal-movie">
        <div className="row">
          <b>Actor :&nbsp; </b> {item.Actors}
        </div>
        <div className="row">
          <b>Awards :&nbsp; </b> {item.Awards}
        </div>
        <div className="row">
          <b>BoxOffice :&nbsp; </b> {item.BoxOffice}
        </div>
        <div className="row">
          <b>Plot :&nbsp; </b>
          {item.Plot}
        </div>
        <div className="row">
          <b>Released :&nbsp;</b> {item.Released}
        </div>
        <div className="row">
          <b>Runtime :&nbsp; </b>
          {item.Runtime}
        </div>
        <div className="row">
          <b>Year :&nbsp; </b>
          {item.Year}
        </div>
        <div className="row">
          <b>imdbRating :&nbsp; </b>
          {item.imdbRating}
        </div>
        <div className="row">
          <b>imdbVotes :&nbsp; </b>
          {item.imdbVotes}
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => handleShow()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="col">
              <div className="row">
                <div className="modal-title">{detail.Title}</div>
                <Button
                  variant="warning"
                  className="modal-button"
                  onClick={() => handleClickIMDB()}
                >
                  <b>IMDb</b>
                </Button>
                <div className="modal-rating">
                  <Rating star={star} />
                </div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage ? errorMessage : showDetail(detail)}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMovie;
