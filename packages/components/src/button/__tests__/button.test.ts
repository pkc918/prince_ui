import { describe, expect, it, test } from "vitest";

import { mount } from "@vue/test-utils";
import button from "../button.vue";
// The component to test
describe("test button", () => {
    test("should render slot", () => {
        const wrapper = mount(button, {
            slots: {
                default: "Prince_UI"
            }
        });
        // Assert the rendered text of the component
        expect(wrapper.text()).toContain("Prince_UI");
    });

    test("should render type", () => {
        const wrapper = mount(button, {
            props: {
                type: "primary"
            }
        });
        expect(wrapper.props().type).toStrictEqual("primary");
    });
});
