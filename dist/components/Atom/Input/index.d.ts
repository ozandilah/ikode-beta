import { ReactElement, ReactNode } from 'react';
interface Props {
    id: string;
    type: "text" | "number" | "email" | "tel" | "date" | "file";
    name: string;
    state?: "success" | "loading";
    accept?: string;
    wrapperClassName?: string;
    label?: ReactNode;
    readOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    inputClassName?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
declare function Input(props: Props): ReactElement;
export default Input;
