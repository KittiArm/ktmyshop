import React, { useState } from "react";

const data = [
  {
    date: "1 พฤศจิกายน 2568",
    total: 5000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "โอนแล้ว" },
    ],
  },
  {
    date: "1 ธันวาคม 2568",
    total: 5000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "รอ" },
    ],
  },
  {
    date: "1 มกราคม 2569",
    total: 15000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "รอ" },
      { name: "ลัทธวรรณ อินทร์.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 กุมภาพันธ์ 2569",
    total: 15000,
    records: [
      { name: "ลัทธวรรณ อินทร์.", amount: 5000, status: "รอ" },
      { name: "จุฑารัตน์ ทิพ.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 มีนาคม 2569",
    total: 15000,
    records: [
      { name: "จุฑารัตน์ ทิพ.", amount: 5000, status: "รอ" },
      { name: "สรารัตน์ นน.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 เมษายน 2569",
    total: 15000,
    records: [
      { name: "สรารัตน์ นน.", amount: 5000, status: "รอ" },
      { name: "จุฑาทิพย์ ปร.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 พฤษภาคม 2569",
    total: 15000,
    records: [
      { name: "จุฑาทิพย์ ปร.", amount: 5000, status: "รอ" },
      { name: "อภิญญา มูล.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 มิถุนายน 2569",
    total: 15000,
    records: [
      { name: "อภิญญา มูล.", amount: 5000, status: "รอ" },
      { name: "อารีรักษ์ นพ.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 กรกฎาคม 2569",
    total: 15000,
    records: [
      { name: "อารีรักษ์ นพ.", amount: 5000, status: "รอ" },
      { name: "สุภารัตน์ สง.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 สิงหาคม 2569",
    total: 15000,
    records: [
      { name: "สุภารัตน์ สง.", amount: 5000, status: "รอ" },
      { name: "เศรษฐวัฒน์ ศรี.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "1 กันยายน 2569",
    total: 15000,
    records: [
      { name: "เศรษฐวัฒน์ ศรี.", amount: 5000, status: "รอ" },
    ],
  },
];

const data_balance = [
  {
    total: 23510,
    name: "วิชุดา วง.", 
    account_number: "020-2-00658-142", 
    bank: "ออมสิน", 
    status: "ยังไม่หมด",
    paid: [
      { date: "2 ธันวาคม 2568", paid: 15000 },
    ],
  },
  {
    total: 33900,
    name: "อริสรา ยุ.", 
    account_number: "119-8-31376-5", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
    paid: [
      { date: "2 ธันวาคม 2568", paid: 15000 },
    ],
  },
  {
    total: 43650,
    name: "กมลวรรณ ใจ.", 
    account_number: "052-8-44817-8", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
    paid: [
      { date: "2 ธันวาคม 2568", paid: 15000 },
    ],
  },
  {
    total: 29400,
    name: "จินต์จุฑา พฤ.", 
    account_number: "035-8-93153-7", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
    paid: [
      { date: "2 ธันวาคม 2568", paid: 15000 },
    ],
  },
  {
    total: 46600,
    name: "กิตติพงษ์ จัน.", 
    account_number: "130-1-25954-5", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
    paid: [
      { date: "2 ธันวาคม 2568", paid: 4500 },
      { date: "2 ธันวาคม 2568", paid: 500 },
    ],
  },
  {
    total: 45323,
    name: "ลัทธวรรณ อินทร์.", 
    account_number: "015-1-74718-3", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
  },
  {
    total: 23600,
    name: "จุฑารัตน์ ทิพ.", 
    account_number: "408-5-51874-7", 
    bank: "ไทยพาณิชย์", 
    status: "ยังไม่หมด",
  },
  {
    total: 24956,
    name: "สรารัตน์ นน.", 
    account_number: "085-2-86836-8", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
  },
  {
    total: 23600,
    name: "จุฑาทิพย์ ปร.", 
    account_number: "128-2-96541-7", 
    bank: " กสิกรไทย", 
    status: "ยังไม่หมด",
  },
  {
    total: 31900,
    name: "อภิญญา มูล.", 
    account_number: "071-8-73687-0", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
  },
  {
    total: 43080,
    name: "อารีรักษ์ นพ.", 
    account_number: "283-2-12830-1", 
    bank: "ไทยพาณิชย์", 
    status: "ยังไม่หมด",
  },
  {
    total: 34450,
    name: "ศุภรัตน์ สง.", 
    account_number: "985-9-95239-6", 
    bank: "กรุงไทย", 
    status: "ยังไม่หมด",
  },
  {
    total: 37587,
    name: "เศรษฐวัฒน์ ศรี.", 
    account_number: "065-1-47622-4", 
    bank: "กสิกรไทย", 
    status: "ยังไม่หมด",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "โอนแล้ว":
      return "bg-green-100 text-green-700 border-green-300";
    case "รอ":
      return "bg-yellow-100 text-yellow-700 border-yellow-300 animate-soft-blink";
    default:
      return "bg-red-100 text-red-700 border-red-300";
  }
}

export default function App() {
  const [mode, setMode] = useState("current");

  const totalBalance = data.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="min-h-screen p-4">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-center mb-2">รอรับเงินคืน</h1>

      {/* TOGGLE SWITCH */}
      <div className="flex justify-center mt-4 mb-6">
        <div
          className="flex items-center bg-white p-1 rounded-full shadow cursor-pointer select-none"
          onClick={() =>
            setMode(mode === "current" ? "balance" : "current")
          }
        >
          <div
            className={`px-4 py-1 text-sm rounded-full transition-all ${
              mode === "current"
                ? "bg-blue-500 text-white"
                : "text-gray-600"
            }`}
          >
            สถานะปัจจุบัน
          </div>
          <div
            className={`px-4 py-1 text-sm rounded-full transition-all ${
              mode === "balance"
                ? "bg-blue-500 text-white"
                : "text-gray-600"
            }`}
          >
            เช็คยอดคงเหลือ
          </div>
        </div>
      </div>

      {/* MODE DISPLAY */}
      {mode === "balance" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data_balance.map((item, index) => {
            const totalPaid = item.paid ? item.paid.reduce((sum, p) => sum + p.paid, 0) : 0;
            const remaining = item.total - totalPaid;

            return (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 w-full">

                  {/* INDEX */}
                  <span className="text-xl font-bold text-purple-500 w-6 text-center pr-3">
                    {index + 1}
                  </span>

                  {/* NAME + STATUS */}
                  <div className="flex flex-col flex-1 min-w-0 gap-1">
                    <span className="text-gray-800 font-medium truncate">{item.name}</span>
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full border w-max ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* AMOUNT */}
                  <div className="flex flex-col items-end text-right whitespace-nowrap">
                    <span className="text-gray-400 text-xs">เต็ม: {item.total.toLocaleString()} ฿</span>
                    <span className="text-purple-600 font-bold text-lg">เหลือ: {remaining.toLocaleString()} ฿</span>
                    <span className="text-gray-500 text-sm">จ่ายแล้ว: {totalPaid.toLocaleString()} ฿</span>
                  </div>

                </div>
                <div className="text-center mt-1">
                    <span className="text-gray-400 text-xs">บัญชี: {item.account_number} / {item.bank}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      
      {mode === "current" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{item.date}</h2>
                <span className="text-blue-600 font-bold text-md">
                  รวม {item.total.toLocaleString()} ฿
                </span>
              </div>

              <div className="space-y-2">
                {item.records.map((rec, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg flex flex-col">

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {/* STATUS */}
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                            rec.status
                          )}`}
                        >
                          {rec.status}
                        </span>

                        {/* NAME */}
                        <span className="text-gray-800">{rec.name}</span>
                      </div>

                      {/* AMOUNT */}
                      <span className="font-semibold">
                        {rec.amount.toLocaleString()} ฿
                      </span>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}