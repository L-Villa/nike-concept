import React from "react";
import "./Header.css";
import search from "../images/icons/search.png";
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
                      <div className="dropdown-link major-link">Shoes</div>
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
                      <div className="dropdown-link major-link">Clothing</div>
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
                      <div className="dropdown-link major-link">Shoes</div>
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
                      <div className="dropdown-link major-link">Clothing</div>
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
              <div class="dropdown-content"></div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Customize</div>
              <div class="dropdown-content"></div>
            </div>
            <div class="dropdown">
              <div className="nav-link">Sale</div>
              <div class="dropdown-content"></div>
            </div>
          </div>
          <div className="nav-icons">
            <img className="nav-icon" src={shoppingCart} alt="" />
            <img className="nav-icon" src={search} alt="" />
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
