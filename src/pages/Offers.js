import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import api from '../services/api';

export function Offers({navigation, route}) {
    const infoLocationUser = route.params.coords;
    const [empresas, setEmpresas] = useState();
    const [bestPlansTv, setBestPlansTv] = useState([]);
    const [bestPlanTv, setBestPlanTv] = useState();
    const [bestPlansLandline, setBestPlansLandline] = useState([]);
    const [bestPlanLandline, setBestPlanLandline] = useState();
    const [bestPlansBroadband, setBestPlansBroadband] = useState([]);
    const [bestPlanBroadband, setBestPlanBroadband] = useState();
    const [bestPlansAddon, setBestPlansAddon] = useState([]);
    const [bestPlanAddon, setBestPlanAddon] = useState();
    let plans = [];
  
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
        let temp2 = bestPlansLandline
        let temp3 = bestPlansBroadband
        let temp4 = bestPlansAddon

        if (item.type === 'TV') {
            temp1.push(item);
            console.log(item);
            if (temp1.length > 1 && !bestPlanTv) {
                if (temp1[0].price < temp1[1].price) {
                    console.log('o plano mais em conta é', temp1[0])
                    setBestPlanTv(temp1[0])
                } else {
                    console.log('o plano mais em conta é', temp1[1])
                    setBestPlanTv(temp1[1])
                }
            }
        }
        if (item.type === 'LANDLINE') {
            temp2.push(item);
            console.log(item);
            if (temp2.length > 1 && !bestPlanLandline) {
                if (temp2[0].price < temp2[1].price) {
                    console.log('o plano mais em conta é', temp2[0])
                    setBestPlanLandline(temp2[0])
                } else {
                    console.log('o plano mais em conta é', temp2[1])
                    setBestPlanLandline(temp2[1])
                }
            }
        }
        if (item.type === 'BROADBAND') {
            temp3.push(item);
            console.log(item);
            if (temp3.length > 1 && !bestPlanBroadband) {
                if (temp3[0].price < temp3[1].price) {
                    console.log('o plano mais em conta é', temp3[0])
                    setBestPlanBroadband(temp3[0])
                } else {
                    console.log('o plano mais em conta é', temp3[1])
                    setBestPlanBroadband(temp3[1])
                }
            }
        }
        if (item.type === 'ADDON') {
            temp4.push(item);
            console.log(item);
            if (temp4.length > 1 && !bestPlanAddon) {
                if (temp4[0].price < temp4[1].price) {
                    console.log('o plano mais em conta é', temp4[0])
                    setBestPlanAddon(temp4[0])
                } else {
                    console.log('o plano mais em conta é', temp4[1])
                    setBestPlanAddon(temp4[1])
                }
            }
        }
    });

    {bestPlanTv && bestPlanLandline && bestPlanBroadband && bestPlanAddon && 
        plans.push(bestPlanTv,bestPlanLandline,bestPlanBroadband,bestPlanAddon);
        console.log('array com os melhores planos', plans);
    }

    return (
        <View style={{marginTop: 40}}>
            <TouchableOpacity 
                style={styles.containerCardOffer}
                onPress={() => navigation.navigate('Maps', {plans, infoLocationUser})}
            >
                <Text style={styles.text}>Pacote 1</Text>
                <Text style={styles.text}>TV1, Internet 2, Telefone Fixo 1, Adional 1</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.text}>R$ 250,00</Text>
                    <Text style={styles.text}>100 Km</Text>
                </View>
            </TouchableOpacity>
            {bestPlanTv && bestPlanLandline && bestPlanBroadband && bestPlanAddon ? 
                <View>
                    <Text>Melhor plano de TV {bestPlanTv.name}</Text>
                    <Text>Melhor plano de LANDLINE {bestPlanLandline.name}</Text>
                    <Text>Melhor plano de BROADBAND {bestPlanBroadband.name}</Text>
                    <Text>Melhor plano de ADDON {bestPlanAddon.name}</Text>
                </View>
            : null}
            
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

const styles = StyleSheet.create({
    containerCardOffer: {
        backgroundColor: "#32B768",
        marginHorizontal: 5,
        borderRadius: 5,
        padding: 10
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
})