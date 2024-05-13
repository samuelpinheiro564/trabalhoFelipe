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
  obterCnpj: async (empSenha, empNome) => {
    try {
      const response = await api.get(
        `/empresas/id/${empSenha}/${empNome}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Erro ao verificar Cnpj: " + error.message);
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
  getAllMaquinas: async () => {
    try {
      const response = await api.get("/maquinas");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar maquinas: " + error.message);
    }
  },

  CadastrarMaquinas: async (dadosMaquinas) => {
    try {
      const response = await api.post("/maquinas", dadosMaquinas);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao cadastrar maquina: " + error.message);
    }
  },  
  PesquisarMaquinaMarca: async (maquinaMarca) => {
    try {
      const response = await api.get(`/maquinas/maquina/${maquinaMarca}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao pesquisar maquina: " + error.message);
    }
  },
  PesquisarMaquinaModelo: async (empresaModelo) => {
    try {
      const response = await api.get(`/maquinas/modelo/${empresaModelo}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao pesquisar maquina: " + error.message);
    }
  },
  AtualizarMaquinas: async (maquinasId) => {
    try {
      const response = await api.put(`/maquinas/${maquinasId}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar empresa: " + error.message);
    }
  },
  DeletarMaquinas: async (maquinaId) => {
    try {
      const response = await api.delete(`/maquinas/${maquinaId}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar maquina: " + error.message);
    }
  },

};

export default apiRequests;
