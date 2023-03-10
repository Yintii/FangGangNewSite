import { useState, useEffect } from 'react';



function FangRunner({fangRunnerActive, handleToggleFangRunnerDrawer}) {

    const ratio = .566;
    const [style, setStyle] = useState({})

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
            border: "1px solid #000",
            margin: "0 auto",
            borderRadius: '50px',
            marginTop: '2rem',
            marginBottom: '2rem',
            width: "80%",
            height: "670px"
        });
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "scroll";
    }

 


    return (
        <div id="game-drop-down" className={fangRunnerActive ? 'droppingDown' : 'closingUp'}>
            <h3>PLAY FANGRUNNER.</h3>
            <div className="game-container">
                <iframe id="test" style={style} src="https://fanggang.io/fangrunnergame/" title="Fang Runner"></iframe>
            </div>
            <p>
                Run your way through New Fang City while avoiding flippers and paper hands to collect as many precious diamonds as possible! 
            </p>
            <p>
                By holding a Fangster you start your run with a shield power up. Stay on the look out for Fang Runner competitions during celebrations and other events.
            </p>
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
