import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import Slideshow from "./SlideShow";
function App() {
  const { loading, data } = useFetch();
  const [slideshowdata, setslideshowdata] = useState(false);
  const [page, setPage] = useState(0);
  const [check, setCheck] = useState([]);
  useEffect(() => {
    if (loading) return;
    setCheck(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <div>
      {slideshowdata ? (
        <Slideshow setslideshowdata={setslideshowdata}/>
      ) : (
        <main>
          <div className="section-title">
            <button className="btn btn1">Grid</button>
            <h1>{loading ? "loading" : "Flickr App"}</h1>

            <div className="underline"></div>
            <section className="followers">
              <div className="container">
                {check.map((follower) => {
                  return <Follower key={follower.id} {...follower} setslideshowdata={setslideshowdata}></Follower>;
                })}
              </div>

              {!loading && (
                <div className="btn-container">
                  <button className="prev-btn" onClick={prevPage}>
                    prev
                  </button>
                  {data.map((item, index) => {
                    return (
                      <button
                        onClick={() => handlePage(index)}
                        key={index}
                        className={`page-btn ${
                          index === page ? "active-btn" : null
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                  <button className="next-btn" onClick={nextPage}>
                    next
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
