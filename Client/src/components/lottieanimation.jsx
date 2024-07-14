import Lottie from 'lottie-react'
import loading from "../assets/loading.json"

function LottieAnimation({
    divclassName = ''
}) {
    return (
        <div className={`${divclassName}`}>
            <Lottie animationData={loading} loop={true} />
        </div>
    )
}

export default LottieAnimation
