import React from 'react'
import BeerImg from "../../assets/beers.png";
import NewBeerImg from "../../assets/new-beer.png";
import RandomBeerImg from "../../assets/random-beer.png";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepg">
      <Link to="/allbeerspage">
        <h2>All Beers</h2>
        <img src={BeerImg} alt="BeerImg" className="beer-img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus, laboriosam ab qui repellat quae tempora asperiores
          voluptas molestias hic laudantium nam aperiam perspiciatis quos!
          Eligendi amet excepturi eius architecto!
        </p>
      </Link>
      <Link to="/newbeerspage">
        <h2>New Beers</h2>
        <img src={NewBeerImg} alt="NewBeerImg" className="new-beer-img" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit exercitationem repellat earum saepe, incidunt quisquam
          perferendis dolore unde at voluptas beatae itaque ex suscipit qui
          delectus deserunt veritatis. Excepturi, fugit.
        </p>
      </Link>
      <Link to="/randombeerspage">
        <h2>Random Beers</h2>
        <img
          src={RandomBeerImg}
          alt="RandomNewBeerImg"
          className="Random-new-beer-img"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde ex itaque vitae rem asperiores hic iusto iste dolorum veritatis ullam est, sequi optio saepe. Accusamus obcaecati animi dolorum deserunt.</p>
      </Link>
    </div>
  );
}

export default HomePage