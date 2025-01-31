import React from "react";
import renderer from "react-test-renderer";
import MonthlyBudgetScreen from "../MonthlyBudgetScreen";

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

it("MonthlyBudgetScreen renders correctly", () => {
  const tree = renderer.create(<MonthlyBudgetScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("MonthlyBudgetScreen should go back if save button is pressed", () => {
  const root = renderer.create(<MonthlyBudgetScreen {...props} />).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const button = root.findByType("Button.Primary");

  button.props.onPress();
  expect(props.navigation.goBack).toHaveBeenCalled();
});
