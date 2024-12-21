import CakeCategory from "./CakeCategory";
import './ShopCakeCategory.css';
const ShopCakeCategory = () => {
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
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Tall-and-Fancy-Cake-9-min-scaled-pr2q5nk8snomjr875pa6dqsqo2am0csfgkpnbldtxs.jpg"
              altText="Tall and Fancy Cakes"
              categoryName="TALL AND FANCY"
            />

            {/* Second Cake Category */}
           <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/tall-and-fancy-pqouxp5t8lfjjchur84emwklu7ry19ddvnjqowky4w.jpg"
              altText="Exotic Cakes"
              categoryName="EXOTIC CAKES"
            /> 

            {/* Third Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Premium-Cakes-pqov0r4xg7m39q23x1nr8mtjcapw1uhzarvjua1vww.jpg"
              altText="Premium Cakes"
              categoryName="PREMIUM CAKES"
            />

            {/* Fourth Cake Category */}
           <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Designer-Cakes-pqov1whtsx6pgke17jjcacdth921gj264gkwygckb4.jpg"
              altText="Designer Cakes"
              categoryName="DESIGNER CAKES"
              isButtonVisible={true}
              buttonText="View All"
            /> 
          </div>
        </div>
      </div>


      <div className="outer-container">
        <div className="container-fluid category-container2">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>3D Cake</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes15-pqovduzwr1k15z0pdpmh0bqxjq45dwj8fndar6m95c.jpg"
              altText="WEDDING CAKES"
              categoryName="WEDDING CAKES"
            />

            {/* Second Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes113-pqovf9r703hikwyz5bkbqyxtmj5yxk4qmmlio4iztc.jpg"
              altText="PHOTO CAKES"
              categoryName="PHOTO CAKES"
            />

            {/* Third Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes112-pqovgmmsvhcfcmzz7woxcmlsikh21tis5cirmiiits.jpg"
              altText="E-MOTION CAKES"
              categoryName="E-MOTION CAKES"
            />

            {/* Fourth Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes110-pqovj7oto2vta18t4iwzph4fbpqe7us7i53u4wojps.jpg"
              altText="3D CAKES"
              categoryName="3D CAKES"
              isButtonVisible={true}
              buttonText="View All"
            />
          </div>
        </div>
      </div>


      <div className="outer-container">
        <div className="container-fluid category-container">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Pastry</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-12-04_16_04_50_black-forest-pastry-pr0nigmilh4bbuiwh5cf4uj5mb4in6tk07fi3xpm8g.jpg"
              altText="FRESH CREAM PASTRIES"
              categoryName="FRESH CREAM PASTRIES"
            />

            {/* Second Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-12-04_16_06_16_devils-delight-pastry-pr0niuq3fznm5zyf6tfto8z2j370undj257sb34pn4.jpg"
              altText="CHOCOLATE PASTRIES"
              categoryName="CHOCOLATE PASTRIES"
            />

            {/* Third Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-05-27_16_14_08_Cherry-chocolate-mousse-cup-pr0nj52bj61rppjeifwpxod52bs27bikrke4l4pdqo.jpg"
              altText="CUP PASTRIES"
              categoryName="CUP PASTRIES"
            />

            {/* Fourth Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1622273916612_41-scaled-pr0s5rwb3u5px3hrhgxqymkw7egkrn1j0buxd1muog.jpg"
              altText="SWISS MISS PASTRY"
              categoryName="SWISS MISS PASTRY"
              isButtonVisible={true}
              buttonText="View All"
            />
          </div>
        </div>
      </div>


      <div className="outer-container">
        <div className="container-fluid category-container2">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Saviors</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1621336263762_50-pr2qhm2bqs1y95uvbvdb3q5uqjcpxq9hrri14bnis0.jpg"
              altText="BURGERS"
              categoryName="BURGERS"
            />

            {/* Second Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1621336385045_97-pr2qhvgpn4eth9h7szfksnsgoe2e2pat520vx39l1s.jpg"
              altText="PIZZA"
              categoryName="PIZZA"
            />

            {/* Third Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1622187517738_26-pr0rvqya7gfm2u2214x0d5nw3fvmnv8lmpch2si11s.jpg"
              altText="ROLLS"
              categoryName="ROLLS"
            />

            {/* Fourth Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-05-26_17_30_11_Classic-Veg-Pattice-pr0nglvz48kyfj7uauhwptdffy9ggogm31411agki8.jpg"
              altText="PATTIES & PUFFS"
              categoryName="PATTIES & PUFFS"
              isButtonVisible={true}
              buttonText="View All"
            />
          </div>
        </div>
      </div>


      <div className="outer-container">
        <div className="container-fluid category-container">
          <h2 className="custom-margin d-flex justify-content-start">
            <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
            <span style={{ color: "#EC268f" }}><b>Chocolates</b></span>
          </h2>
          <div className="row">
            {/* First Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/MC-pr0o4u67ahr1po0stbjozp96piu2vsniqyime2j840.jpg"
              altText="CHOCOLATE BARS"
              categoryName="CHOCOLATE BARS"
            />

            {/* Second Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/MB-pr0o53kl6u3wxrn5aflyomvsndjr0rou491h6u5ads.jpg"
              altText="CHOCOLATE BOUQUETS"
              categoryName="CHOCOLATE BOUQUETS"
            />

            {/* Third Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1632226044485_4-pr0s1tyofurf7z7xi9l304eai7w5hce24tclw9has0.jpg"
              altText="ROSE SENSATION BOUQUET"
              categoryName="ROSE SENSATION BOUQUET"
            />

            {/* Fourth Cake Category */}
            <CakeCategory
              imageUrl="https://www.monginis.net/wp-content/uploads/elementor/thumbs/1643866120701_79-pr0nb5fpfv4111575zkvqoy3af5qrxspo0rjqgjumo.jpg"
              altText="VALENTINE CHOCOLATE BAR"
              categoryName="VALENTINE CHOCOLATE BAR"
              isButtonVisible={true}
              buttonText="View All"
            />
          </div>
        </div>
      </div>

    </>
  );
};
export default ShopCakeCategory;
