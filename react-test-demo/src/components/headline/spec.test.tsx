import { shallow } from "enzyme";
import React from "react";
import { Headline } from ".";
import {findByTestAttr} from "../../utils";

const setUp = (props = {})=> {
    const component = shallow(<Headline {...props}/>);
    return component;
}
describe('Headline Component', () => {
    describe('Have props', () => {
        let wrapper: any;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test desc"
            };
            wrapper = setUp(props);
        });
        it('should render without errors', () => {
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1);
        });
        it('should render without errors', () => {
            const h1 = findByTestAttr(wrapper,'header');
            expect(h1.length).toBe(1);
        });
        it('should render without errors', () => {
            const desc = findByTestAttr(wrapper,'desc');
            expect(desc.length).toBe(1);
        });
    });
    describe('have no props ', () => {
        let wrapper : any;
        beforeEach(() => {
            wrapper = setUp();
        });

        it("should not render ", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    });
})