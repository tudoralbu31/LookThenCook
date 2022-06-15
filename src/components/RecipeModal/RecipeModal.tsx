import './RecipeModal.css'
import Carbonara from '../../ui/carbonara.jpg';
import { useDispatch } from 'react-redux';
import { handleRecipeModal } from '../../store/actions';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

type Props = {
    name: string,
    time: number,
    difficulty: string,
    ingredients: string,
    description: string,
}

export const RecipeModal = ({ name, time, difficulty, ingredients, description }: Props) => {
    const dispatch = useDispatch();
    return <div className='modal-wrapper'>
        <div className='recipe-modal'>
            <div className='close-button-wrapper'><Button onClick={() => dispatch(handleRecipeModal(false))}>X</Button></div>
            <div className='recipe'>
                <div className='recipe-name'>
                    {name}
                </div>
                <div className='box'><img className='image' src={Carbonara}></img></div>
                <div className='list-element'>
                    <label className='tags'>Time: </label>
                    {time}
                </div>
                <div className='list-element'>
                    <label className='tags'>Difficulty: </label>
                    {difficulty}
                </div>
                <div className='list-element'>
                    <label className='tags'>Ingredients: </label>
                    {ingredients}
                </div>
                <div></div>
                <label className='tags description-tag'>How you do it:</label>
                <div className='list-element description'>
                    {description}
                </div>
            </div>
        </div>
    </div>
}