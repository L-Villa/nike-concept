import React from "react";
import "./Header.css";
import shoppingCart from "../images/icons/shoppingCart.png";

export default function Header() {
  return (
    <div>
      <section className="header-content">
        <div className="header-logo"></div>
        <nav>
          <div className="nav-links nav-links-left">
            <div class="dropdown">
              <div className="nav-link">New Releases</div>
              <div class="dropdown-content">
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">
                    SHOP ALL NEW ARRIVALS
                  </div>
                  <div className="dropdown-link major-link">
                    SNKRS LAUNCH CALENDAR
                  </div>
                  <div className="dropdown-link major-link">
                    BEST OF AIR MAX SHOES
                  </div>
                  <div className="dropdown-link major-link">
                    SUMMER ESSENTIALS
                  </div>
                  <div className="dropdown-link major-link">
                    EXPRESS YOUR STYLE
                  </div>
                  <div className="dropdown-link major-link">MEMBER ACCESS</div>
                  <div className="dropdown-link major-link">NEW TO SALE</div>
                </div>
                <div className="dropdown-link-container">
                  <div className="col-2">
                    <div className="col">
                      <div className="dropdown-link major-link">
                        NEW FOR MEN
                      </div>
                      <div className="dropdown-link minor-link">Shoes</div>
                      <div className="dropdown-link minor-link">Clothing</div>
                      <div className="dropdown-link minor-link">Equipment</div>
                      <div className="dropdown-link minor-link">
                        Shop All New
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        NEW FOR WOMEN
                      </div>
                      <div className="dropdown-link minor-link">Shoes</div>
                      <div className="dropdown-link minor-link">Clothing</div>
                      <div className="dropdown-link minor-link">Equipment</div>
                      <div className="dropdown-link minor-link">
                        Shop All New
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">NEW FOR KIDS</div>
                  <div className="dropdown-link minor-link">Boys Shoes</div>
                  <div className="dropdown-link minor-link">Boys Clothing</div>
                  <div className="dropdown-link minor-link">Girls Shoes</div>
                  <div className="dropdown-link minor-link">Girls Clothing</div>
                  <div className="dropdown-link minor-link">Shop All New</div>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Men</div>
              <div class="dropdown-content">
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">NEW RELEASES</div>
                  <div className="dropdown-link major-link">BEST SELLERS</div>
                  <div className="dropdown-link major-link">
                    BEST OF AIR MAX SHOES
                  </div>
                  <div className="dropdown-link major-link">
                    EXPRESS YOUR STYLE
                  </div>
                  <div className="dropdown-link major-link">
                    BAGS & BACKPACKS
                  </div>
                  <div className="dropdown-link major-link">
                    GEAR UP FOR SPORT
                  </div>
                  <div className="dropdown-link major-link">WILD RUN</div>
                  <div className="dropdown-link major-link">
                    SALE - UP TO 40% OFF
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="col-2">
                    <div className="col">
                      <div className="dropdown-link major-link">SHOES</div>
                      <div className="dropdown-link minor-link">Lifestyle</div>
                      <div className="dropdown-link minor-link">Running</div>
                      <div className="dropdown-link minor-link">Basketball</div>
                      <div className="dropdown-link minor-link">Jordan</div>
                      <div className="dropdown-link minor-link">
                        Training & Gym
                      </div>
                      <div className="dropdown-link minor-link">Soccer</div>
                      <div className="dropdown-link minor-link">Golf</div>
                      <div className="dropdown-link minor-link">
                        Track & Field
                      </div>
                      <div className="dropdown-link minor-link">
                        Skateboarding
                      </div>
                      <div className="dropdown-link minor-link">Tennis</div>
                      <div className="dropdown-link minor-link">Football</div>
                      <div className="dropdown-link minor-link">
                        Slides & Sandals
                      </div>
                      <div className="dropdown-link minor-link">
                        Shoes $100 & Under
                      </div>
                      <div className="dropdown-link minor-link">All shoes</div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">CLOTHING</div>
                      <div className="dropdown-link minor-link">
                        Tops & T-Shirts
                      </div>
                      <div className="dropdown-link minor-link">Shorts</div>
                      <div className="dropdown-link minor-link">
                        Hoodies & Sweatshirts
                      </div>
                      <div className="dropdown-link minor-link">
                        Pants & Tights
                      </div>
                      <div className="dropdown-link minor-link">
                        Jackets & Vests
                      </div>
                      <div className="dropdown-link minor-link">Swimwear</div>
                      <div className="dropdown-link minor-link">Polos</div>
                      <div className="dropdown-link minor-link">
                        Nike Pro & Baselayer
                      </div>
                      <div className="dropdown-link minor-link">Yoga</div>
                      <div className="dropdown-link minor-link">
                        Socks & Underwear
                      </div>
                      <div className="dropdown-link minor-link">Big & Tall</div>
                      <div className="dropdown-link minor-link">
                        All Clothing
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        ACCESSORIES & EQUIPMENT
                      </div>
                      <div className="dropdown-link minor-link">
                        Bags & Backpacks
                      </div>
                      <div className="dropdown-link minor-link">
                        Apple Watch Nike
                      </div>
                      <div className="dropdown-link minor-link">
                        Hats, Visors & Headbands
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">
                    SHOP COLLECTION
                  </div>
                  <div className="dropdown-link minor-link">Golf</div>
                  <div className="dropdown-link minor-link">Jordan</div>
                  <div className="dropdown-link minor-link">Soccer</div>
                  <div className="dropdown-link minor-link">Running</div>
                  <div className="dropdown-link minor-link">Basketball</div>
                  <div className="dropdown-link minor-link">Tennis</div>
                  <div className="dropdown-link minor-link">NikeLab</div>
                  <div className="dropdown-link minor-link">Training & Gym</div>
                  <div className="dropdown-link minor-link">Football</div>
                  <div className="dropdown-link minor-link">Baseball</div>
                  <div className="dropdown-link minor-link">
                    Nike Sportswear
                  </div>
                  <div className="dropdown-link minor-link">ACG</div>
                  <div className="dropdown-link minor-link">Skateboarding</div>
                  <div className="dropdown-link minor-link">Lacrosse</div>
                  <div className="dropdown-link minor-link">Fan Gear</div>
                  <div className="dropdown-link minor-link">Nike FlyEase</div>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Women</div>
              <div class="dropdown-content">
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">NEW RELEASES</div>
                  <div className="dropdown-link major-link">BEST SELLERS</div>
                  <div className="dropdown-link major-link">
                    BEST OF AIR MAX SHOES
                  </div>
                  <div className="dropdown-link major-link">
                    EXPRESS YOUR STYLE
                  </div>
                  <div className="dropdown-link major-link">
                    BAGS & BACKPACKS
                  </div>
                  <div className="dropdown-link major-link">
                    GEAR UP FOR SPORT
                  </div>
                  <div className="dropdown-link major-link">NEW IN YOGA</div>
                  <div className="dropdown-link major-link">ICON CLASH</div>
                  <div className="dropdown-link major-link">
                    SALE - UP TO 40% OFF
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="col-2">
                    <div className="col">
                      <div className="dropdown-link major-link">SHOES</div>
                      <div className="dropdown-link minor-link">Lifestyle</div>
                      <div className="dropdown-link minor-link">Running</div>
                      <div className="dropdown-link minor-link">Basketball</div>
                      <div className="dropdown-link minor-link">Jordan</div>
                      <div className="dropdown-link minor-link">
                        Training & Gym
                      </div>
                      <div className="dropdown-link minor-link">Soccer</div>
                      <div className="dropdown-link minor-link">
                        Track & Field
                      </div>
                      <div className="dropdown-link minor-link">
                        Skateboarding
                      </div>
                      <div className="dropdown-link minor-link">Tennis</div>
                      <div className="dropdown-link minor-link">
                        Slides & Sandals
                      </div>
                      <div className="dropdown-link minor-link">
                        Shoes $100 & Under
                      </div>
                      <div className="dropdown-link minor-link">All shoes</div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">CLOTHING</div>
                      <div className="dropdown-link minor-link">
                        Pants & Leggings
                      </div>
                      <div className="dropdown-link minor-link">
                        Sports Bras
                      </div>
                      <div className="dropdown-link minor-link">
                        Tops & T-Shirts
                      </div>
                      <div className="dropdown-link minor-link">Shorts</div>
                      <div className="dropdown-link minor-link">
                        Hoodies & Sweatshirts
                      </div>
                      <div className="dropdown-link minor-link">
                        Jackets & Vests
                      </div>
                      <div className="dropdown-link minor-link">Swimwear</div>
                      <div className="dropdown-link minor-link">
                        Nike Pro & Baselayer
                      </div>
                      <div className="dropdown-link minor-link">Plus Size</div>
                      <div className="dropdown-link minor-link">
                        Skirts & Dresses
                      </div>
                      <div className="dropdown-link minor-link">Yoga</div>
                      <div className="dropdown-link minor-link">Socks</div>
                      <div className="dropdown-link minor-link">
                        All Clothing
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        ACCESSORIES & EQUIPMENT
                      </div>
                      <div className="dropdown-link minor-link">
                        Bags & Backpacks
                      </div>
                      <div className="dropdown-link minor-link">
                        Apple Watch Nike
                      </div>
                      <div className="dropdown-link minor-link">
                        Hats, Visors & Headbands
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">
                    SHOP COLLECTION
                  </div>
                  <div className="dropdown-link minor-link">Golf</div>
                  <div className="dropdown-link minor-link">Jordan</div>
                  <div className="dropdown-link minor-link">Soccer</div>
                  <div className="dropdown-link minor-link">Running</div>
                  <div className="dropdown-link minor-link">Basketball</div>
                  <div className="dropdown-link minor-link">Tennis</div>
                  <div className="dropdown-link minor-link">NikeLab</div>
                  <div className="dropdown-link minor-link">Training & Gym</div>
                  <div className="dropdown-link minor-link">Football</div>
                  <div className="dropdown-link minor-link">Baseball</div>
                  <div className="dropdown-link minor-link">
                    Nike Sportswear
                  </div>
                  <div className="dropdown-link minor-link">ACG</div>
                  <div className="dropdown-link minor-link">Skateboarding</div>
                  <div className="dropdown-link minor-link">Lacrosse</div>
                  <div className="dropdown-link minor-link">Fan Gear</div>
                  <div className="dropdown-link minor-link">Nike FlyEase</div>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Kids</div>
              <div class="dropdown-content">
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">NEW RELEASES</div>
                  <div className="dropdown-link major-link">BEST SELLERS</div>
                  <div className="dropdown-link major-link">
                    BEST OF AIR MAX SHOES
                  </div>
                  <div className="dropdown-link major-link">
                    EXPRESS YOUR STYLE
                  </div>
                  <div className="dropdown-link major-link">
                    BAGS & BACKPACKS
                  </div>
                  <div className="dropdown-link major-link">
                    GEAR UP FOR SPORT
                  </div>
                  <div className="dropdown-link major-link">
                    FLORAL COLLECTION
                  </div>
                  <div className="dropdown-link major-link">
                    LIGHTWEIGHT LAYERS
                  </div>
                  <div className="dropdown-link major-link">
                    SALE - UP TO 40% OFF
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="col-2">
                    <div className="col">
                      <div className="dropdown-link major-link">BOYS SHOES</div>
                      <div className="dropdown-link minor-link">
                        Big Kids (3.5Y - 7Y)
                      </div>
                      <div className="dropdown-link minor-link">
                        Little Kids (10.5C - 3Y)
                      </div>
                      <div className="dropdown-link minor-link">
                        Baby & Toddler (0C - 10C)
                      </div>
                      <div className="dropdown-link minor-link">Lifestyle</div>
                      <div className="dropdown-link minor-link">Running</div>
                      <div className="dropdown-link minor-link">All shoes</div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        BOYS CLOTHING
                      </div>
                      <div className="dropdown-link minor-link">
                        Big Kids (XS – XL)
                      </div>
                      <div className="dropdown-link minor-link">
                        Little Kids (4 – 7)
                      </div>
                      <div className="dropdown-link minor-link">
                        Baby & Toddler (0M – 4T)
                      </div>
                      <div className="dropdown-link minor-link">
                        Hoodies & Sweatshirts
                      </div>
                      <div className="dropdown-link minor-link">
                        Pants & Tights
                      </div>
                      <div className="dropdown-link minor-link">Jackets</div>
                      <div className="dropdown-link minor-link">
                        Tops & T-Shirts
                      </div>
                      <div className="dropdown-link minor-link">
                        Nike Pro & Compression
                      </div>
                      <div className="dropdown-link minor-link">Shorts</div>
                      <div className="dropdown-link minor-link">
                        All Clothing
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        GIRLS SHOES
                      </div>
                      <div className="dropdown-link minor-link">
                        Big Kids (3.5Y - 7Y)
                      </div>
                      <div className="dropdown-link minor-link">
                        Little Kids (10.5C - 3Y)
                      </div>
                      <div className="dropdown-link minor-link">
                        Baby & Toddler (0C - 10C)
                      </div>
                      <div className="dropdown-link minor-link">Lifestyle</div>
                      <div className="dropdown-link minor-link">Running</div>
                      <div className="dropdown-link minor-link">All shoes</div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        GIRLS CLOTHING
                      </div>
                      <div className="dropdown-link minor-link">
                        Big Kids (XS – XL)
                      </div>
                      <div className="dropdown-link minor-link">
                        Little Kids (4 – 7)
                      </div>
                      <div className="dropdown-link minor-link">
                        Baby & Toddler (0M – 4T)
                      </div>
                      <div className="dropdown-link minor-link">
                        Hoodies & Sweatshirts
                      </div>
                      <div className="dropdown-link minor-link">
                        Pants & Tights
                      </div>
                      <div className="dropdown-link minor-link">Jackets</div>
                      <div className="dropdown-link minor-link">
                        Tops & T-Shirts
                      </div>
                      <div className="dropdown-link minor-link">
                        Sports Bras
                      </div>
                      <div className="dropdown-link minor-link">Shorts</div>
                      <div className="dropdown-link minor-link">
                        All Clothing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">BABY & TODDLER</div>
                  <div className="dropdown-link minor-link">Baby Girl</div>
                  <div className="dropdown-link minor-link">Baby Boy</div>
                  <div className="dropdown-link minor-link">SAll Shoes</div>
                  <div className="dropdown-link minor-link">All Clothing</div>
                  <div className="dropdown-link minor-link">Baby Box Sets</div>
                  <div className="dropdown-link major-link">
                    ACCESSORIES & EQUIPMENT
                  </div>
                  <div className="dropdown-link minor-link">
                    Bags & Backpacks
                  </div>
                  <div className="dropdown-link minor-link">Socks</div>
                  <div className="dropdown-link minor-link">
                    Hats & Headwear
                  </div>
                  <div className="dropdown-link major-link">
                    SHOP COLLECTION
                  </div>
                  <div className="dropdown-link minor-link">Rep Your City</div>
                  <div className="dropdown-link minor-link">
                    Nike Adventure Club
                  </div>
                  <div className="dropdown-link minor-link">
                    Slides & Sandals
                  </div>
                  <div className="dropdown-link minor-link">
                    Surf & Swimwear
                  </div>
                  <div className="dropdown-link minor-link">Jordan Kids</div>
                  <div className="dropdown-link minor-link">Customize</div>
                  <div className="dropdown-link minor-link">Fan Gear</div>
                  <div className="dropdown-link minor-link">Nike FlyEase</div>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Customize</div>
              <div class="dropdown-content">
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">
                    NIKE BY YOU NEW RELEASES
                  </div>
                  <div className="dropdown-link major-link">
                    BASKETBALL BY YOU
                  </div>
                  <div className="dropdown-link major-link">BLAZER BY YOU</div>
                </div>
                <div className="dropdown-link-container">
                  <div className="col-2">
                    <div className="col">
                      <div className="dropdown-link major-link">MENS</div>
                      <div className="dropdown-link minor-link">Lifestyle</div>
                      <div className="dropdown-link minor-link">Running</div>
                      <div className="dropdown-link minor-link">Basketball</div>
                      <div className="dropdown-link minor-link">Jordan</div>
                      <div className="dropdown-link minor-link">Football</div>
                      <div className="dropdown-link minor-link">
                        Training & Gym
                      </div>
                      <div className="dropdown-link minor-link">Soccer</div>
                      <div className="dropdown-link minor-link">
                        Track & Field
                      </div>
                      <div className="dropdown-link minor-link">
                        Skateboarding
                      </div>
                      <div className="dropdown-link minor-link">Tennis</div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">WOMEN</div>
                      <div className="dropdown-link minor-link">Lifestyle</div>
                      <div className="dropdown-link minor-link">Running</div>
                      <div className="dropdown-link minor-link">Basketball</div>
                      <div className="dropdown-link minor-link">Jordan</div>
                      <div className="dropdown-link minor-link">
                        Training & Gym
                      </div>
                      <div className="dropdown-link minor-link">Soccer</div>
                      <div className="dropdown-link minor-link">
                        Track & Field
                      </div>
                      <div className="dropdown-link minor-link">
                        Skateboarding
                      </div>
                      <div className="dropdown-link minor-link">Tennis</div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">AIR MAX BY YOU</div>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Sale</div>
              <div class="dropdown-content">
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">
                    ALL SALE - UP TO 40% OFF
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="col-2">
                    <div className="col">
                      <div className="dropdown-link major-link">MEN'S SALE</div>
                      <div className="dropdown-link minor-link">Shoes</div>
                      <div className="dropdown-link minor-link">Clothing</div>
                      <div className="dropdown-link minor-link">Equipment</div>
                    </div>
                    <div className="col">
                      <div className="dropdown-link major-link">
                        WOMEN'S SALE
                      </div>
                      <div className="dropdown-link minor-link">Shoes</div>
                      <div className="dropdown-link minor-link">Clothing</div>
                      <div className="dropdown-link minor-link">Equipment</div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-link-container">
                  <div className="dropdown-link major-link">KID'S SALE</div>
                  <div className="dropdown-link minor-link">Shoes</div>
                  <div className="dropdown-link minor-link">Clothing</div>
                  <div className="dropdown-link minor-link">Equipment</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-icons">
            <img className="nav-icon" src={shoppingCart} alt="" />
            <div class="container">
              <div class="searchbox">
                <input
                  type="text"
                  class="searchbox__input"
                  placeholder="Search"
                />
                <svg
                  class="searchbox__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </div>
            </div>
            <div className="svg-container">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <rect width="10" height="10" />
                <rect y="20" width="10" height="10" />
                <rect x="20" width="10" height="10" />
                <rect y="40" width="10" height="10" />
                <rect x="20" y="20" width="10" height="10" />
                <rect x="20" y="40" width="10" height="10" />
                <rect x="40" width="10" height="10" />
                <rect x="40" y="20" width="10" height="10" />
                <rect x="40" y="40" width="10" height="10" />
              </svg>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
