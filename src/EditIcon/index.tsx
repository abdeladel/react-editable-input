import * as React from "react";
import { Edit } from "@material-ui/icons";
import { EditIconProps } from "../types";

const EditIcon = (props: EditIconProps) => {
	const { isVisible } = props;
	return (
		<span style={{ fontSize: "12px", cursor: "pointer" }}>
			<Edit
				fontSize="inherit"
				style={{ visibility: isVisible ? "visible" : "hidden" }}
				onClick={() => {
					console.log("icon clicked !!!");
				}}
			/>
		</span>
	);
};

export default EditIcon;
