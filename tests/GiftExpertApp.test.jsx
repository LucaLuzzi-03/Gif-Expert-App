import { fireEvent, render, screen } from '@testing-library/react';
import  GiftExpertApp  from '../src/GiftExpertApp';

describe('Test in <GiftExpertApp />', () => { 

    const newCategory = 'Saitama';
 
test('should Add new categories', () => {
       render(<GiftExpertApp />);
       const input = screen.getByRole('textbox'); 
       const form = screen.getByRole('form'); 
 
       fireEvent.input(input, { target: { value: newCategory } });
       fireEvent.submit(form);
 
       fireEvent.input(input, { target: { value: newCategory + '2' } });
       fireEvent.submit(form); 
 
       fireEvent.input(input, { target: { value: newCategory + '3' } });
        fireEvent.submit(form);
 

       expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(4);
});
 

test('Should not add a repeated category', () => {
        
        render(<GiftExpertApp />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
 
    
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);
 
       
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form); 
 
        
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });

 })