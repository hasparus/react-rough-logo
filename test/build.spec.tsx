import React from "react";
import { shallow, render } from "enzyme";

import ReactRoughLogo from "../build/index";

import EsmLogo from "../build/index.esm";

describe("Built index.js", () => {
  describe("ReactRoughLogo", () => {
    it("matches snapshot", () => {
      expect(render(<ReactRoughLogo />)).toMatchSnapshot();
    });

    it("renders svg", () => {
      const logo = shallow(<ReactRoughLogo />);
      expect(logo.find("svg").exists()).toBe(true);
    });
  });
});

describe("Built index.esm.js", () => {
  const Logo = (EsmLogo as any) as typeof ReactRoughLogo; // FIXME
  describe("ReactRoughLogo", () => {
    it("matches snapshot", () => {
      expect(render(<Logo />)).toMatchSnapshot();
    });

    it("renders svg", () => {
      const logo = shallow(<Logo />);
      expect(logo.find("svg").exists()).toBe(true);
    });
  });
});
