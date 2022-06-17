import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .isLength({ min: 5 })
      .withMessage("O título precisa ter no mínimo 5 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("O campo nota Precisa ser numérico!")
      .custom((value: number) => {
        if (value < 0 || value > 10)
          throw new Error("A nota precisa ser entre 0 a 10");
        return true; //* em caso de sucesso!
      }),
    body("description").isString().withMessage("A descrição é obrigatória"),
    body("director").isString().withMessage("O nome do diretor é obrigatório!"),
    body("poster").isURL().withMessage("A Imagem precisa ser uma URL."),
  ];
};
