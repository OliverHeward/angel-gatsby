import React from 'react';
import Slider from "react-slick"

const ProjectShowreel = (project_group) => {
    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: true,
            },
          },
          {
            breakpoint: 1023,
            settings: {
              centerMode: true,
              slidesToShow: 2,
              dots: true,
            },
          },
        ],
      }

    return (
        <div className="images-carousel">
        <Slider {...settings}>
          <div>
            <img src={project_group.showreel_group.image_0.source_url} />
          </div>
          <div>
            <img src={project_group.showreel_group.image_1.source_url} />
          </div>
          <div>
            <img src={project_group.showreel_group.image_2.source_url} />
          </div>
        </Slider>
        <p className="copy-under-image content-width">
          {project_group.project_text}
        </p>
      </div>
    )
}

export default ProjectShowreel