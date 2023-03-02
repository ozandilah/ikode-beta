import React from 'react'
import Navbar from '../../../../components/organism/Navbar'
import Link from '../../../../components/Link'
import Button from '../../../../components/Atom/Button'
type Props = {}

function Sample({ }: Props) {
    return (
        <div className="my-20">
            <Navbar cta={
                <>
                    <Button state="secondary" className="relative px-8">
                        <a href='/'>Sign In</a>
                    </Button>
                    <Button state="primary" className="relative px-8">
                        <a href='/'>Sign Up</a>
                    </Button>
                </>
            } pathname="/program" className={{ active: "text-purple", idle: "text-navy" }}>
                <Link href="/program">
                    <a href="/">
                        Program
                    </a>
                </Link>
                <Link href="/mentor">
                    <a href="/">
                        Mentor
                    </a>
                </Link>
                <Link href="/pricing">
                    <a href="/">
                        Pricing
                    </a>
                </Link>
                <Link href="/business">
                    <a href="/">
                        Business
                    </a>
                </Link>
            </Navbar>
        </div >
    )
}

export default Sample
