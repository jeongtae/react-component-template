import React from "react";

interface Props {
  children?: React.ReactNode;
}

const greeting = (props: Props): React.ReactNode => {
  return <div>{props.children}</div>;
};

export default greeting;
