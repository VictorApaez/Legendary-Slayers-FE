import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
// import itemsJson from "../../Items.json";
import Footer from "../Footer/Footer";
import "./Items.css";

function Items() {
  const [itemsData, setItemsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let fetchItemsData = () => {
    setIsLoading(true);
    fetch("https://legendary-slayers-be-production.up.railway.app/items/all")
      .then((res) => res.json())
      .then((data) => {
        setItemsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchItemsData();
  }, []);

  function showInfo(e) {
    e.currentTarget.nextElementSibling.style.top = `${e.clientY - 100}px`;
    e.currentTarget.nextElementSibling.style.left = `${e.clientX + 30}px`;
  }
  const handleEnter = (e) => {
    e.currentTarget.nextElementSibling.classList.remove("hide");
  };
  const handleLeave = (e) => {
    e.currentTarget.nextElementSibling.classList.add("hide");
  };
  return (
    <div>
      <div className="items-page-wrapper">
        <div className="items-title-section">{/* Title Section content */}</div>
        <div className="items-container">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px", // Adjust height as needed
                fontSize: "20px", // Adjust font size as needed
              }}
            >
              Loading...
            </div>
          ) : (
            itemsData.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    data-name={item.name}
                    className="item-card"
                    onMouseMove={showInfo}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    <img src={`${item.full_image}`} />
                  </div>
                  <div className="pop-up hide">
                    <p>{item.name}</p>
                    <p>{item.plaintext}</p>
                    <p>Base Price: {item.base_price}</p>
                    <p>Sell Price: {item.sell_price}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Items;
