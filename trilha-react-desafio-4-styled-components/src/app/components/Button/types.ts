export type ButtonProps = {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isValid: boolean;
}