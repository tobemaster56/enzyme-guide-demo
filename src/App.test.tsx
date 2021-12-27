import React from 'react'
import App from './App'
import {configure, mount, shallow} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Child from "./child";
import {Link} from "./link";

configure({ adapter: new Adapter() })

/*describe(`<App />`, () => {
    const wrapper = shallow(<App />);

    /!*it('should contains p tag', () => {
       expect(wrapper.find('p').length).toBe(1)
    })

    it('should contains h1 with contents equal to Welcome to React', () => {
        expect(wrapper.find('h1').text()).toBe('Welcome to React')
    })*!/

    it('1. 包含一个p标签', () => {
        expect(wrapper.find('p').length).toBe(1)
    })

    it('2. class为"App-link"的元素能正常被渲染', () => {
        expect(wrapper.find('.App-link').exists()).toBeTruthy()
    })

    it('3. header的class为“App-header”', () => {
        expect(wrapper.find('header').hasClass('App-header')).toBeTruthy()
    })

    it('4. header有3个子元素', () => {
        expect(wrapper.find('header').children().length).toBe(4)
    })

    it('5. 测试H1标签的内容', () => {
        expect(wrapper.find('h1').text()).toBe('Welcome to React')
    })

    it('6. 测试image标签class', () => {
        expect(wrapper.find({ alt: 'logo' }).hasClass('App-logo')).toBeTruthy()
    })

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

})*/

describe('shadow', ()=>{
    const wrapper = shallow(<App />);
    it('should shadow render', ()=>{

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find(Child).length).toBe(1);
        expect(wrapper.render()).toMatchSnapshot();
        expect(wrapper.find('.App-logo').length).toBe(1);
        // console.log(wrapper.render())
        // expect(wrapper.find('p').length).toBe(1)

    })

    /*it('renders children when passed in', () => {
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });*/
})

/*describe('mount', ()=>{
    it('should mount render', ()=>{
        const wrapper = mount(<App />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.render()).toMatchSnapshot();
        // console.log(wrapper.render())
        // expect(wrapper.find('p').length).toBe(1)
    })
})*/

describe(`测试<Link />`, () => {
    it('1. 测试link组件', () => {
        const warpper = shallow(<Link address="https://www.google.com" />)
        console.log(warpper.props())
        expect(warpper.props().href).toBe('https://www.google.com')
    })

    it('2. 测试设置Link props', () => {
        const warpper = shallow(<Link />)
        expect(warpper.find('a').length).toBe(1)
        warpper.setProps({ hide: true })
        expect(warpper.find('a').length).toBe(0)
    })
})
