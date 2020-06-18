import { customElement, html, LitElement } from 'lit-element';

import 'smart-webcomponents/source/modules/smart.kanban';

@customElement('smart-kanban-app')
export class SmartKanbanApp extends LitElement {
	protected render() {
		const columns = [
			{ label: 'To do', dataField: 'toDo' },
			{ label: 'In progress', dataField: 'inProgress' },
			{ label: 'Testing', dataField: 'testing' },
			{ label: 'Done', dataField: 'done' }
		];

		const dataSource = window.getKanbanData();

		return html`
			<link rel="stylesheet" type="text/css" href="../node_modules/smart-webcomponents/source/styles/smart.default.css" />
			<smart-kanban
				id="kanban"
				.dataSource="${dataSource}"
				.columns="${columns}"
				collapsible
			></smart-kanban>
		`;
	}
}
