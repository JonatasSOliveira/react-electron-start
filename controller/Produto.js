const Produto = require("../model/Produto");

module.exports = {
  salvar: async (event, produto) => {
    try {
      const { nome, id_empresa } = produto;

      const produtoExiste = await Produto.findOne({
        attributes: ["id_pk", "cod_interno"],
      });

      if (produtoExiste) {
        event.returnValue = {
          status: true,
          dados: {
            produtoExiste,
          },
        };

        return;
      }

      const { descricao, vr_custo, vr_venda } = produto;
      await Produto.create({
        nome,
        id_empresa,
        descricao,
        vr_custo,
        vr_venda,
      });

      event.returnValue = {
        status: true,
        dados: {
          produtoSalvo: true,
        },
      };
    } catch (error) {
      console.error("[controller Produto - f salvar] Erro:", error);
      event.returnValue = {
        status: false,
        error,
      };
    }
  },
};
