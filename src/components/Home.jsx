import React, { useEffect } from 'react';
import coffeeBackground from '../assets/coffeeBackground.gif';
import coffeeBackground2 from '../assets/coffeeBackground2.gif';

import coffeeBackground3 from '../assets/coffeeBackground3.gif';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
    return(
            <>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={coffeeBackground2} className="d-block w-100 hei" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='title'>The Art of Brewing: From Bean to Cup</h2>
                                <p className='description'>Discover the journey of coffee from the rich soils of coffee farms to your cup. Explore the different brewing methods, from French press to espresso, and learn how to master the perfect brew at home.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={coffeeBackground} className="d-block w-100 hei" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='title'>Espresso Unveiled: The Heartbeat of Coffee Culture</h2>
                                <p className='description'>Dive deep into the world of espresso, the foundation of many beloved coffee drinks. Learn about the intricate process of pulling a shot, the history behind this rich, bold beverage, and how it has shaped coffee culture globally.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Espresso+Machine+and+Barista%27s+Hand_9ed92eea-35a7-4187-b9d2-d105859e7166/Cinemagraph_watermark/1_small_files/cinemagraph.gif" className="d-block w-100 hei" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='title'>A Symphony of Flavors: Exploring Coffee Origins</h2>
                                <p className='description'>Explore how coffee beans from different regions of the world offer distinct flavors. Whether it’s the fruity notes from Ethiopia or the chocolatey richness from Colombia, each origin has a unique story to tell in every sip.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={coffeeBackground3} className="d-block w-100 hei" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='title'>The Science Behind Your Morning Cup: Understanding Coffee Chemistry</h2>
                                <p className='description'>Take a scientific look at the chemistry behind coffee. Learn how factors like temperature, grind size, and brewing time influence the flavor, aroma, and caffeine content of your favorite brew.</p>
                            </div>
                        </div>
                       

                    </div>
                </div>
            
            </>
        )
};

export default Home;
