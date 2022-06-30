import React, { Component } from "react";

import KCarousel from "../components/KCarousel";
import KSection from "../components/KSection";
import KSubsection from "../components/KSubsection";

class Carousels extends Component {
  render() {
    return (
      <div className="main">
        <KSection
          title="Carousels"
          content={
            <>
              <KSubsection
                title="Basic"
                content={
                  <>
                    <KCarousel
                      content={[
                        {
                          title: "Card",
                          background:
                            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                          content: <div></div>,
                        },
                        {
                          title: "Card",
                          background:
                            "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
                          content: <div></div>,
                        },
                        {
                          title: "Card",
                          background:
                            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
                        },
                      ]}
                    />
                  </>
                }
              />
              <KSubsection
                title="Horizontal Slide"
                content={
                  <>
                    <KCarousel
                      style="horizontal"
                      content={[
                        {
                          title: "Card",
                          background:
                            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                          content: <div></div>,
                        },
                        {
                          title: "Card",
                          background:
                            "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
                          content: <div></div>,
                        },
                        {
                          title: "Card",
                          background:
                            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
                        },
                      ]}
                    />
                  </>
                }
              />
              <KSubsection
                title="Vertical Slide"
                content={
                  <>
                    <KCarousel
                      style="vertical"
                      content={[
                        {
                          title: "Card",
                          background:
                            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                          content: <div></div>,
                        },
                        {
                          title: "Card",
                          background:
                            "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
                          content: <div></div>,
                        },
                        {
                          title: "Card",
                          background:
                            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
                        },
                      ]}
                    />
                  </>
                }
              />
            </>
          }
        />
      </div>
    );
  }
}

export default Carousels;
