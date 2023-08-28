import React from "react";

const SuspendedPage = () => {
  const contactAdmin = () => {
    // ทำการติดต่อผู้ดูแล โดยใช้วิธีที่คุณต้องการ เช่น ส่งอีเมลหรือโทรศัพท์
    alert("ติดต่อผู้ดูแลระบบ");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold mb-6">บัญชีของคุณถูกระงับ</h1>
      <p className="text-xl text-gray-600 text-center mb-8">
        ขออภัย บัญชีของคุณถูกระงับเนื่องจากการละเมิดของเรา เงื่อนไขการให้บริการ.
        หากคุณเชื่อว่านี่เป็นข้อผิดพลาด โปรดติดต่อเรา ทีมสนับสนุน
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
        onClick={contactAdmin}
      >
        ติดต่อผู้ดูแล
      </button>
    </div>
  );
};

export default SuspendedPage;
