import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splashscreen} from '../page';
import {Login} from '../page';
import {Register} from '../page';
import {Home} from '../page';
import {Mikrotik} from '../page';
import {Pelanggan} from '../page';
import {Pembayaran} from '../page';
import {Admin} from '../page';
import {Addpelanggan} from '../page';
import {Editpelanggan} from '../page';
import {Detailuser} from '../page';
import {Isolir} from '../page';
import {Aktifdata} from '../page';
import {Historipembayaran} from '../page';
import {Harga} from '../page';
import {Tambahpaket} from '../page';
import {Editpaket} from '../page';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mikrotik"
        component={Mikrotik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pelanggan"
        component={Pelanggan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Addpelanggan"
        component={Addpelanggan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editpelanggan"
        component={Editpelanggan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detailuser"
        component={Detailuser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Isolir"
        component={Isolir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Aktifdata"
        component={Aktifdata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Historipembayaran"
        component={Historipembayaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Harga"
        component={Harga}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tambahpaket"
        component={Tambahpaket}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editpaket"
        component={Editpaket}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
