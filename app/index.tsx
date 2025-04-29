import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "André",
    cargo: "Professor"
  },
  {
    id: 2,
    nome: "Cicinho Cabeça",
    cargo: "Aluno"
  }
];
export default function Index() {
  return (
    <View
      style={style.container}
      >
       {
        usuarios.map( item => (
          <Text style={{ fontSize: 30 }}>{item.nome}</Text>
        ))
       }
    </View>
  );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
   
  })