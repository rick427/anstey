import React, { useState } from "react";
import { IoLogoWhatsapp, IoIosSearch } from "react-icons/io";
import { Select, Checkbox, Row, Col } from "antd";

import logo from "../../assets/logo.svg";
import banner1 from "../../assets/b-1.jpg";
import banner2 from "../../assets/b-2.jpg";
import banner3 from "../../assets/b-3.jpg";
import infoBanner from "../../assets/ban.jpg";
import contact from "../../assets/contact.jpg";
import sponser from "../../assets/sponser.png";
import sponser2 from "../../assets/sponser-2.png";
import headerBanner from "../../assets/header-banner.jpg";

import { StyledSection } from "./home-styles";
import Navbar from "../../components/navbar";
import colors from "../../utils/colors";

const { Option } = Select;

const NEEDS = [
  { id: 10, status: "I'm having surgery" },
  { id: 11, status: "I snore" },
  { id: 12, status: "I need a sleep test" },
  { id: 13, status: "I think i have sleep apnoea" },
  { id: 14, status: "I lack quality sleep" },
  { id: 15, status: "I need compression garments" },
  { id: 16, status: "I'm having/had a baby" },
  { id: 17, status: "I have an injury" },
  { id: 18, status: "I'm struggling with everyday tasks" },
  { id: 19, status: "I'm a carer of someone with a disability" },
  { id: 20, status: "I'm having continence issues" },
  { id: 21, status: "I have body ache and pains" },
  { id: 22, status: "I need a daily posture care" },
  { id: 23, status: "I need to hire an equipment" },
  { id: 24, status: "I need a service/repair on my mobility aid" },
  { id: 25, status: "I need some home modifications" },
  { id: 26, status: "I'm a DVA card holder" },
  { id: 27, status: "I'm an NDIS participant" },
];

const CATEGORIES = [
  { id: "avabbsa", category: "Bedroom" },
  { id: "vabshds", category: "Bathroom" },
  { id: "gaha", category: "Compression Garments" },
  { id: "cbxnas", category: "Continence" },
  { id: "gahaww", category: "Daily Assisted Living" },
];

export default function HomePage({ history }) {
  const [tabs, setTabs] = useState(1);
  const [needs, setNeeds] = useState([]);
  const [status, setStatus] = useState("");

  const handleTabs = (id) => {
    setTabs(id);
  };

  const checkActive = () => {
    if (tabs === 1)
      return { background: colors.offGreen, color: colors.primary };
  };
  const checkActive2 = () => {
    if (tabs === 2)
      return { background: colors.offGreen, color: colors.primary };
  };
  const checkActive3 = () => {
    if (tabs === 3)
      return { background: colors.offGreen, color: colors.primary };
  };

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const handleRoute = () => history.push("/products");

  return (
    <StyledSection banner={infoBanner} hbanner={headerBanner}>
      <Navbar />

      <div className="main">
        <header className="header">
          <div className="header-box flex-center">
            <img src={logo} className="logo" alt="app logo" />
          </div>
          <div className="header-box flex-center">
            <div className="contact">
              <span>
                <IoLogoWhatsapp />
              </span>
              <p>1300-651-796</p>
            </div>
          </div>
        </header>

        <article className="header-banner">
          <h2>
            Australia’s largest ranges of <span>health</span> supplies and{" "}
            <span>mobility</span> equipment.
          </h2>
        </article>

        <div className="search">
          <input type="text" placeholder="i know what am searching for" />
          <span>
            <IoIosSearch />
          </span>
        </div>

        <div className="tabs">
          <div
            style={checkActive()}
            onClick={() => handleTabs(1)}
            className="tab"
          >
            <p>help me find what i need</p>
          </div>
          <div
            style={checkActive2()}
            onClick={() => handleTabs(2)}
            className="tab"
          >
            <p>book in a consultation</p>
          </div>
          <div
            style={checkActive3()}
            onClick={() => handleTabs(3)}
            className="tab"
          >
            <p>just browsing</p>
          </div>
        </div>

        <div className="tabs-content">
          <div className="tabs-box center">
            <img
              src={tabs === 1 ? banner1 : tabs === 2 ? banner2 : banner3}
              alt="banner"
            />
          </div>
          {/* <div className="tabs-box">
            
          </div> */}
          <div className="tabs-box flex-column">
            {/* <h2>lorem ipsum dolor superhuman fiat</h2> */}
            {tabs === 1 ? (
              <>
                <p>
                  Ansteys is know for having 99% of everything medical and
                  phamacitical. One of our top priorities is to always help you
                  find what ever you need. Take a look at our store{" "}
                  <span onClick={() => history.push("/products")}>Here</span>
                </p>
                <Select
                  mode="multiple"
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="Filter by needs"
                >
                  {NEEDS.map((need) => (
                    <Option key={need.id} value={need.status}>
                      {need.status}
                    </Option>
                  ))}
                </Select>
                <button>contact us</button>
              </>
            ) : tabs === 2 ? (
              <>
                <p>
                  Ansteys has partnered with top consultants in the medical and
                  pharmacitical industry and we can help you book an appointment
                  with them directly. We ensure that you get the best of
                  services with 100% service delivery.
                </p>
                <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                  <Row gutter={[16, 16]}>
                    <Col span={8}>
                      <Checkbox value="A">Home Modifications</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B">Inspection Repairs</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C">Equipment</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D">Servicing</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                ,<button>contact us</button>
              </>
            ) : tabs === 3 ? (
              <>
                <p>
                  Do you want to scout our store and see the awesome products we
                  have ? Click{" "}
                  <span onClick={() => history.push("/products")}>Here</span>
                </p>
                <Select
                  style={{ width: "60%" }}
                  size="large"
                  placeholder="Filter by categories"
                >
                  {CATEGORIES.map((option) => (
                    <Option key={option.id} value={option.category}>
                      {option.category}
                    </Option>
                  ))}
                </Select>
                <button onClick={handleRoute}>browse</button>
              </>
            ) : null}
          </div>
        </div>

        <div className="info">
          <p>
            Australia's one stop shop for <span className="caps">All</span> your
            healthcare needs. we stock everything from maternity to mobility.
            Affectionately referred to as{" "}
            <span className="alt">"The Bunnings"</span> of healthcare. If it's
            not in stock we'll find it !
          </p>

          <div className="sponsers">
            <img src={sponser} alt="sponser" />
            <img src={sponser2} alt="sponser" />
          </div>
        </div>

        <div className="footer">
          <div className="footer-box text">
            <h2>Located in two convenient locations here in Australia.</h2>

            <div className="address">
              <h3>02 4040 6161</h3>
              <p>70 brunker road, broadmeadow NSW 2292</p>
            </div>
            <div className="address">
              <h3>02 4058 1300</h3>
              <p>4/25 mitchell driver, east maitland NSW 2323</p>
            </div>
            <div>
              <h3>opening hours</h3>

              <div className="flex">
                <p className="day">Mon-Fri</p>
                <p className="time">| 8:30 A.M - 5:00 P.M</p>
              </div>
              <div className="flex">
                <p className="day">Saturdays</p>
                <p className="time">| 9:00 A.M - 12:00 P.M</p>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
