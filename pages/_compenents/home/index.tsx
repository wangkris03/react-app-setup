import { DOMAttributes } from "react";
import { Header } from "../header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
}
function Home({ children, ...rest }: Props): JSX.Element {
  const [count, setCount] = useState(0);
  const h = useHistory();
  console.log(rest);

  return (
    <div>
      <Header className="bg-red-400 text-white">this is red header</Header>
      <div>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click
        </button>
        <div
          onClick={() => {
            h.push(`/sub?title=subTitle`);
          }}
        >
          goto sub page
        </div>
      </div>
      {children}
    </div>
  );
}

export default Home;
