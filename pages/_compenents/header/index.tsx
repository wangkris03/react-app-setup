import { DOMAttributes } from "react";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
export function Header({ className, children, ...rest }: Props): JSX.Element {
  return (
    <div className={[className].join(" ")} {...rest}>
      {children}
    </div>
  );
}
