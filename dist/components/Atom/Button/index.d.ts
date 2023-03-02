import { ReactElement } from 'react';
interface Props {
    children: JSX.Element;
    state: "primary" | "secondary" | "alternative" | "disabled" | "loading";
    className?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
}
declare function Button(props: Props): ReactElement;
export default Button;
