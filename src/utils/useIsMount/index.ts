// https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
import React from "react";

const useIsMount = () => {
  const isMountRef = React.useRef(true);
  React.useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export default useIsMount;
