import React from "react";

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
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "รอ" },
    ],
  },
  {
    date: "01/01/69",
    total: 15000,
    records: [
      { name: "กิตติพงษ์ จัน.", amount: 5000, status: "รอ" },
      { name: "ลัทธวรรณ อินทร์.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/02/69",
    total: 15000,
    records: [
      { name: "ลัทธวรรณ อินทร์.", amount: 5000, status: "รอ" },
      { name: "จุฑารัตน์ ทิพ.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/03/69",
    total: 15000,
    records: [
      { name: "จุฑารัตน์ ทิพ.", amount: 5000, status: "รอ" },
      { name: "สรารัตน์ นน.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/04/69",
    total: 15000,
    records: [
      { name: "สรารัตน์ นน.", amount: 5000, status: "รอ" },
      { name: "จุฑาทิพย์ ปร.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/05/69",
    total: 15000,
    records: [
      { name: "จุฑาทิพย์ ปร.", amount: 5000, status: "รอ" },
      { name: "อภิญญา มูล.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/05/69",
    total: 15000,
    records: [
      { name: "อภิญญา มูล.", amount: 5000, status: "รอ" },
      { name: "อารีรักษ์ นพ.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/06/69",
    total: 15000,
    records: [
      { name: "อารีรักษ์ นพ.", amount: 5000, status: "รอ" },
      { name: "สุภารัตน์ สง.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/07/69",
    total: 15000,
    records: [
      { name: "สุภารัตน์ สง.", amount: 5000, status: "รอ" },
      { name: "เศรษฐวัฒน์ ศรี.", amount: 10000, status: "รอ" },
    ],
  },
  {
    date: "01/07/69",
    total: 15000,
    records: [
      { name: "เศรษฐวัฒน์ ศรี.", amount: 5000, status: "รอ" },
    ],
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
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">สรุปยอดรายเดือน</h1>

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

                  {/* LINE: STATUS + NAME + AMOUNT */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">

                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                          rec.status
                        )}`}
                      >
                        {rec.status}
                      </span>

                      <span className="text-gray-800">{rec.name}</span>
                    </div>

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
    </div>
  );
}
