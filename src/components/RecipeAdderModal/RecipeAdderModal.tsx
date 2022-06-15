import { SaveButton } from '../Buttons/SaveButton/SaveButton';
import './RecipeAdderModal.css';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { handleAdderModal, addRecipe } from '../../store/actions';
import { useDispatch } from 'react-redux';

const RecipeAdder = () => {
    const [formData, setFormData] = useState({
        name: '',
        time: 0,
        description: '',
        difficulty: '',
        ingredients: '',
    });

    const dispatch = useDispatch();
    const closeModal = () => {
        return dispatch(handleAdderModal(false));
    }
    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                <div className='modal-header'>
                    <Button variant="contained" onClick={() => closeModal()}>Close</Button>
                </div>
                <div className='modal-body'>
                    <div className='input-wrapper'>
                        <label className='label'>Name: </label>
                        <input
                            className='input-field'
                            id="name"
                            onChange={(e) => (setFormData({ ...formData, name: e.target.value }))}></input>
                    </div>
                    <div className='input-wrapper'>
                        <label className='label'>Time (min): </label>
                        <input
                            className='input-field'
                            pattern='[0-9]*'
                            id="time"
                            onChange={(e) => {
                                setFormData({ ...formData, time: parseInt(e.target.value) })
                            }
                            }></input>
                    </div>
                    <div className='input-wrapper '>
                        <label className='label'>Dificulty: </label>
                        <div className='difficulty-select'>
                            <select className='dropdown' onChange={(e) => (setFormData({ ...formData, difficulty: e.target.value }))}>
                                <option value='Easy'>Easy</option>
                                <option value='Medium'>Medium</option>
                                <option value='Hard'>Hard</option>
                                <option value='Very Hard'>Very Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className='input-wrapper'>
                        <label className='label'>Ingredients: </label>
                        <input
                            className='input-field'
                            id="ingredients"
                            onChange={(e) => (setFormData({ ...formData, ingredients: e.target.value }))}></input>
                    </div>
                    <div className='input-wrapper'>
                        <label>How to make it: </label>
                        <textarea
                            id="description"
                            onChange={(e) => (setFormData({ ...formData, description: e.target.value }))}></textarea>
                    </div>
                </div>
                <div className='adder-modal-footer'>
                    <SaveButton text="Submit" onClick={() => {
                        dispatch(addRecipe(formData));
                        closeModal()
                    }} />
                </div>
            </div>
        </div>
    );
}

export default RecipeAdder;