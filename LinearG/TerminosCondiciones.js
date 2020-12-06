/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, CheckBox, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TerminosCondiciones = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <LinearGradient start={{x: -0.4, y: 0.4}}
        end={{x: 0.9, y: 1.2}}
        locations={[0, 0.6, 1.1]}
        colors={['#FFFF', '#0017ff', '#0017ff']}
        style={styles.linearGradient}>
        <View>
            <View style={styles.vTitle}>
                <Text style={styles.textTC}>TÉRMINOS Y CONDICIONES DE LA APLICACIÓN MÓVIL</Text>
            </View>
            <ScrollView style={styles.scrollview}>
                <View style={styles.vTitle2}>
                    <Text style={styles.lectura}>El presente documento establece las condiciones mediante las cuales se regirá el uso de la aplicación móvil: Vaint Service.
                        La aplicación funcionará como un nuevo canal para la realización de ciertas actividades descritas más adelante
                        con el objeto de facilitar el acceso a los clientes de la compañía.</Text>
                    <Text style={styles.lectura}>El usuario se compromete a leer los términos y condiciones aquí establecidas, previamente a la descarga de la
                        aplicación, por tanto, en caso de realizar la instalación se entiende que cuenta con el conocimiento integral de
                        este documento y la consecuente aceptación de la totalidad de sus estipulaciones.</Text>
                    <Text style={styles.lectura}>El Usuario reconoce que el ingreso de su información personal, y los datos que contiene la aplicación a su
                        disposición respecto a los productos activos con las compañías del Grupo, la realizan de manera voluntaria,
                        quienes optan por acceder a esta aplicación en el país o desde fuera del territorio nacional, lo hacen por
                        iniciativa propia y son responsables del cumplimiento de las leyes locales, en la medida en que dichas leyes
                        sean aplicables en su correspondiente país, y declaran y manifiestan que son mayores de edad.</Text>
                    <Text style={styles.textTC}>ALCANCE Y USO</Text>
                    <Text style={styles.lectura}>
                        En la aplicación se pondrá a disposición del CLIENTE información y/o permitirá la realización de las
                        transacciones determinadas o habilitadas por la compañía para cada producto en particular. La compañía podrá
                        adicionar, modificar o eliminar las funcionalidades en cualquier momento, lo cual acepta el usuario mediante la
                        instalación de la aplicación.
                        Los tiempos de respuesta, tramites y demás solicitudes efectuadas por el usuario mediante la aplicación serán
                        procesadas de conformidad con las especificaciones de cada producto activo con la Compañía.
                        El usuario acepta y autoriza que los registros electrónicos de las actividades mencionadas, que realice en la
                        aplicación constituyen plena prueba de los mismos.
                    </Text>
                    <Text  style={styles.textTC}>REQUISITOS PARA USO </Text>
                    <Text  style={styles.lectura}>
                        El usuario deberá contar con un dispositivo móvil inteligente (Smartphone) o Tableta con sistema operativo
                        Android o IOS, cualquier de estos con acceso a internet, ambos seguros y confiables. La compañía, no será
                        responsable por la seguridad de los equipos utilizados por el usuario para el acceso al canal, ni por la
                        disponibilidad del servicio en los dispositivos en los cuales se descargue la aplicación.
                        la Compañía no asume responsabilidad por pérdida directa o indirecta o consecuencial del uso de la aplicación,
                        por tanto será de responsabilidad única del usuario el uso de la misma y los datos incluidos en ella. En la forma
                        permitida por la ley, los materiales de la aplicación se suministran sin garantía de ningún género, expresa o
                        implícita, incluyendo sin limitación las garantías de calidad satisfactoria, comerciabilidad, adecuación para un
                        fin particular o no infracción, por tanto, la Compañía no garantiza el funcionamiento adecuado en los distintos
                        sistemas operativos o dispositivos en los cuales se haga uso de la aplicación.
                        Para acceder al portal, EL CLIENTE contará con Usuario y Clave, que lo identifica en su relación con la
                        Compañía, los cuales serán los mismos utilizados en el portal web. Adicional a lo anterior EL CLIENTE tendrá
                        la obligación de registrar preguntas de seguridad, las cuales serán solicitadas al momento de intentar ingresar
                        el portal, sólo cuando se ingrese desde un equipo registrado no se solicitará responder las preguntas definidas
                        con anterioridad.
                    </Text>
                    <View style={styles.viewcheck}>
                        <View style={styles.containercheck}>
                            <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}/>
                            <Text style={styles.textcheck}>He leido los terminos y condiciones</Text>
                        </View>
                    </View>
                    <View style={styles.btnNext}>
                        <Button disable={true} title="Acceder" color="#2d2631" size="medium"/>
                    </View>
                </View>
            </ScrollView>
        </View>
    </LinearGradient>
    );
};
var styles = StyleSheet.create({
    btnNext: {
    backgroundColor: 'white',
    marginRight: '30%',
    marginLeft: '30%',
  },
    containercheck: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    textcheck: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    checkbox: {
        alignSelf: 'center',
    },
    lectura: {
      fontSize: 16,
      alignSelf: 'center',
    },
    vTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 20,
    },
    vTitle2: {
        alignSelf: 'center',
        margin: 20,
        marginBottom: '60%',
    },
    textTC: {
      fontWeight: 'bold',
      fontSize: 16,
      alignSelf: 'center',
    },
    viewcheck: {
        marginTop: '10%',
        flex: 1,
        alignItems: 'center',
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
      paddingVertical: 20,
    },
});
export default TerminosCondiciones;
