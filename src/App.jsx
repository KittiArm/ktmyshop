import React, { useState } from "react";

const data = [
  {
    date: "01/11/68",
    total: 5000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "โอนแล้ว" },
    ],
  },
  {
    date: "01/12/68",
    total: 5000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/01/69",
    total: 15000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "ยังไม่หมด" },
      { name: "ลัทธวรรณ อินทร์.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/02/69",
    total: 15000,
    records: [
      { name: "ลัทธวรรณ อินทร์.", amount: 5000, status: "ยังไม่หมด" },
      { name: "จุฑารัตน์ ทิพ.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/03/69",
    total: 15000,
    records: [
      { name: "จุฑารัตน์ ทิพ.", amount: 5000, status: "ยังไม่หมด" },
      { name: "สรารัตน์ นน.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/04/69",
    total: 15000,
    records: [
      { name: "สรารัตน์ นน.", amount: 5000, status: "ยังไม่หมด" },
      { name: "จุฑาทิพย์ ปร.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/05/69",
    total: 15000,
    records: [
      { name: "จุฑาทิพย์ ปร.", amount: 5000, status: "ยังไม่หมด" },
      { name: "อภิญญา มูล.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/05/69",
    total: 15000,
    records: [
      { name: "อภิญญา มูล.", amount: 5000, status: "ยังไม่หมด" },
      { name: "อารีรักษ์ นพ.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/06/69",
    total: 15000,
    records: [
      { name: "อารีรักษ์ นพ.", amount: 5000, status: "ยังไม่หมด" },
      { name: "สุภารัตน์ สง.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/07/69",
    total: 15000,
    records: [
      { name: "สุภารัตน์ สง.", amount: 5000, status: "ยังไม่หมด" },
      { name: "เศรษฐวัฒน์ ศรี.", amount: 10000, status: "ยังไม่หมด" },
    ],
  },
  {
    date: "01/07/69",
    total: 15000,
    records: [
      { name: "เศรษฐวัฒน์ ศรี.", amount: 5000, status: "ยังไม่หมด" },
    ],
  },
];

const data_balance = [
  {
    total: 8510,
    name: "วิชุดา วง.", 
    status: "ยังไม่หมด"
  },
  {
    total: 18900,
    name: "อริสรา ยุ.", 
    status: "ยังไม่หมด"
  },
  {
    total: 28650,
    name: "กมลวรรณ ใจ.", 
    status: "ยังไม่หมด"
  },
  {
    total: 14400,
    name: "จินต์จุฑา พฤ.", 
    status: "ยังไม่หมด"
  },
  {
    total: 41600,
    name: "กิตติพงษ์ จัน.", 
    status: "ยังไม่หมด"
  },
  {
    total: 45323,
    name: "ลัทธวรรณ อินทร์.",
    status: "ยังไม่หมด"
  },
  {
    total: 23600,
    name: "จุฑารัตน์ ทิพ.", 
    status: "ยังไม่หมด"
  },
  {
    total: 24956,
    name: "สรารัตน์ นน.", 
    status: "ยังไม่หมด"
  },
  {
    total: 23600,
    name: "จุฑาทิพย์ ปร.", 
    status: "ยังไม่หมด"
  },
  {
    total: 31900,
    name: "อภิญญา มูล.", 
    status: "ยังไม่หมด"
  },
  {
    total: 43080,
    name: "อารีรักษ์ นพ.", 
    status: "ยังไม่หมด"
  },
  {
    total: 34450,
    name: "สุภารัตน์ สง.", 
    status: "ยังไม่หมด"
  },
  {
    total: 37587,
    name: "เศรษฐวัฒน์ ศรี.", 
    status: "ยังไม่หมด"
  },
];

function getStatusColor(status) {
  switch (status) {
    case "โอนแล้ว":
      return "bg-green-100 text-green-700 border-green-300";
    case "ยังไม่หมด":
      return "bg-yellow-100 text-yellow-700 border-yellow-300 animate-soft-blink";
    default:
      return "bg-red-100 text-red-700 border-red-300";
  }
}

export default function App() {
  const [mode, setMode] = useState("current");

  const totalBalance = data.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data_balance.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition"
            >
              
              <div className="grid grid-cols-1 gap-2 w-full">

                {/* STATUS */}
                <span
                  className={`w-full px-2 py-1 text-xs font-semibold rounded-full border text-center ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

                {/* AMOUNT */}
                <div className="text-purple-600 font-bold text-lg text-center">
                  {item.total.toLocaleString()} ฿
                </div>

                {/* NAME */}
                <div className="text-gray-800 font-medium truncate text-center">
                  {item.name}
                </div>

              </div>


            </div>
          ))}
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