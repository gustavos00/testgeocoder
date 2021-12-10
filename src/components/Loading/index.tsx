import * as Styles from "./styles";

import Lottie from "react-lottie";
import animationData from "../../assets/animations/loadingAnimation.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Styles.Filter>
      <Lottie options={defaultOptions} height={200} width={200} />
    </Styles.Filter>
  );
}

export default Loading;
