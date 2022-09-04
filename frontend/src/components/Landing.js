import NavBar from "./NavBar";
import YoutubeEmbed from "./YotubeEmbed";

function Landing() {
  return (
    <div>
        <NavBar></NavBar>
        
        <div className="titleCen">
            <div className="leftBar">
                <div className="leftBarImg">
                    <img src={require("../img/treesMain.png")} width="500" />
                </div>
            </div>
            <div className="rightBar">
                <h1 className="rightBarTitle"> Using machine learning to detect forest fires before they happen.</h1>
                
                <h3> We built our CNN model from the ground up using satellite imagery collected from the <a href="https://sentinel.esa.int/web/sentinel/missions/sentinel-2"> Sentinel-2 Satellite</a> and data from 
                the <a href="https://mobile.twitter.com/firewatchbot"> Firewatch Bot</a>.</h3>
                
                <h3> Check out our <a href="/demo">Demo</a>! </h3>

                <h3> Project built by <a href="https://github.com/aadityayadav">Aaditya Yadav</a>, <a href="https://github.com/echen333">Edward Chen</a>, Aditya Swarup, and Ojas Varma.</h3>
            </div>
        </div>
        <div className="howItWorksBef">
            {/* get pseudoelement before working in react */}
        </div>
        <div className="howItWorks">
            <div className="halfContainers">
                <h1>Forest fires threaten stable ecosystems. </h1> 
                <h3>They put stable populations of forest-dwelling species at risk, forcing them to find new homes.
                     They put our homes and communities in danger too, causing several billions in damage every year. </h3>
            </div>
            <div className="halfContainers">
                <img src={require('../img/wildFireGif.gif')} width="500" />
            </div>
        </div>
            <YoutubeEmbed embedId="DC8niUxdg2c" />
        <div className="ourModel">
            <div className="halfContainers">
                <h1>Our Model</h1>
                <h3>Our model is trained on thousands of satellite images to predict risk of forest fires starting and watch the status of current wildfires.
                    We use a convolutional neural network to classify live satellite images and display hotspots for wildfire activity and risk.
                </h3>
            </div>
            <div className="halfContainers">
                <img src={require('../img/CaliforniaImages.png')} width="500" />
            </div>
        </div>
        <div className="ourModelAfter">
        </div>
    </div>
  );
}

export default Landing; 