import { ReactElement, ReactNode } from 'react';
interface Props {
    children: ReactNode;
    cta: ReactNode;
    pathname: string;
    className: {
        active: string;
        idle: string;
    };
}
declare function Navbar({ children, cta, pathname, className }: Props): ReactElement;
export default Navbar;
