import "./Recipe.css";
import Carbonara from "../../ui/carbonara.jpg";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

type Props = {
  name: string;
  time: number;
  difficulty: string;
  ingredients: string;
  description: string;
  onClick: () => void;
};

export const Recipe = ({ name, onClick }: Props) => {
  return (
    <div className="recipe-preview">
      <Card onClick={onClick}>
        <CardHeader title={name} subheader="By Tudor Albu"></CardHeader>
        <CardMedia component="img" height="194" image={Carbonara}></CardMedia>
      </Card>
    </div>
  );
};
