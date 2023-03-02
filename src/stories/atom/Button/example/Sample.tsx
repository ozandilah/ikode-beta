import React from 'react'
import Button from '../../../../components/Atom/Button'
type Props = {}

function Sample({ }: Props) {
    return (
        <Button state='primary'>

            <button onClick={() => console.log("Hi")}>Okay, go it</button>
        </Button>
    )
}

export default Sample
