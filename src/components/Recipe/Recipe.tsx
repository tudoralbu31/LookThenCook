import './Recipe.css'
import Carbonara from '../../ui/carbonara.jpg';


type Props = {
    name: string,
    time: number,
    difficulty: string,
    ingredients: string,
    description: string,
    onClick: () => void,
}

export const Recipe = ({ name, time, difficulty, ingredients, description, onClick }: Props) => {
    return (
        <div className='recipe-preview' onClick={onClick}>
            <div className='recipe-name'>{name}</div>
            <div className='box'><img className='image' src={Carbonara}></img></div>
        </div>
    )
}