import { ReactElement, forwardRef, cloneElement } from 'react'

type Props = {
    href: string,
    children: ReactElement,
}

const Link = forwardRef((props: Props, ref: any) => cloneElement(props.children, { ref, href: props.href }))

// Link.defaultProps = {
//     state: "success",
// }

export default Link
