import './SaveButton.css'

type Props = {
    text: string,
    onClick: () => void,
}

export const SaveButton = ({text, onClick}: Props) => {
    return <div className='save-button' onClick={onClick}>
        {text}
    </div>
}