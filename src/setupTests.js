import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer(emotion));
