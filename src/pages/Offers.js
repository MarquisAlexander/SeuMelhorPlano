import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import api from '../services/api';

export default function Offers({navigation, route}) {
    const infoLocationUser = route.params.coords;
    const [empresas, setEmpresas] = useState(false);
    const [bestPlansTv, setBestPlansTv] = useState([]);
    const [bestPlanTv, setBestPlanTv] = useState('');
    const [bestPlanLandline, setBestPlanLandline] = useState([]);
    const [bestPlanBroadband, setBestPlanBroadband] = useState([]);
    const [bestPlanAddon, setBestPlanAddon] = useState([]);
  
    useEffect(() => {
      api.get('api/options', {params: {
        lat: infoLocationUser.latitude,
        lon: infoLocationUser.longitude
      }}).then((resp) => {
        // console.log('RESP SERVIDOR', resp.data)
        setEmpresas(resp.data)
        // console.log('MEU ARRAY', empresas.list)
      }).catch((err) => {
        console.log('erro ao pegar lista de empresas', err)
      })
    },[]);

    {empresas && 
        empresas.list.map((item) => {
        let temp1 = bestPlansTv
        let temp2 = bestPlanLandline
        let temp3 = bestPlanBroadband
        let temp4 = bestPlanAddon

        if (item.type === 'TV') {
            temp1.push(item);
            console.log(item);
            if (temp1.length > 1) {
                if (temp1[0].price < temp1[1].price) {
                    console.log('o plano mais em conta é', temp1[0])
                } else {
                    console.log('o plano mais em conta é', temp1[1])
                }
            }
        }
        if (item.type === 'LANDLINE') {
            temp2.push(item)
        }
        if (item.type === 'BROADBAND') {
            temp3.push(item)
        }
        if (item.type === 'ADDON') {
            temp4.push(item)
        }
    });


    return (
        <View>
            <Text>olamundo</Text>
            {/* {empresas ?
                <FlatList
                    data={empresas.list}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <Text>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            :
                null
            } */}
        </View>
    )
}}