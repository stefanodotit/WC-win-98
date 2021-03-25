import { html, TemplateResult } from 'lit-html';
import '../src/tagliabue-website.js';

export default {
  title: 'TagliabueWebsite',
  component: 'tagliabue-website',
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
  <tagliabue-website style="--tagliabue-website-background-color: ${backgroundColor}" .title=${title}></tagliabue-website>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
