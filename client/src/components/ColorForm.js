import React from 'react';

export default function ColorForm(props) {

	return (
		<form onSubmit={props.onSubmit}>
			<legend> {props.legend}</legend>
			<label>
				color name:
				<input
					onChange={(e) => props.updateColor({ ...props.color, color: e.target.value })}
					value={props.color.color}
				/>
			</label>
			<label>
				hex code:
				<input
					onChange={(e) =>
						props.updateColor({
							...props.color,
							code: { hex: e.target.value }
						})}
					value={props.color.code.hex}
				/>
			</label>
			<div className="button-row">
				<button type="submit">save</button>
				<button onClick={props.onCancel} type='button'>cancel</button>
			</div>
		</form>
	);
}
