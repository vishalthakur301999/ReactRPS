import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr } from "../../../Utils";
import checkPropTypes from "check-prop-types";


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component
}
describe('Headline Component', () => {

    describe('Checking our proptypes', () => {
        it('I should not throw a warning', () => {
            const expectedProps = {
                header: "test Header",
                desc: "test desc ",
                tempArr: [{
                    fName: "test name ",
                    lName: "test lname",
                    email: "test@email.com",
                    age: 12,
                    onlineStatus: false
                }]
            };
            const propsErr = checkPropTypes(Headline.propTypes, expectedProps, "props", Headline.name);
            expect(propsErr).toBeUndefined()

        })
    })



    describe('have props ', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test decription"
            };
            wrapper = setUp(props);
        });
        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1)
        });
        it('Should be in a H1 tags', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })
        it('Should render a desc ', () => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    });


    describe('have no props ', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it("should not render ", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    });
})