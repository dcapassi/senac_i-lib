import QRCode from "qrcode";
import fs from "fs";

class GerarQRCode {
  async show(req, res) {
    const path = `src/app/qrCodes`;
    const { string } = req.body;
    QRCode.toFile(
      `${path}/${string}.png`,
      string,
      {
        color: {
          dark: "#000000", // Partes escura em preta
          light: "#FFFFFF", // Parte clara em branco
        },
      },
      function (err) {
        if (err) {
          return res.status(400).json({ erro: "Erro na geração do QR-Code" });
        }
      }
    );

    setTimeout(() => {
      fs.readFile(`${path}/${string}.png`, (err, data) => {
        let base64 = data.toString("base64");
        console.log("Data: " + base64);
        return res.json({ base64 });
      });
    }, 500);
  }
}

export default new GerarQRCode();
