import { TypeAnimation } from "react-type-animation"
const Introduction = () => {

    return (
        <div className="grid grid-cols-5 gap-8 py-20">
            <div >
                <img
                    src="https://blupp.b-cdn.net/smalltownfolk/small-town-folk-logo-circle@3x.png?quality=80"
                    className="object-fit w-full h-full"
                />
            </div>
            <TypeAnimation
                sequence={[
                    'One', // Types 'One'
                    1000, // Waits 1s
                    'Two', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Two Three', // Types 'Three' without deleting 'Two'
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
        </div>
    )
}

export default Introduction
