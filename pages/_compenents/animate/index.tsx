import { DOMAttributes, useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import "./index.css";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
const duration = 300;

export const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

export const transitionStyles: Record<string, object> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
export function Animate({ ...rest }: Props): JSX.Element {
  const [inProp, setInProp] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <div {...rest}>
        <Transition
          in={inProp}
          timeout={500}
          unmountOnExit
          onEnter={() => {
            console.log("onEnter");
          }}
          onEntering={() => {
            console.log("onEntering");
          }}
          onEntered={() => {
            console.log("onEntered");
            setTimeout(() => {
              setInProp(false);
            }, 3000);
          }}
        >
          {(state: string) => {
            return (
              <div className="w-full" style={{ ...defaultStyle, ...transitionStyles[state] }}>
                auto disappear after 3s :{state}
              </div>
            );
          }}
        </Transition>

        <button onClick={() => setInProp(!inProp)}>Click to Enter Transition</button>
      </div>

      <div>
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <div className="w-1/3 h-12 bg-white border border-solid border-cyan-400">
            <button
              type="button"
              onClick={() => {
                setShowMessage(false);
              }}
            >
              close
            </button>
          </div>
        </CSSTransition>
        {showButton && (
          <button type="button" onClick={() => setShowMessage(true)}>
            Click to Enter CSSTransition
          </button>
        )}
      </div>
    </>
  );
}
