import { html, TemplateResult } from 'lit-html';
import '../src/open-web-components.js';

export default {
  title: 'OpenWebComponents',
  component: 'open-web-components',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <open-web-components style="--open-web-components-background-color: ${backgroundColor}" .title=${title}></open-web-components>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
