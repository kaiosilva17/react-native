import axios from "axios";

const CepService = {
  async buscar(cep) {
    try {
      cep = cep.replace(/\D/g, '');

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        throw new Error("CEP não encontrado");
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default CepService;