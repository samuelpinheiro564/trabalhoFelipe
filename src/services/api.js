import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiRequests = {
  getAllEmpresas: async () => {
    try {
      const response = await api.get("/empresas");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar empresas: " + error.message);
    }
  },

  CadastrarEmpresa: async (dadosEmpresa) => {
    try {
      const response = await api.post("/empresas", dadosEmpresa);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao cadastrar empresa: " + error.message);
    }
  },  

  AtualizarEmpresa: async (empresaCnpj) => {
    try {
      const response = await api.put(`/empresas/${empresaCnpj}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar empresa: " + error.message);
    }
  },
  PesquisarEmpresa: async (empresaNome) => {
    try {
      const response = await api.get(`/empresas/nome/${empresaNome}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao pesquisar empresa: " + error.message);
    }
  },
  VerificarSenha: async (empSenha, empNome) => {
    try {
      const response = await api.get(
        `/empresas/senha/nome/${empSenha}/${empNome}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Erro ao verificar senha: " + error.message);
    }
  },
  DeletarEmpresa: async (empresaCnpj) => {
    try {
      const response = await api.delete(`/empresas/${empresaCnpj}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar empresa: " + error.message);
    }
  },
};

export default apiRequests;
