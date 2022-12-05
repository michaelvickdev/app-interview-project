import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "../services/api"
import ROUTES from "../config/routes"
import { useForm } from "react-hook-form"
import Input from "../components/Input"

const STEPS = {
    INTRO: "intro",
    ACCOUNT: "account",
    REGISTRY: "registry",
}

const OnboardingPage = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(STEPS.INTRO)

    const { handleSubmit, control, setError } = useForm();

    const submit = async (values) => {

        try {
            await Api.register(values)
            setStep(STEPS.REGISTRY)
        } catch (e) {
            const message = e?.response?.data?.message || "Internal server error"
            setError("phoneNumber", { message })
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
                    <form onSubmit={handleSubmit(submit)} className="pure-form">
                        <Input
                            control={control}
                            label="First name"
                            name="firstName"
                            type="text"
                            required
                        />
                        <Input
                            control={control}
                            label="Last name"
                            name="lastName"
                            type="text"
                            required
                        />
                        <Input
                            control={control}
                            label="Email"
                            name="email"
                            type="email"
                            required
                        />
                        <Input
                            control={control}
                            label="Phone number"
                            name="phoneNumber"
                            type="text"
                            required
                        />
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