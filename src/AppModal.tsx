import { App, Modal as BaseModal } from 'obsidian';
import React, { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import FretboardTool from './FretboardTool';

class AppModal extends BaseModal {
	private root: Root | null = null;

	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;

		this.root = createRoot(contentEl);

		this.root.render(
			<StrictMode>
				<FretboardTool />
			</StrictMode>,
		);
	}

	onClose() {
		this.root?.unmount();
	}
}

export default AppModal;
