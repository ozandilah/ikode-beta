import { ReactElement, ReactNode } from 'react'
import configs from './configs';


interface Props {
    number: {
        text: ReactNode,
        className: string
    }
    content: {
        preheading: string,
        heading: string,
        paragraph: string,
    }
    button: ReactNode,
    badge: {
        title: string,
        content: string,
    }
    image: string | ReactNode
}

function FeaturedSection({ number,
    content,
    button,
    badge,
    image }: Props): ReactElement {

    return <div className="container px-4 mx-auto group">
        <div className="flex flex-col items-center justify-center md:flex-row gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36">
            <div className="w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1">
                <h3 className="mb-3 font-semibold uppercase text-green">
                    {content.preheading || "Pre Heading"}
                </h3>
                <h2 className="font-semibold text-navy text-[30px] mb-5">
                    {content.heading || "Heading"}
                </h2>
                <h3 className="mb-8 leading-8 text-gray">
                    {content.paragraph || "Paragraph"}
                </h3>
            </div>
            <div className="relative md:group-odd:order-1 md:group-even:order-2">
                <div className={[
                    "absolute rounded-full inline-flex items-center justify-center text-2xl font-semibold top-0 left-0 z-10 border-2 border-white text-white transform -translate-x-1/2 -translate-y-1/2 p-4 w-14 h-14", number.className || "bg-green"
                ].join(" ")}>
                    {number.text}
                </div>
                <div className="absolute bottom-0 right-0 z-10 w-56 p-4 transform translate-x-4 translate-y-4 bg-white rounded-xl md:translate-x-1/4 xl:translate-x-1/2 xl:translate-y-1/2">
                    <span className="flex items-center mb-2 gap-x-2">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green">
                            <svg viewBox="0 0 12 8" fill="none" preserveAspectRatio='xMidYMid meet'>
                                <path d="M1.83325 4L4.46483 6.5L10.1666 1.5"
                                    className="stroke-white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span className="font-medium text-navy">{badge.title}</span>
                    </span>
                    <p className="hidden text-sm text-grey md:block">{badge.content}</p>
                </div>
                <div className="relative max-w-full  w-[240px] h-[340px] xl:w-[340px] xl:h-[440px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
                    {
                        typeof image === "string" ? (<img src={image} alt={badge.title} />) : (
                            image
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}
// FeaturedSection.defaultProps = {
//     state: "success",
// }

export default FeaturedSection
