import { useState } from "react";
import Fade from "./Fade";


const Main = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <>
            <header>
                <h1 className="fake-logo">Level Up</h1>
            </header>
            <main className="layout">
                <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
                <Fade isActive={isToggled}>
                    <div className="card">
                        <h4>Post Number One</h4>
                        <p>this is inside the card</p>
                    </div>
                </Fade>
            </main>
            <h3>Pista Academy</h3>
        </>
    )
}

export default Main;