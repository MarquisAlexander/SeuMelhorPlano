import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import api from '../../services/api';
import {styles} from './styles'

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
    const [count, setCount] = useState(0);
    let plans = [];

    useEffect(() => {
      api.get('api/options', {params: {
        lat: infoLocationUser.latitude,
        lon: infoLocationUser.longitude
      }}).then((resp) => {
        setEmpresas(resp.data)
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
                if (temp1.length > 1 && !bestPlanTv) {
                    if (temp1[0].price < temp1[1].price) {
                        setBestPlanTv(temp1[0])
                    } else {
                        setBestPlanTv(temp1[1])
                    }
                }
            }
            if (item.type === 'LANDLINE') {
                temp2.push(item);
                if (temp2.length > 1 && !bestPlanLandline) {
                    if (temp2[0].price < temp2[1].price) {
                        setBestPlanLandline(temp2[0])
                    } else {
                        setBestPlanLandline(temp2[1])
                    }
                }
            }
            if (item.type === 'BROADBAND') {
                temp3.push(item);
                if (temp3.length > 1 && !bestPlanBroadband) {
                    if (temp3[0].price < temp3[1].price) {
                        setBestPlanBroadband(temp3[0])
                    } else {
                        setBestPlanBroadband(temp3[1])
                    }
                }
            }
            if (item.type === 'ADDON') {
                temp4.push(item);
                if (temp4.length > 1 && !bestPlanAddon) {
                    if (temp4[0].price < temp4[1].price) {
                        setBestPlanAddon(temp4[0])
                    } else {
                        setBestPlanAddon(temp4[1])
                    }
                }
            }
        }
        )
    };

    {(typeof(bestPlanTv) === 'object') && (typeof(bestPlanLandline) === 'object') && (typeof(bestPlanBroadband) === 'object') && (typeof(bestPlanAddon) === 'object') ? 
        buildPlans()
    :
        console.log('não é um objeto')
    }

    function buildPlans() {
        plans.push(bestPlanTv,bestPlanLandline,bestPlanBroadband,bestPlanAddon);

        if (plans.length >= 0 && count <= plans.length){
            let temporary = plans.pop()
            console.log('###################Plano count####################', temporary)
            console.log('###################Plano count####################', plans)
            setCount(count + 1)
            console.log('###################COUNT####################', count)
        }
    }

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
                marginTop: 10
            }}
          />
        );
    }

    return (
        <View style={{marginTop: 40}}>
            {bestPlanTv && bestPlanLandline && bestPlanBroadband && bestPlanAddon ? 
                <FlatList
                    data={plans}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                style={styles.containerCardOffer}
                                onPress={() => navigation.navigate('Maps', {plans, infoLocationUser})}
                            >
                                <Text style={styles.text}>
                                    Pacote 1
                                </Text>
                                <Text style={styles.text}>
                                {bestPlanTv.name} {bestPlanLandline.name} {bestPlanBroadband.name} {bestPlanAddon.name}
                                </Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.text}>R$ 250,00</Text>
                                    <Text style={styles.text}>100 Km</Text>
                                </View>
                                {}
                            </TouchableOpacity>
                        )
                    }}
                    ItemSeparatorComponent = {FlatListItemSeparator}
                />
            : 
                <View style={styles.loadingPage}>
                    <ActivityIndicator color="#32B768"/>
                </View>
            }
        </View>
    )
}