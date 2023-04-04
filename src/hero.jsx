const Hero = () => {
  return (
    <div className="hero">
        <div className="main-hero">
            <div className="hero-image">
                <img class="mobile-image" src="assets/images/image-web-3-mobile.jpg" alt="mobile" />
                <img class="desktop-image" src="assets/images/image-web-3-desktop.jpg" alt="mobile" />
            </div>
            <div className="hero-text">
                <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="hero-content">
                <p>
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <button class="hero-button">
                    Read More
                </button>
            </div>
        </div>
        <div className="sub-hero">
            <div className="sub-hero-header">
                <h1>New</h1>
            </div>
            <div className="sub-hero-content">
                <h2>Hydrogen VS Electric Cars</h2>
                <p>Will hyrdrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="underline"></div>
            <div className="sub-hero-content">
                <h2>The Downsides of AI Artistry</h2>
                <p>What are the possible adverse effects of on-demand AI Image generation?</p>
            </div>
            <div className="underline"></div>
            <div className="sub-hero-content">
                <h2>Is VC Funding Drying Up?</h2>
                <p>Private funding by VC frims is down 50% YOY. We take a look at what that means.</p>                
            </div>
        </div>
        <div className="hero-footer">
            <div className="hero-footer-item">
                <div className="hero-footer-image">
                    <img src="/assets/images/image-retro-pcs.jpg" alt="Retro"/>
                </div>
                <div className="hero-footer-content">
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="hero-footer-item">
                <div className="hero-footer-image">
                    <img src="/assets/images/image-top-laptops.jpg" alt="Top Laptops"/>
                </div>  
                <div className="hero-footer-content">
                    <h1>02</h1>
                    <h2>Top 10 Laptops of 2022</h2>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="hero-footer-item">
                <div className="hero-footer-image">
                    <img src="/assets/images/image-gaming-growth.jpg" alt="Gaming Growth"/>
                </div>
                <div className="hero-footer-content">
                    <h1>03</h1>
                    <h2>The Growth of Gaming</h2>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
