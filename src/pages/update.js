import React, {useState, useEffect} from "react";
import axios from 'axios'
import { url } from "../utils/API";
const Update = () => {
  const [update, setUpdate] = useState([])

  useEffect(() =>{
    const fetchData = async()=>{
      try {
        const update = await axios.get(`${url}updates`)

        setUpdate(update.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log(update)

  return (
    <>
      <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <h1>
                <span className="d-block text-primary">Latest</span>
                <span className="d-block text-dark">Updates</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="products section-padding">
        <div className="tab-content mt-2" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row ml-2 mr-2">
              {update && update.map((d, index)=>(
                <div className="col-4" key={index}>
                  <div className="card">
                    <img
                      src={`${url}${d.update_image_path}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{d.update_title}</h5>
                      <p className="card-text">
                        {d.update_description}
                      </p>
                      <a href={d.update_link}className="btn btn-primary">
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Update;
