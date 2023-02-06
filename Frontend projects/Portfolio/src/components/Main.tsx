import { useContext } from "react";

import { Provider } from "../provider/DataContext";
import Bio from "./Bio";
import Work from "./Work";
import Like from "./Like";

const Main = () => {
  const { theme, transition } = useContext<any>(Provider);

  return (
    <div
      className={`${
        transition ? "translate-y-0" : "translate-y-10"
      } transition-transform duration-500 delay-100 ease-out w-[90%] sm:w-[80%] md:w-[570px] flex flex-col`}
    >
      <Work theme={theme} />
      <Bio theme={theme} />
      <Like />
    </div>
  );
};

export default Main;
