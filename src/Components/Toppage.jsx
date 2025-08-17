function Toppage({
  Tital = "Home",
  bgImage = "assets/images/backgrounds/page-header-bg.jpg",
}) {
  return (
    <>
      <section
        className="page-header clearfix"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="container">
          <div className="page-header__inner text-center clearfix">
            <ul className="thm-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{Tital}</li>
            </ul>
            <h2>{Tital}</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Toppage;
