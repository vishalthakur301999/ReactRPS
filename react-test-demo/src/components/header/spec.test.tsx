import React from "react";
import Header from "./index";
import { shallow } from 'enzyme';
import {findByTestAttr} from "../../utils";

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component;
}
describe('Header Component', () => {

    let component: any;
    beforeEach(() => { // this basically runs before every test 
        component = setUp(); 
    })
    it('It should render without errors', () => {

        // console.log(component.debug);
        const wrapper = findByTestAttr(component,'headerComponent')
        //const wrapper = component.find(".headerComponent");
        expect(wrapper.length).toBe(1);
    });
    it('should render the logo', () => {

        // console.log(component.debug);
        //const logo = component.find(".logoIMG");
        const logo = findByTestAttr(component,'logoIMG')
        expect(logo.length).toBe(1);
    })


})



// if you have en empty test case it will pass by default
// nvm install -g npm@version