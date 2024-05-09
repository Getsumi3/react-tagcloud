import { ReactElement } from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

export function render(elem: ReactElement) {
    let container = document.createElement("div");
    act(() => {
        ReactDOM.render(elem, container);
    });
    return container;
}

export function expectToMatchSnapshot(elem: ReactElement) {
    const container = render(elem);
    expect(container).toMatchSnapshot();
}

describe("utils", () => {
    it("skip", () => {
        expect(true).toBeTruthy();
    });
});
