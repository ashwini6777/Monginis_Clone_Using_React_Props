import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShopByCake.css';

const ShopByCake = () => {
  return (
    <>
      <div className="outer-container">
        <div className="container-fluid category-container">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Cake</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Tall-and-Fancy-Cake-9-min-scaled-pr2q5nk8snomjr875pa6dqsqo2am0csfgkpnbldtxs.jpg"
                alt="Tall and Fancy Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">TALL AND FANCY</p>
            </div>

            {/* Second Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/tall-and-fancy-pqouxp5t8lfjjchur84emwklu7ry19ddvnjqowky4w.jpg"
                alt="Exotic Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">EXOTIC CAKES</p>
            </div>

            {/* Third Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Premium-Cakes-pqov0r4xg7m39q23x1nr8mtjcapw1uhzarvjua1vww.jpg"
                alt="Premium Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">PREMIUM CAKES</p>
            </div>

            {/* Fourth Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center position-relative">
              <button className="btn btn-pink position-absolute" style={{ top: "-45px" }}>View All</button>
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Designer-Cakes-pqov1whtsx6pgke17jjcacdth921gj264gkwygckb4.jpg"
                alt="Designer Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">DESIGNER CAKES</p>
            </div>
          </div>
        </div>
      </div>



      {/* Shop By 3D Cakes */}
      <div className="outer-container">
        <div className="container-fluid category-container2">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>3D Cakes</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes15-pqovduzwr1k15z0pdpmh0bqxjq45dwj8fndar6m95c.jpg"
                alt="Wedding Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">WEDDING CAKES</p>
            </div>

            {/* Second Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes113-pqovf9r703hikwyz5bkbqyxtmj5yxk4qmmlio4iztc.jpg"
                alt="Photo Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">PHOTO CAKES</p>
            </div>

            {/* Third Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes112-pqovgmmsvhcfcmzz7woxcmlsikh21tis5cirmiiits.jpg"
                alt="E-Motion Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">E-MOTION CAKES</p>
            </div>

            {/* Fourth Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center position-relative">
              <button className="btn btn-pink position-absolute" style={{ top: "-45px" }}>View All</button>
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes110-pqovj7oto2vta18t4iwzph4fbpqe7us7i53u4wojps.jpg"
                alt="3D Cakes"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">3D CAKES</p>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat similar structure for Pastries, Savories, and Chocolates */}

      {/* Shop By Pastry */}
      <div className="outer-container">
        <div className="container-fluid category-container">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Pastry</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-12-04_16_04_50_black-forest-pastry-pr0nigmilh4bbuiwh5cf4uj5mb4in6tk07fi3xpm8g.jpg"
                alt="Fresh Cream Pastries"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">FRESH CREAM PASTRIES</p>
            </div>

            {/* Second Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-12-04_16_06_16_devils-delight-pastry-pr0niuq3fznm5zyf6tfto8z2j370undj257sb34pn4.jpg"
                alt="Chocolate Pastries"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">CHOCOLATE PASTRIES</p>
            </div>

            {/* Third Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-05-27_16_14_08_Cherry-chocolate-mousse-cup-pr0nj52bj61rppjeifwpxod52bs27bikrke4l4pdqo.jpg"
                alt="Cup Pastries"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">CUP PASTRIES</p>
            </div>

            {/* Fourth Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center position-relative">
              <button className="btn btn-pink position-absolute" style={{ top: "-45px" }}>View All</button>
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1622273916612_41-scaled-pr0s5rwb3u5px3hrhgxqymkw7egkrn1j0buxd1muog.jpg"
                alt="Swiss Miss Pastry"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">SWISS MISS PASTRY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat this structure for Savories and Chocolates */}

      {/* Shop By Savories */}
      <div className="outer-container">
        <div className="container-fluid category-container2">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Saviors</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1621336263762_50-pr2qhm2bqs1y95uvbvdb3q5uqjcpxq9hrri14bnis0.jpg"
                alt="Burgers"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">BURGERS</p>
            </div>

            {/* Second Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1621336385045_97-pr2qhvgpn4eth9h7szfksnsgoe2e2pat520vx39l1s.jpg"
                alt="Pizza"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">PIZZA</p>
            </div>

            {/* Third Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1622187517738_26-pr0rvqya7gfm2u2214x0d5nw3fvmnv8lmpch2si11s.jpg"
                alt="Rolls"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">ROLLS</p>
            </div>

            {/* Fourth Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center position-relative">
              <button className="btn btn-pink position-absolute" style={{ top: "-45px" }}>View All</button>
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-05-26_17_30_11_Classic-Veg-Pattice-pr0nglvz48kyfj7uauhwptdffy9ggogm31411agki8.jpg"
                alt="Veg Patties"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">PATTIES & PUFFS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop By Chocolates */}
      <div className="outer-container">
        <div className="container-fluid category-container">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Chocolates</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/MC-pr0o4u67ahr1po0stbjozp96piu2vsniqyime2j840.jpg"
                alt="Milk Chocolates"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">CHOCOLATE BARS</p>
            </div>

            {/* Second Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/MB-pr0o53kl6u3wxrn5aflyomvsndjr0rou491h6u5ads.jpg"
                alt="Dark Chocolates"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">CHOCOLATE BOUQUETS</p>
            </div>

            {/* Third Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1632226044485_4-pr0s1tyofurf7z7xi9l304eai7w5hce24tclw9has0.jpg"
                alt="Candy"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">ROSE SENSATION BOUQUET</p>
            </div>

            {/* Fourth Cake Category */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center position-relative">
              <button className="btn btn-pink position-absolute" style={{ top: "-45px" }}>View All</button>
              <img
                src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1643866120701_79-pr0nb5fpfv4111575zkvqoy3af5qrxspo0rjqgjumo.jpg"
                alt="Choco Bars"
                className="img-fluid rounded-circle w-70"
              />
              <p className="category-name">VALENTINE CHOCOLATE BAR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ShopByCake;
