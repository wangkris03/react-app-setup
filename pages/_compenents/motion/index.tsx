import { DOMAttributes, useState } from "react";
import { Motion, spring } from "react-motion";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
export function MotionDemo({ className, ...rest }: Props): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className={[className].join(" ")} {...rest}>
      <Motion
        defaultStyle={{ x: 0 }}
        style={{ x: spring(open ? 100 : 0) }}
        onRest={() => {
          console.log("callback onRest");
        }}
      >
        {(value) => (
          <div className={"w-8"} style={{ transform: `translate3d(${value.x}px, 0, 0)` }}>
            {value.x}
          </div>
        )}
      </Motion>
      <button
        onMouseDown={() => {
          setOpen(!open);
        }}
      >
        Toggle Motion
      </button>
    </div>
  );
}
