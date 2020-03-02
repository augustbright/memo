import React from "react";
import Navigator, {
  MaterialDomain,
  NavigatorProps,
  NavigatorState
} from "../Navigator";
import Enzyme, { shallow } from "enzyme";
import React16Adapter from "enzyme-adapter-react-16";
import { Step } from "semantic-ui-react";

Enzyme.configure({ adapter: new React16Adapter() });

const initialDomain: MaterialDomain = {
  repository: "memo",
  owner: "augustbright",
  branch: "master"
};

let wrapper: Enzyme.ShallowWrapper<NavigatorProps, NavigatorState, Navigator>;

describe("<Navigator />", () => {
  beforeEach(() => {
    wrapper = shallow(
        <Navigator initialDomain={initialDomain} path="material" />
    );
  });

  test("It is collapsed by default", () => {
    expect(wrapper.state().collapsed).toBe(true);
    expect(wrapper.find("input").length).toBe(0);
  });

  test("It shows domain data when collapsed", () => {
    expect(wrapper.contains(<Step.Title>augustbright</Step.Title>)).toBe(true);
    expect(wrapper.contains(<Step.Title>memo</Step.Title>)).toBe(true);
    expect(wrapper.contains(<Step.Title>master</Step.Title>)).toBe(true);
  });

  test("It expands on click", () => {
    wrapper.find(".navigator-expandable").simulate("click");
    expect(wrapper.state().collapsed).toBe(false);
    expect(wrapper.find("input").length).toBe(3);
  });

  test("It shows inputs when expanded", () => {
    wrapper.setState({ collapsed: false });
    expect(wrapper.find("input").length).toBe(3);
  });

  test("It renders a link when expanded", () => {
    wrapper.setState({
      collapsed: false,
      branch: "testBranch",
      owner: "testOwner",
      repository: "testRepo"
    });

    expect(
        wrapper.find('.navigator-link[to="/testOwner/testRepo/testBranch/"]')
    ).toHaveLength(1);
  });
});
