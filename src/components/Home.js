import React from "react";
import Navbar from "./Navbar.js";
//import Image from "react-image-resizer";
import "../style/style1.css";
import img1 from "../image/TCS PS_0.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={img1} alt="Paris" class="center" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error
          possimus esse, id necessitatibus reprehenderit. Autem quos facilis
          ipsa, debitis praesentium veniam reprehenderit dolores ad fuga libero
          esse incidunt necessitatibus nostrum voluptas iure modi blanditiis
          labore cupiditate id aspernatur harum sed eum accusantium. Velit
          officia qui, facilis quis dicta nam non impedit odio, tempore dolor
          quae sequi reiciendis alias iste nesciunt praesentium neque quaerat
          quisquam. Excepturi fugiat sapiente odio dicta temporibus quo hic
          illo, eius impedit veniam nihil, architecto dolore deserunt? Fugit
          consectetur repellendus assumenda autem totam consequatur nemo amet
          unde, numquam nisi dolore similique aliquam temporibus debitis
          veritatis laboriosam!
        </p>
      </div>
    </>
  );
};

export default Home;
