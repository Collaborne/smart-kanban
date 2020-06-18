import { KanbanDataSource } from 'smart-webcomponents/source/typescript/smart.kanban';
import 'smart-webcomponents/source/modules/smart.kanban';

export {};

declare global {
	interface Window {
		getKanbanData: (locale?: string) => KanbanDataSource;
	}
}
