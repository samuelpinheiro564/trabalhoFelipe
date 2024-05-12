import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  titulo: {
    fontSize: 35,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  ultimoTitulo: {
    fontSize: 35,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
  botao: {
    marginTop: 20,
    padding: 10,
    width: "60%",
    backgroundColor: "#1c252b",
    borderRadius: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    shadowColor: "#1ED27C",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitulo: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 10,
    textAlign: "left",
  },
  subtema: {
    fontSize: 18,
    margin: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "right",
  },
  textobotao: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    marginRight: 2,
  },
  imga: {
    width: 300,
    height: 250,
    marginTop: 50,
  },
  gradient: {
    position: "absolute",
    zIndex: -10,
    top: -250,
    left: 0,
    height: "100%",
    width: "100%",
  },
});

export default styles;