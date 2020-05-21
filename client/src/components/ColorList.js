import React, { useState } from 'react';

import useAxiosWithAuth from '../hooks/useAxiosWithAuth';
import ColorForm from './ColorForm';

const initialColor = {
	color: '',
	code: { hex: '' }
};

const ColorList = ({ colors, updateColors }) => {
	console.log(colors);
	const [ editing, setEditing ] = useState(false);
	const [ colorToEdit, setColorToEdit ] = useState(initialColor);
	const [ colorToCreate, setColorToCreate ] = useState(initialColor);

	const axios = useAxiosWithAuth();

	const editColor = (color) => {
		setEditing(true);
		setColorToEdit(color);
	};

  const createColor = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:5000/api/colors`, colorToCreate);
    updateColors(response.data);

    //reset the form after created color
    setColorToCreate(initialColor);
  }

  const saveEdit = async (e) => {
		e.preventDefault();
		axios.put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit);
		setEditing(false);

		const newColors = colors.map((c) => {
			if (c.id === colorToEdit.id) {
				return colorToEdit;
			}
			return c;
		});

		updateColors(newColors);

		// Make a put request to save your updated color
		// think about where will you get the id from...
		// where is is saved right now?
	};

	const deleteColor = (color) => {
		// make a delete request to delete this color
		axios.delete(`http://localhost:5000/api/colors/${color.id}`);

		//filter color to "delete"
		const newColors = colors.filter((c) => {
			return c.id !== color.id;
		});

		//update colorList
		updateColors(newColors);
	};

	return (
		<div className="colors-wrap">
			<p>colors</p>
			<ul>
				{colors.map((color) => (
					<li key={color.color} onClick={() => editColor(color)}>
						<span>
							<span
								className="delete"
								onClick={(e) => {
									e.stopPropagation();
									deleteColor(color);
								}}
							>
								x
							</span>{' '}
							{color.color}
						</span>
						<div className="color-box" style={{ backgroundColor: color.code.hex }} />
					</li>
				))}
			</ul>
			{editing && (
				<ColorForm
					onSubmit={saveEdit}
					onCancel={() => setEditing(false)}
					color={colorToEdit}
					updateColor={setColorToEdit}
					legend="Edit color"
				/>

      
      )}
      			{/* stretch - build another form here to add a color */}

      <ColorForm
					onSubmit={createColor}
					onCancel={() => setColorToCreate(initialColor)}
					color={colorToCreate}
					updateColor={setColorToCreate}
					legend="Create color"
				/>
			<div className="spacer" />
		</div>
	);
};

export default ColorList;
