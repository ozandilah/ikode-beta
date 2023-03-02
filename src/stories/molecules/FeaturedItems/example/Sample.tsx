import React from 'react'
import FeaturedItems from '../../../../components/molecules/FeaturedItems'

import { ReactComponent as Users } from '../../../../assets/images/fi_users.svg'
import { ReactComponent as Briefcase } from '../../../../assets/images/fi_briefcase.svg'
import { ReactComponent as CodesandBox } from '../../../../assets/images/fi_codesandbox.svg'
import { ReactComponent as Globe } from '../../../../assets/images/fi_globe.svg'

type Props = {}

function Sample({ }: Props) {
    return (
        <FeaturedItems features={[
            {
                icon: <Globe />,
                key: "diversity",
                title: "Diversity",
                paragraph: "Learn from anyone around the world and get a new skills",
            },
            {
                icon: <CodesandBox />,
                key: "guideline",
                title: "A.I Guideline",
                paragraph: "Lara will help you to choose which path that suitable for you",
            },
            {
                icon: <Users />,
                key: "mentoring",
                title: "1-1 Mentoring",
                paragraph: "We will ensure that you will get\
                what you really do need",
            },
            {
                icon: <Briefcase />,
                key: "futurejob",
                title: "Future Job",
                paragraph: "Get your dream job in your dream\
                company together with us",
            },
        ]} />
    )
}

export default Sample
