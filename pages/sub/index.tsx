import { DOMAttributes } from "react";
import { useHistory } from "react-router-dom";
import { getStateFromRouter } from "../utils/getStateFromRouter";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
function SubPage({ className, children, ...rest }: Props): JSX.Element {
  const h = useHistory();
  console.log(rest);

  return (
    <div className={[className].join(" ")}>
      <div className="text-5xl">{getStateFromRouter("title")}</div>
      <div className="border-2 border-primary">test tailwindcss</div>
      <div
        onClick={() => {
          h.goBack();
        }}
      >
        go back
      </div>
      {children}
    </div>
  );
}

export default SubPage;
