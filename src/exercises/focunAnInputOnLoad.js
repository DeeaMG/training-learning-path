import React, { useEffect, useRef } from "react";

export default class OnLoad extends React.Component {
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div>
        <input defaultValue={"Won't focus"} />
        <input ref={(input) => (this.nameInput = input)} defaultValue={"Will focus"} />
      </div>
    );
  }
}

export const OnLoadFunctional = () => {
  const inputElRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  return (
    <div>
      <input defaultValue={"Won't focus"} />
      <input ref={inputElRef} defaultValue={"Will focus"} />
    </div>
  );
};
