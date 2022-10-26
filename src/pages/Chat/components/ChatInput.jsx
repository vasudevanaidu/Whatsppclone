import React from "react";
import Icon from "components/Icon";

const ChatInput = () => {
	return (
		<div className="chat__input-wrapper">
			<button aria-label="Emojis">
				<Icon
					id="smiley"
					className={`chat__input-icon`}
				/>
			</button>
			<div className="pos-rel">
				<button aria-label="Attach">
					<Icon
						id="attach"
						className={`chat__input-icon`}
					/>
				</button>
			</div>
			<input
				className="chat__input"
				placeholder="Type a message"
			/>
			<button aria-label="Send message">
				<Icon id="send" className="chat__input-icon" />
			</button>

		</div>
	);
};

export default ChatInput;
