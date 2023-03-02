// Navbar.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Navbar from '../../../../components/organism/Navbar';
import Button from '../../../../components/Atom/Button'
import Link from '../../../../components/Link';



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Navbar/Example',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default = (args: any) => <Navbar {...args} >

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
</Navbar>;
Default.args = {
    cta: <>
        <Button state="secondary" className="relative px-8">
            <a href='/'>Sign In</a>
        </Button>
        <Button state="primary" className="relative px-8">
            <a href='/'>Sign Up</a>
        </Button>
    </>,
    pathname: "/program",
    className: { active: "text-purple", idle: "text-navy" },
}
