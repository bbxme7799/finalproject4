const { getWalletTransactions } = require("./moralis/moralis");

const handler = async (req, res) => {
  try {
    // เรียกใช้ฟังก์ชัน getWalletTransactions ที่นี่หรือเพิ่มตัวดัดแปลงข้อมูลอื่น ๆ ตามที่คุณต้องการ
    // ตัวอย่าง:
    const walletTransactions = await getWalletTransactions();

    res.status(200).json({ walletTransactions });
  } catch (error) {
    res.status(500).json({ error: "มีข้อผิดพลาดในการดำเนินการ" });
  }
};

export default handler;
