import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

import Atividades from './atividades';
import Atv1 from '../atividades/atividade_001';
import Atv2 from '../atividades/atividade_002';
import Atv3 from '../atividades/atividade_003';
// import Atv4 from '../atividades/atividade_003';
// import Atv5 from '../exemplos/exemplo_005';
// import Atv6 from '../exemplos/exemplo_006';
// import Atv7 from '../exemplos/exemplo_007';
// import Atv8 from '../exemplos/exemplo_008';


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Atividades" component={Atividades} />
      <Stack.Screen name="Atv1" component={Atv1} />
      <Stack.Screen name="Atv2" component={Atv2} />
      <Stack.Screen name="Atv3" component={Atv3} />
      {/* <Stack.Screen name="Ex4" component={Ex4} />
      <Stack.Screen name="Ex5" component={Ex5} />
      <Stack.Screen name="Ex6" component={Ex6} />
      <Stack.Screen name="Ex7" component={Ex7} />
      <Stack.Screen name="Ex8" component={Ex8} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;