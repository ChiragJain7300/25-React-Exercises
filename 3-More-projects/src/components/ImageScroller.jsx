import React, { useEffect, useState } from "react";
import "./css/scroller.css";
function ImageScroller() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [percentScrolled, setPercentScrolled] = useState(0);
  // data fetching from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=100&select=title`
      );
      const dataJson = await res.json();
      if (dataJson && dataJson.products && dataJson.products.length > 0) {
        setData(dataJson.products);
        console.log(data, loading);
        setLoading(false);
      }
    } catch (error) {
      setErrMsg(error);
      console.log(error);
      setLoading(false);
    }
  };
  // handle scroll event
  const handleScrollEvent = () => {
    const totalScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setPercentScrolled((totalScrolled / totalHeight) * 100);
    console.log(percentScrolled);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <h1>Loading Data. Please Wait!!!</h1>;
  }
  if (errMsg) {
    return <h1>{errMsg}</h1>;
  }
  return (
    <>
      <div className="navbar">
        <h2>Image Scroller</h2>
      </div>
      <div className="scrollerCont">
        <div
          className="scroller"
          style={{ width: `${percentScrolled}%` }}
        ></div>
      </div>
      {data && data.length > 0
        ? data.map((item) => (
            <div key={item.id} className="productCont">
              <p>{item.title}</p>
            </div>
          ))
        : null}
    </>
  );
}

export default ImageScroller;
