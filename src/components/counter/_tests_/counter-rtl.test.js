import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import Counter from "../index";

describe("<Counter />", ()=>{
  it("should increment the counter", ()=>{
    /*
    * 可遵循的简单规则
    * AAA模式：编排（Arrange），执行（Act），断言（Assert）。
    * 首先，您要编排(初始化)您的代码，以便为接下来的步骤做好一切准备。
    * 然后，您执行用户应该执行的步骤(例如单击)。
    * 最后，您对应该发生的事情进行断言。
    */

    // Arrange 编排
    render(<Counter />);
    const counter = screen.getByText("0");
    const incBtn = screen.getByText("+");
    const decBtn = screen.getByText("-");

    // Act 执行
    fireEvent.click(incBtn);
    // Assert 断言
    expect(counter.textContent).toBe("1");

    // Act 执行
    fireEvent.click(decBtn);
    // Assert 断言
    expect(counter.textContent).toBe("0");
  });
})
