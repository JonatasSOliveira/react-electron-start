const crypto = require("crypto");

const Usuario = require("../model/Usuario");

module.exports = {
  requisitarLogin: async (event, { login, senha }) => {
    try {
      const senhaCripto = crypto.createHash("md5").update(senha).digest("HEX");
      const retornoUsuario = await Usuario.findOne({
        attributes: ["nome", "tipo_usuario"],
        where: {
          login,
          senha: senhaCripto,
          dt_hr_exclusao: null,
        },
      });

      event.returnValue = {
        status: true,
        dados: {
          usuario: retornoUsuario,
        },
      };
    } catch (error) {
      console.error("[controller Usuario - f requisitarLogin] Erro:", error);
      event.returnValue = {
        status: false,
        error,
      };
    }
  },
};
