import {CustomHookPage} from './custom-hook/index.js';
import {HocPage} from './hoc/index.js';
import {ExtensibleStylesPage} from './extensible-styles/index.js';
import {CompoundComponentPage} from './compound-component/index.js';
import {RenderPropsPage} from './render-props/index.js';
import {ControlPropsPage} from './control-props/index.js';
import {PropsGettersPage} from './props-getters/index.js';
import {StateInitializerPage} from './state-initializer/index.js';
import {StateReducerPage} from './state-reducer/index.js';
import {WelcomePage} from './components/welcome-page.js';

export const routes = [
  {
    path: '/',
    label: 'Bienvenida',
    Component: WelcomePage,
    exact: true,
  },
  {
    path: '/custom-hook',
    label: 'Custom Hooks',
    Component: CustomHookPage,
  },
  {
    path: '/hoc',
    label: 'HOC',
    Component: HocPage,
  },
  {
    path: '/extensible-styles',
    label: 'Extensible Styles',
    Component: ExtensibleStylesPage,
  },
  {
    path: '/compound-components',
    label: 'Compound Components',
    Component: CompoundComponentPage,
  },
  {
    path: '/render-props',
    label: 'Render Props',
    Component: RenderPropsPage,
  },
  {
    path: '/control-props',
    label: 'Control Props',
    Component: ControlPropsPage,
  },
  {
    path: '/props-getters',
    label: 'Props Getters',
    Component: PropsGettersPage,
  },
  {
    path: '/state-initializer',
    label: 'State Initializer',
    Component: StateInitializerPage,
  },
  {
    path: '/state-reducer',
    label: 'State Reducer',
    Component: StateReducerPage,
  },
];
