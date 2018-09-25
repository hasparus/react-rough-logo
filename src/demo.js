import React from "react";
import ReactDOM from "react-dom";

import RoughReactLogo from "./RoughReactLogo";

import "./styles.css";

class App extends React.PureComponent {
  state = {
    showReferenceImg: false,
  };

  toggleShowReferenceImg = () => {
    this.setState(({ showReferenceImg }) => ({
      showReferenceImg: !showReferenceImg,
    }));
  };

  render() {
    const { showReferenceImg } = this.state;

    return (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}>
        {showReferenceImg && (
          <section
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              style={{
                width: "100%",
                maxWidth: "100vh",
              }}
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
            />
          </section>
        )}
        <RoughReactLogo
          style={{
            position: "absolute",
          }}
          scale={showReferenceImg ? 1 : undefined}
        />
        <button
          style={{
            position: "absolute",
          }}
          onClick={this.toggleShowReferenceImg}>
          {showReferenceImg ? "hide" : "show"} reference
          image
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
