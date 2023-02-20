import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';


function FangRunner({fangRunnerActive, handleToggleFangRunnerDrawer}) {

    const ratio = .566;
    const [style, setStyle] = useState({})
    const [fullscreen, setFullscreen] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", resize);
        resize();
    }, []);

    function resize() {
        console.log("resize");

        let margin = 100;
        if (window.innerWidth < 800) { margin = 0 }

        let width = (window.innerWidth - margin);
        let height = ratio * (window.innerWidth - margin)

        if (height > (window.innerHeight - 120)) {
            height = window.innerHeight - 120
            width = height / ratio;
        }

        setStyle({
            // border: "1px solid #000",
            margin: "0 0 0 " + margin / 2 + "px",
            width: width + "px",
            height: height + "px"
        });
        setFullscreen(false)
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "scroll";
    }

    function gameFullscreen() {
        document.body.style.overflow = "hidden";
        setStyle({
            position: "fixed",
            top: "-5px",
            left: "-5px",
            zIndex: "9999",
            margin: "0",
            width: window.innerWidth + 10 + "px",
            height: window.innerHeight + 10 + "px"
        });
        setFullscreen(true)
    }

    function ButtonX() {
        if (fullscreen) {
            return <div className="x" onClick={resize}>X</div>
        } else {
            return <div></div>
        }
    }


    return (
        <div id="game-drop-down" className={fangRunnerActive ? '' : ' hidden'}>
            <div className="game-container">
                <iframe id="test" style={style} src="https://fanggang.io/fangrunnergame/" title="Fang Runner"></iframe>
            </div>
            <div className="container text-center">
                <ButtonX />
                <Button className="pxlfngs-btn" onClick={gameFullscreen}>FULLSCREEN</Button>
            </div>
            <img
                id="pxl-arrow"
                src="./images/pxlfangarrow.png"
                width="103px"
                height='69px'
                onClick={() => handleToggleFangRunnerDrawer()}
            />
        </div>
    );
}

export default FangRunner;
