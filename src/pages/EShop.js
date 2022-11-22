import React, { useState } from "react";
import "../styles/eshop.scss";
import ListProduits from "../components/ListProduits";
import Produits from "../data/products";

function EShop() {
  const [data, setData] = useState(Produits);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>filtre par categorie</h5>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const { id, title, desc, imgUrl, prix } = values;
                return (
                  <div className="col-md-4">
                    <div className="card">
                      <img src={imgUrl} className="card-img-top" alt="" />
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p>prix: {prix}</p>
                        <a href="" className="btn btn-primary">
                          Ajouter au panier
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EShop;
