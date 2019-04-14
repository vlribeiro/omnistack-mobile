import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './routes';

import KeepAwake from 'react-native-keep-awake';

YellowBox.ignoreWarnings(["Unrecognized WebSocket"])

// import { Container } from './styles';

const App = () => (
    <Routes>
        <KeepAwake />
    </Routes>
);

export default App;
