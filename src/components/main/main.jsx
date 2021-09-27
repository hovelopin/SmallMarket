function Main() {
  return(
    /* 상단에 navbar */
    <div className="indexWrap">
      <ul className="indexContainer">
        <li className="indexItems">
          <img className="indexItems_01" src="img/pix01.jpeg" ></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
        <li className="indexItems">
          <img className="indexItems_01" src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
        <li className="indexItems">
          <img className="indexItems_01" src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
      </ul>
      <hr className="indexHr"></hr>
      
      <h1 className="indexH1">MD's Pick</h1>
      <ul className="mdContainer">
        <li className="mdItems">
          <img className="mdItems_01" src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
        <li className="mdItems">
          <img className="mdItems_01" src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
      </ul>

      <img src="img/pix01.jpeg" width="100%" height="400px"></img>

      <ul className="footerContainer">
        <li className="footerItems">
          <p className="ftItems_title">The Cooperative</p>
          <p className="ftItems_sub">The Cooperative</p>
          <p className="ftItems_sub">The Cooperative</p>
          <p className="ftItems_sub">The Cooperative</p>
        </li>
        <li className="footerItems">
          <p className="ftItems_title">Connect</p>
          <p className="ftItems_sub">Connect</p>
          <p className="ftItems_sub">Connect</p>
          <p className="ftItems_sub">Connect</p>
        </li>
        <li className="footerItems">
          <p className="ftItems_title">Visit</p>
          <p className="ftItems_sub">Visit</p>
          <p className="ftItems_sub">Visit</p>
          <p className="ftItems_sub">Visit</p>
        </li>
      </ul>
      <p className="copyright">@2021 SmallMarket | by hojin , junho </p>
    </div>
  );
}

export default Main;