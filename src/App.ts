import { Plugin } from 'obsidian';
import AppModal from './AppModal';
import { PLUGIN_NAME } from './constants';

export default class App extends Plugin {
	async onload() {
		this.addRibbonIcon('music', PLUGIN_NAME, (evt: MouseEvent) => {
			this.openAppModal();
		});
	}

	openAppModal() {
		new AppModal(this.app).open();
	}
}
