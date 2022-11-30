import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "../services/api"
import ROUTES from "../config/routes"

const STEPS = {
    INTRO: "intro",
    ACCOUNT: "account",
    REGISTRY: "registry",
}

const OnboardingPage = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(STEPS.INTRO)
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await Api.register(user)
            setStep(STEPS.REGISTRY)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="container">
            {step === STEPS.INTRO && (
                <>
                    <h2>It's time to turn a new leaf!</h2>
                    <p>Let's get this new beginning begun! In five steps, you'll be ready to setup your registry.</p>
                    <button className="pure-button pure-button-primary" onClick={() => setStep(STEPS.ACCOUNT)}>Start</button>
                </>
            )}
            {step === STEPS.ACCOUNT && (
                <>
                    <h2>Tell us about you</h2>
                    <form onSubmit={handleSubmit} className="pure-form">
                        <div>
                            <label>First name</label>
                            <input type="text" name="firstName" onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Last name</label>
                            <input type="text" name="lastName" onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" onChange={handleChange} required />
                        </div>
                        {/* TODO: we'll need phone number soon */}
                        <button className="pure-button pure-button-primary" type="submit" onClick={handleSubmit}>NEXT</button>
                    </form>
                </>
            )}
            {step === STEPS.REGISTRY && (
                <>
                    <h2>Create your registry!</h2>
                    <p>Let your friends and loved ones know what you need to make a fresh start!</p>
                    <button className="pure-button pure-button-primary" onClick={() => navigate(ROUTES.REGISTRY)}>Create Registry</button>
                </>
            )}
        </div>
    )
}

export default OnboardingPage