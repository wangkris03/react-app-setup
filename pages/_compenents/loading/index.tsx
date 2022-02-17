import { DOMAttributes } from "react";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
export function Loading({ className, ...rest }: Props): JSX.Element {
  return (
    <div className={[className].join(" ")} {...rest}>
      loading...
    </div>
  );
}
