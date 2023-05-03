import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home({ url }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    axios.get('https://www.students.oamk.fi/~c2pima00/getProducts.php')
      .then((response) => {
        const data = response.data;
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter(product => product.image && product.image.length > 0 && product.kuvaus && product.kuvaus.length > 0);

  console.log('Filtered products:', filteredProducts);

  return (
    <main>

      <div class="container">

        {/* Karuselli alkaa */}
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 1"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class='d-block img-fluid' src='https://www.students.oamk.fi/~n2raro00/Projekti_kuvat/tervetuloabanneri.jpg'></img>
              <div class="container">
                <div class="carousel-caption text-start">

                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class='d-block img-fluid' src='https://www.students.oamk.fi/~n2raro00/Projekti_kuvat/Umo_banner.png'></img>
              <div class="container">
                <div class="carousel-caption">

                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class='d-block img-fluid' src='https://www.students.oamk.fi/~n2raro00/Projekti_kuvat/bag_banneri_ver2.png'></img>
              <div class="container">
                <div class="carousel-caption">

                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class='d-block img-fluid' src='https://www.students.oamk.fi/~n2raro00/Projekti_kuvat/Motooki_banner.png'></img>
              <div class="container">
                <div class="carousel-caption">

                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class='d-block img-fluid' src='https://www.students.oamk.fi/~n2raro00/Projekti_kuvat/Tokaido_banner.png'></img>
              <div class="container">
                <div class="carousel-caption text-end">

                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* karuselli loppuu */}
        {/* Tuotekuvat */}
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (
                <img src={filteredProducts[0].image} alt={filteredProducts[0].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[0].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${1}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[1].image} alt={filteredProducts[1].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[1].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${2}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[2].image} alt={filteredProducts[2].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[2].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${3}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[3].image} alt={filteredProducts[3].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[3].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${4}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[4].image} alt={filteredProducts[4].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[4].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${5}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[5].image} alt={filteredProducts[5].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[5].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${6}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[6].image} alt={filteredProducts[6].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[6].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${7}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[7].image} alt={filteredProducts[7].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[7].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${8}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              {filteredProducts.length > 0 && (<img src={filteredProducts[8].image} alt={filteredProducts[8].name} />)}
              <div class="card-body">
                <p class="card-text kuvaus">{filteredProducts[8].kuvaus}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <Link to={`/product/${9}`}><button className="btn btn-sm btn-outline-dark">Katso</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </main>

  )
}
