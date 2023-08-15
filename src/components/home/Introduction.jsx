import { TypeAnimation } from "react-type-animation"
const Introduction = () => {

    return (
        <div className="grid grid-cols gap-4">
            <div className="grid grid-cols-5 gap-8 py-20">
                <div >
                    <img
                        src="https://blupp.b-cdn.net/smalltownfolk/small-town-folk-logo-circle@3x.png?quality=80"
                        className="object-fit w-full h-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 py-20">
                <TypeAnimation
                    sequence={[
                        'We are a multidisciplinary creative studio.',
                        2000,
                        'A mile deep and an inch wide.',
                        2000,
                        "Constantly learning and unlearning.",
                        2000,
                        'Creating people let brands.',
                        2000,
                    ]}
                    wrapper="span"
                    cursor={ true }
                    repeat={ Infinity }
                    className="!font-clarendon !font-regular !text-5xl !text-black"
                />
            </div>
        </div>
    )
}

export default Introduction
