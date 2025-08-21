import "./App.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideShowCard from "./components/slideShowCard";
import { useEffect, useState } from "react";
import PlayButton from "./components/icons/playButton";
import PauseButton from "./components/icons/pauseButton";
import PlaySound from "./components/icons/playSound";


const slideShowData = [
    {
        imageUrl: "https://www.aljazeera.com/wp-content/uploads/2025/08/AFP__20250819__69XP2KE__v3__HighRes__IndiaChinaDiplomacy-1755695824.jpg?resize=770%2C513&quality=80",
        title: "Did Trump’s tariff war force India and China to mend ties?",
        description: "China and India have agreed to resume trade ties and move towards resolving their longstanding border dispute."
    },
    {
        imageUrl: "https://www.livemint.com/lm-img/img/2025/08/17/600x338/Mahavatar_Narsimha_1753886696510_1753886696695_1755447969696.jpg",
        title: "Mahavtar Narsimha' box office collection day 27",
        description: "Ashwin Kumar's animated film, 'Mahavatar Narsimha,' has achieved remarkable box office success, grossing ₹217.10 crore in India and surpassing ₹250 crore globally in 27 days"
    },
    {
        imageUrl: "https://i.ytimg.com/vi/A2JKQy2sHts/maxresdefault.jpg",
        title: "HISTORIC VICTORY India’s Minerva Academy NorwayCup 2025",
        description: "Witness one of the most *iconic moments in youth football history**! India's **Minerva Academy FC* delivered a jaw-dropping performance in the *Norway Cup 2025 finale**, crushing Norwegian team **Sverresborg Fotball* with an unbelievable scoreline of **16-1**!"
    },
    {
        imageUrl: "https://i.ytimg.com/vi/3beNfhZXSo8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGbCCBawZXjcrY6Ff9ruw3VoQ9nQ",
        title: "Mumbai Floods LIVE: Heavy Rains Ravage Mumbai; Roads Submerged...",
        description: "Mumbai is drowning again. Nearly 300 mm of rain in 24 hours has turned India’s financial capital into a waterpark nobody asked for. Roads became rivers, trains broke down, flights were diverted, and schools shut"
    }
]

function App() {
    const [accessMode, setAccessMode] = useState<boolean>(true);
    const [autoPlay, setAutoPlay] = useState<boolean>(true);

    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                const element = document.querySelector('[data-type="next"]');
                (element as HTMLElement)?.click();
            } else if (e.key === 'ArrowLeft') {
                const element = document.querySelector('[data-type="prev"]');
                (element as HTMLElement)?.click();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <div
            style={{
                padding: '1em 2em',
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontWeight: '500',
                fontSize: '1.2rem'
            }}>
                <header>SaralX Accessibility News</header>
                <div style={{display:'flex', alignItems: 'center'}}>
                    <input
                        type="checkbox" 
                        id="access-mode"
                        onChange={(e) => setAccessMode(e.target.checked)} 
                        checked={accessMode}
                        style={{
                            width: '1.2em',
                            height: '1.2em',
                            cursor: 'pointer'
                        }}
                    />
                    <label 
                        htmlFor="access-mode" 
                        style={{cursor: 'pointer'}}
                    >Accessibility Mode</label>
                </div>
            </div>

            <section style={{width: '100%', maxWidth: '70vw', margin: '0 auto'}}>
                <Slide
                    infinite={true}
                    slidesToShow={1}
                    autoplay={autoPlay}
                    duration={3000} // time each slide stays (in ms)
                    transitionDuration={500}
                    arrows={true}
                    pauseOnHover={true}
                >
                    {slideShowData.map((cardInfo, index) => <SlideShowCard key={index}  cardInfo={cardInfo}/>)}
                </Slide>
            </section>
            {accessMode && <div style={{
                position: 'absolute',
                right: 10,
                top: 200,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}>
                <button onClick={() => setAutoPlay(prev => !prev)}>{autoPlay? <PauseButton/> : <PlayButton/> }</button>
                <button><PlaySound/></button>
                <button></button>
            </div>}
        </div>
    );
}

export default App;
