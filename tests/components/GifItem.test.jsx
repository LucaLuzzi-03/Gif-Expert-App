import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";


describe('Test in <GiftItem />', () => { 

    const title = 'Saitama'
    const url = 'https://one.punch.com/saitama.jpg'

    test('should match with snapshot', () => { 

        const { container } = render( 
        <GifItem title={ title } url={ url } /> )

        expect( container ).toMatchSnapshot();

     });

     test('should show image with the right URL and Alt', () => { 

        render( <GifItem title={ title } url={ url } /> )
        
        // expect( screen.getByRole( 'img' ).src ).toBe( url )
        // expect( screen.getByRole( 'img' ).alt ).toBe( title )
        const { src, alt } = screen.getByRole( 'img' )
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
     });

     test('Should show the title in the component', () => {

        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy()

     })

 })