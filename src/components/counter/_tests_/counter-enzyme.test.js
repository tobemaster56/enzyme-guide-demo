import React from 'react';
import {mount, shallow} from "enzyme";
import Counter from "../index";

describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state("count")).toBe(0);

    wrapper.instance().increment();
    expect(wrapper.state("count")).toBe(1);

    wrapper.instance().decrement();
    expect(wrapper.state("count")).toBe(0);
  });

  it("properly increments and decrements the counter like user", () => {
    // 这里模仿了以用户为中心的测试，其实思路和 RTL一样了
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('p').text()).toBe("0");

    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('p').text()).toBe("-1");

    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('p').text()).toBe("0");
  });
});
