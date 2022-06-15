import './NavButton.css'

type Props = {
    text: string,
}

export const NavButton = ({text}: Props) => {
    return (
    <div className="NavButton">
        {text}
    </div>
    )
};
