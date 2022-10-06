import { SaveButton } from "../Buttons/SaveButton/SaveButton";
import "./RecipeAdderModal.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { handleAdderModal, addRecipe } from "../../store/actions";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const RecipeAdder = () => {
  const [formData, setFormData] = useState({
    name: "",
    time: 0,
    description: "",
    difficulty: "",
    ingredients: "",
  });

  const dispatch = useDispatch();
  const closeModal = () => {
    return dispatch(handleAdderModal(false));
  };

  const handleDificultyChange = (event: SelectChangeEvent) => {
    setFormData({ ...formData, difficulty: event.target.value });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <Button variant="outlined" onClick={() => closeModal()}>
            Discard
          </Button>
        </div>
        <div className="modal-body">
          <div className="input-wrapper">
            <TextField
              fullWidth
              id="name"
              label="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="input-wrapper">
            <TextField
              fullWidth
              id="time"
              label="Time (min)"
              onChange={(e) =>
                setFormData({ ...formData, time: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="input-wrapper">
            <FormControl fullWidth>
              <InputLabel id="dificulty">Dificulty</InputLabel>
              <Select
                labelId="dificulty-label"
                id="dificulty"
                value={formData.difficulty}
                label="Dificulty"
                onChange={handleDificultyChange}
              >
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
                <MenuItem value={"Very Hard"}>Very Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-wrapper">
            <TextField
              fullWidth
              id="ingredients"
              label="Ingredients"
              onChange={(e) =>
                setFormData({ ...formData, ingredients: e.target.value })
              }
            />
          </div>
          <div className="input-wrapper">
            <TextField
              fullWidth
              id="how-to-do-it"
              label="How to do it"
              multiline
              rows={4}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Upload an image: </label>
            <input type="file" accept="image/*"></input>
          </div>
        </div>
        <div className="adder-modal-footer">
          <SaveButton
            text="Submit"
            onClick={() => {
              dispatch(addRecipe(formData));
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeAdder;
