import { ReactElement, ReactNode } from 'react';
interface Props {
    children: ReactNode;
    state: "success" | "warning" | "danger";
    className?: string;
}
declare function Badge({ children, state, className }: Props): ReactElement;
export default Badge;
