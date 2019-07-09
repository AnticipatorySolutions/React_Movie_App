import React from 'react';
import Panel from './PanelDecorator';
import { render } from '@testing-library/react'


it('PanelDecorator_Decorates_Panel_Text', ()=> {
    const testdata = {key: "testKey", size: "testSize", text:"testText", src:"testSrc"};
    const {getByAltText} = render(<Panel key={testdata.key} size={testdata.size} text={testdata.text} src={testdata.src} />);
    expect(getByAltText(/testText/i));
});