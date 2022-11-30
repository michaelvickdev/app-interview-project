import { useNavigate } from "react-router-dom"
import ROUTES from '../config/routes'

const HomePage = () => {
    const navigate = useNavigate()
    
    const goToOnboarding = () => navigate(ROUTES.ONBOARDING)

    return (
        <div className="choices">
            <div className="choice">
                <div className="choice__content">
                    <h2>I'm Breaking Up!</h2>
                    <button onClick={goToOnboarding} className="pure-button pure-button-primary">Get Started</button>
                </div>
                <div className="overlay" />
                <div className="choice__img"
                    style={{
                        backgroundImage: `url("/images/heartbreak.jpg"`,
                    }}
                />
            </div>
            <div className="choice">
                <div className="choice__content">
                    <h2>I Want To Help My Newly Single Friend</h2>
                    <button onClick={goToOnboarding} className="pure-button pure-button-primary">Get Started</button>
                </div>
                <div className="overlay" />
                <div className="choice__img"
                    style={{
                        backgroundImage: `url("/images/friends.jpg"`,
                    }}
                />
            </div>
        </div >
    )
}

export default HomePage