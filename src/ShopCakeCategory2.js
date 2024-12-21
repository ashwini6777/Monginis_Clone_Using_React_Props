import CakeCategory from "./CakeCategory";
import './ShopCakeCategory.css';

const ShopCakeCategory2 = () => {

    let ShopCaKe = [
        {   
            section: "Cake",
            categories: [
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/Tall-and-Fancy-Cake-9-min-scaled-pr2q5nk8snomjr875pa6dqsqo2am0csfgkpnbldtxs.jpg",
                    "img_name": "TALL AND FANCY1",
                    "alt_text": "Tall and Fancy Cakes",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/tall-and-fancy-pqouxp5t8lfjjchur84emwklu7ry19ddvnjqowky4w.jpg",
                    "img_name": "EXOTIC CAKES",
                    "alt_text": "EXOTIC CAKES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/Premium-Cakes-pqov0r4xg7m39q23x1nr8mtjcapw1uhzarvjua1vww.jpg",
                    "img_name": "PREMIUM CAKES",
                    "alt_text": "PREMIUM CAKES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/Designer-Cakes-pqov1whtsx6pgke17jjcacdth921gj264gkwygckb4.jpg",
                    "img_name": "DESIGNER CAKES",
                    "alt_text": "DESIGNER CAKES",
                    "isButtonVisible": true,
                    "buttonText": "View All"
                }
            ]
        },

        {
            section: "3D Cake",
            categories: [
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes15-pqovduzwr1k15z0pdpmh0bqxjq45dwj8fndar6m95c.jpg",
                    "img_name": "WEDDING CAKES",
                    "alt_text": "WEDDING CAKES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes113-pqovf9r703hikwyz5bkbqyxtmj5yxk4qmmlio4iztc.jpg",
                    "img_name": "PHOTO CAKES",
                    "alt_text": "PHOTO CAKES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes112-pqovgmmsvhcfcmzz7woxcmlsikh21tis5cirmiiits.jpg",
                    "img_name": "E-MOTION CAKES",
                    "alt_text": "E-MOTION CAKES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/3D-Special-Occasions-Cakes110-pqovj7oto2vta18t4iwzph4fbpqe7us7i53u4wojps.jpg",
                    "img_name": "3D CAKES",
                    "alt_text": "3D CAKES",
                    "isButtonVisible": true,
                    "buttonText": "View All"
                }
            ]
        },
        {
            section: "Pastry",
            categories: [
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-12-04_16_04_50_black-forest-pastry-pr0nigmilh4bbuiwh5cf4uj5mb4in6tk07fi3xpm8g.jpg",
                    "img_name": "FRESH CREAM PASTRIES",
                    "alt_text": "FRESH CREAM PASTRIES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-12-04_16_06_16_devils-delight-pastry-pr0niuq3fznm5zyf6tfto8z2j370undj257sb34pn4.jpg",
                    "img_name": "CHOCOLATE PASTRIES",
                    "alt_text": "CHOCOLATE PASTRIES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-05-27_16_14_08_Cherry-chocolate-mousse-cup-pr0nj52bj61rppjeifwpxod52bs27bikrke4l4pdqo.jpg",
                    "img_name": "CUP PASTRIES",
                    "alt_text": "CUP PASTRIES",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/1622273916612_41-scaled-pr0s5rwb3u5px3hrhgxqymkw7egkrn1j0buxd1muog.jpg",
                    "img_name": "SWISS MISS PASTRY",
                    "alt_text": "SWISS MISS PASTRY",
                    "isButtonVisible": true,
                    "buttonText": "View All"
                }
            ]
        },
        {
            section: "Saviors",
            categories: [
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/1621336263762_50-pr2qhm2bqs1y95uvbvdb3q5uqjcpxq9hrri14bnis0.jpg",
                    "img_name": "BURGERS",
                    "alt_text": "BURGERS",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/1621336385045_97-pr2qhvgpn4eth9h7szfksnsgoe2e2pat520vx39l1s.jpg",
                    "img_name": "PIZZA",
                    "alt_text": "PIZZA",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/1622187517738_26-pr0rvqya7gfm2u2214x0d5nw3fvmnv8lmpch2si11s.jpg",
                    "img_name": "ROLLS",
                    "alt_text": "ROLLS",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/2021-05-26_17_30_11_Classic-Veg-Pattice-pr0nglvz48kyfj7uauhwptdffy9ggogm31411agki8.jpg",
                    "img_name": "PATTIES & PUFFS",
                    "alt_text": "PATTIES & PUFFS",
                    "isButtonVisible": true,
                    "buttonText": "View All"
                }
            ]
        },
        {
            section: "Chocolates",
            categories: [
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/MC-pr0o4u67ahr1po0stbjozp96piu2vsniqyime2j840.jpg",
                    "img_name": "CHOCOLATE BARS",
                    "alt_text": "CHOCOLATE BARS",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/MB-pr0o53kl6u3wxrn5aflyomvsndjr0rou491h6u5ads.jpg",
                    "img_name": "CHOCOLATE BOUQUETS",
                    "alt_text": "CHOCOLATE BOUQUETS",
                    "isButtonVisible": false
                },
                {
                    'img_url': "https://www.monginis.net/wp-content/uploads/elementor/thumbs/1632226044485_4-pr0s1tyofurf7z7xi9l304eai7w5hce24tclw9has0.jpg",
                    "img_name": "ROSE SENSATION BOUQUET",
                    "alt_text": "ROSE SENSATION BOUQUET",
                    "isButtonVisible": false
                },
                {
                    'img_url': "//www.monginis.net/wp-content/uploads/elementor/thumbs/1643866120701_79-pr0nb5fpfv4111575zkvqoy3af5qrxspo0rjqgjumo.jpg",
                    "img_name": "VALENTINE CHOCOLATE BAR",
                    "alt_text": "VALENTINE CHOCOLATE BAR",
                    "isButtonVisible": true,
                    "buttonText": "View All"
                }
            ]
        }
    ];

    return (
        <>
            {
                ShopCaKe.map((item) => (
                    <div className="outer-container">
                        <div className={`container-fluid category-container ${item.section === "3D Cake" || item.section === "Saviors"
                            ? 'highlight-background' : ''
                            }`}
                        >
                            <h2 className="custom-margin d-flex justify-content-start">
                                <span style={{ color: "black" }}><b>Shop By</b>&nbsp;</span>
                                <span style={{ color: "#EC268f" }}><b>{item.section}</b></span>
                            </h2>
                            <div className="row">
                                {item.categories.map((category) => (
                                    <CakeCategory
                                        imageUrl={category.img_url}
                                        altText={category.alt_text}
                                        categoryName={category.img_name}
                                        buttonVisible={category.isButtonVisible}
                                        buttonText={category.buttonText}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default ShopCakeCategory2;