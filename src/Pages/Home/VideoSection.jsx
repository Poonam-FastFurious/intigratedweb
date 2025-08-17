function VideoSection() {
  return (
    <>
      <section
        class="video-one video-one--two jarallax clearfix"
        data-jarallax=""
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg)",
        }}
      >
        <div class="video-one-border"></div>
        <div class="video-one-border video-one-border-two"></div>
        <div class="video-one-border video-one-border-three"></div>
        <div class="video-one-border video-one-border-four"></div>
        <div class="video-one-border video-one-border-five"></div>
        <div class="video-one-border video-one-border-six"></div>

        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="video-one__wrpper">
                <div class="video-one__left">
                  <div class="video-one__leaf"></div>
                  <h2 class="video-one__title">
                    Agriculture Matters to <br />
                    the Future of Development
                  </h2>
                  <div class="video-one__btn">
                    <a href="#" class="thm-btn">
                      Discover more
                    </a>
                  </div>
                </div>
                <div class="video-one__right">
                  <div
                    class="icon wow zoomIn"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <a
                      class="video-popup"
                      title=" Video"
                      href="https://www.youtube.com/watch?v=8DP4NgupAhI"
                    >
                      <span class="icon-play-button-1"></span>
                    </a>
                    <span class="border-animation border-1"></span>
                    <span class="border-animation border-2"></span>
                    <span class="border-animation border-3"></span>
                  </div>
                  <div class="title">
                    <h2>Watch the video</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoSection;
