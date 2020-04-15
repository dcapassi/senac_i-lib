import Avatar from "../models/Avatar";

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    console.log(name);

    const userId = res.id;
    const response = await Avatar.create({
      id_usuario: userId,
      nome: path,
    }).catch((err) => {
      return res.status(400).json({ erro: err });
    });
    return res.json({ status: response });
  }
}

export default new AvatarController();
