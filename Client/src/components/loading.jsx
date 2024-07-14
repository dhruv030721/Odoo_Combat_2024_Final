
import LottieAnimation from "./lottieanimation.jsx"

function Loading({ message }) {
    return (
        <div className='min-h-screen bg-bg-gray text-orange-500 flex flex-col items-center justify-center font-poppins text-4xl'>
            <h2 className='font-bold drop-shadow-3xl'>{message}</h2>
            <LottieAnimation divclassName='max-w-[20%]' />
        </div>
    )
}

export default Loading
