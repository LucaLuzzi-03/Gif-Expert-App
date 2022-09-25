import { render, screen } from "@testing-library/react"
import GiftGrid from "../../src/components/GiftGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in <GiftGrid />', () => { 

    const category = 'One Punch'

    test('should show the loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        const { container } = render( <GiftGrid category={ category } /> )
        expect( screen.getByText('Loading...') )
        expect( screen.getByText( category ) )

     });

     test('should show items when images have been loaded by useFetchGif()', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://lcoalhost/saitama.jpg'
            },
            {
                id: 'ABCdef',
                title: 'Saitama False',
                url: 'https://lcoalhost/saitama.jpg.com.ahrre'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render( <GiftGrid category={ category } /> )
        expect( screen.getAllByRole('img' ).length ).toBe(2)

      });

 })