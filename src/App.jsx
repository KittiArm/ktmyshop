import React, { useState } from "react";

const data = [
  {
    month: "พฤศจิกายน 2568",
    total: 5000,
    records: [
      { round: "1-9/30", date: "1 พฤศจิกายน 2568", name: "กิตติพงษ์ จัน.", amount: 4500, status: "โอนแล้ว" },
      { round: "10/30", date: "1 พฤศจิกายน 2568", name: "กิตติพงษ์ จัน.", amount: 500, status: "โอนแล้ว" },
    ],
  },
  {
    month: "มกราคม 2569",
    total: 500,
    records: [
      { round: "11/30", date: "31 มกราคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "โอนแล้ว" },
    ],
  },
  {
    month: "กุมภาพันธ์ 2569",
    total: 5000,
    records: [
      { round: "12-13/30", date: "24 กุมภาพันธ์ 2569", name: "กิตติพงษ์ จัน.", amount: 1000, status: "รอ" },
      { round: "14-15/30", date: "25 กุมภาพันธ์ 2569", name: "กิตติพงษ์ จัน.", amount: 1000, status: "รอ" },
      { round: "16-17/30", date: "26 กุมภาพันธ์ 2569", name: "กิตติพงษ์ จัน.", amount: 1000, status: "รอ" },
      { round: "18-19/30", date: "27 กุมภาพันธ์ 2569", name: "กิตติพงษ์ จัน.", amount: 1000, status: "รอ" },
      { round: "20-21/30", date: "28 กุมภาพันธ์ 2569", name: "กิตติพงษ์ จัน.", amount: 1000, status: "รอ" },
    ],
  },
  {
    month: "มีนาคม 2569",
    total: 15500,
    records: [
      { round: "22/30", date: "1 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "23/30", date: "2 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "24/30", date: "3 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "25/30", date: "4 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "26/30", date: "5 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "27/30", date: "6 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "28/30", date: "7 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "29/30", date: "8 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      { round: "30/30", date: "9 มีนาคม 2569", name: "กิตติพงษ์ จัน.", amount: 500, status: "รอ" },
      
      { round: "1/30", date: "10 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "2/30", date: "11 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "3/30", date: "12 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "4/30", date: "13 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "5/30", date: "14 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "6/30", date: "15 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "7/30", date: "16 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "8/30", date: "17 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "9/30", date: "18 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "10/30", date: "19 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "11/30", date: "20 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "12/30", date: "21 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "13/30", date: "22 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "14/30", date: "23 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "15/30", date: "24 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "16/30", date: "25 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "17/30", date: "26 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "18/30", date: "27 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "19/30", date: "28 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "20/30", date: "29 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "21/30", date: "30 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "22/30", date: "31 มีนาคม 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
    ],
  },
  {
    month: "เมษายน 2569",
    total: 15000,
    records: [
      { round: "23/30", date: "1 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "24/30", date: "2 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "25/30", date: "3 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "26/30", date: "4 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "27/30", date: "5 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "28/30", date: "6 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "29/30", date: "7 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      { round: "30/30", date: "8 เมษายน 2569", name: "ลัทธวรรณ อินทร์.", amount: 500, status: "รอ" },
      
      { round: "1/30", date: "9 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "2/30", date: "10 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "3/30", date: "11 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "4/30", date: "12 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "5/30", date: "13 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "6/30", date: "14 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "7/30", date: "15 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "8/30", date: "16 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "9/30", date: "17 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "10/30", date: "18 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "11/30", date: "19 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "12/30", date: "20 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "13/30", date: "21 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "14/30", date: "22 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "15/30", date: "23 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "16/30", date: "24 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "17/30", date: "25 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "18/30", date: "26 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "19/30", date: "27 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "20/30", date: "28 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "21/30", date: "29 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "22/30", date: "30 เมษายน 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" }, 
      // 22
    ],
  },
  {
    month: "พฤษภาคม 2569",
    total: 15500,
    records: [
      { round: "23/30", date: "1 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "24/30", date: "2 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "25/30", date: "3 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "26/30", date: "4 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "27/30", date: "5 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "28/30", date: "6 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "29/30", date: "7 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      { round: "30/30", date: "8 พฤษภาคม 2569", name: "จุฑารัตน์ ทิพ.", amount: 500, status: "รอ" },
      
      { round: "1/30", date: "9 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "2/30", date: "10 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "3/30", date: "11 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "4/30", date: "12 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "5/30", date: "13 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "6/30", date: "14 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "7/30", date: "15 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "8/30", date: "16 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "9/30", date: "17 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "10/30", date: "18 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "11/30", date: "19 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "12/30", date: "20 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "13/30", date: "21 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "14/30", date: "22 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "15/30", date: "23 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "16/30", date: "24 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "17/30", date: "25 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "18/30", date: "26 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "19/30", date: "27 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "20/30", date: "28 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "21/30", date: "29 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" },
      { round: "22/30", date: "30 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" }, 
      { round: "23/30", date: "31 พฤษภาคม 2569", name: "สรารัตน์ นน.", amount: 500, status: "รอ" }, 
    ],
  },
  // {
  //   date: "1 ธันวาคม 2568",
  //   total: 5000,
  //   records: [
  //     { name: "กิตติพงษ์ จัน.", amount: 500, status: "โอนแล้ว" },
  //     { name: "กิตติพงษ์ จัน.", amount: 4500, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 มกราคม 2569",
  //   total: 15000,
  //   records: [
  //     { name: "กิตติพงษ์ จัน.", amount: 5000, status: "รอ" },
  //     { name: "ลัทธวรรณ อินทร์.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 กุมภาพันธ์ 2569",
  //   total: 15000,
  //   records: [
  //     { name: "ลัทธวรรณ อินทร์.", amount: 5000, status: "รอ" },
  //     { name: "จุฑารัตน์ ทิพ.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 มีนาคม 2569",
  //   total: 15000,
  //   records: [
  //     { name: "จุฑารัตน์ ทิพ.", amount: 5000, status: "รอ" },
  //     { name: "สรารัตน์ นน.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 เมษายน 2569",
  //   total: 15000,
  //   records: [
  //     { name: "สรารัตน์ นน.", amount: 5000, status: "รอ" },
  //     { name: "จุฑาทิพย์ ปร.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 พฤษภาคม 2569",
  //   total: 15000,
  //   records: [
  //     { name: "จุฑาทิพย์ ปร.", amount: 5000, status: "รอ" },
  //     { name: "อภิญญา มูล.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 มิถุนายน 2569",
  //   total: 15000,
  //   records: [
  //     { name: "อภิญญา มูล.", amount: 5000, status: "รอ" },
  //     { name: "อารีรักษ์ นพ.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 กรกฎาคม 2569",
  //   total: 15000,
  //   records: [
  //     { name: "อารีรักษ์ นพ.", amount: 5000, status: "รอ" },
  //     { name: "สุภารัตน์ สง.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 สิงหาคม 2569",
  //   total: 15000,
  //   records: [
  //     { name: "สุภารัตน์ สง.", amount: 5000, status: "รอ" },
  //     { name: "เศรษฐวัฒน์ ศรี.", amount: 10000, status: "รอ" },
  //   ],
  // },
  // {
  //   date: "1 กันยายน 2569",
  //   total: 15000,
  //   records: [
  //     { name: "เศรษฐวัฒน์ ศรี.", amount: 5000, status: "รอ" },
  //   ],
  // },
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
      { date: "31 มกราคม 2569", paid: 500 },
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
    total: 49900,
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

function getStatusColor(status) {
  switch (status) {
    case "โอนแล้ว":
      return "bg-green-100 text-green-700 border-green-300";
    case "รอ":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
}

export default function App() {
  const [mode, setMode] = useState("current");

    // ✅ Filter เดือน
  const [selectedMonth, setSelectedMonth] = useState("all");

  // ✅ Filter สถานะ
  const [selectedStatus, setSelectedStatus] = useState("all");

  /* ------------------ OPTIONS ------------------ */
  const monthOptions = data.map((item) => item.month);

  const statusOptions = ["รอ", "โอนแล้ว"];

  /* ------------------ FILTER LOGIC ------------------ */
  const filteredData =
    selectedMonth === "all"
      ? data
      : data.filter((item) => item.month === selectedMonth);

  // Filter records by status inside each month
  const finalData = filteredData.map((item) => {
    const filteredRecords =
      selectedStatus === "all"
        ? item.records
        : item.records.filter((rec) => rec.status === selectedStatus);

    return {
      ...item,
      records: filteredRecords,
    };
  });

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

      <div className="flex p-4 mb-4 text-sm text-blue-500 rounded-xl bg-blue-100 border border-blue-500" role="alert">
        <svg className="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span className="sr-only">Success</span>
        <div>
          <span className="font-medium">รอบแรกทุกคนจะได้คืนคนละ 15,000 บาทก่อน เมื่อครบ 13 คน แล้วจะวนกลับมาเริ่มใหม่ ทั้งนี้ในรอบแรกขอแบ่งของแต่ละคนเป็นคนละ 30 งวด เพื่อให้ง่ายต่อการ Tracking</span>
        </div>
      </div>
      
      <div className="flex p-4 mb-4 text-sm text-yellow-600 rounded-xl bg-yellow-100 border border-yellow-500" role="alert">
        <svg className="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span className="sr-only">Success</span>
        <div>
          <span className="font-medium">แก้วขอเริ่มเซตใหม่</span>
            <ul className="mt-2 list-disc list-outside space-y-1 ps-2.5">
              <li>กุมภาพันธ์จ่าย 5,000 (จ่ายวันละ 1,000 ในวันที่ 24/25/26/27/28)</li>
              <li>จ่ายวันละ 500 เริ่ม 1 มีนาคม 2569</li>
              {/* <li>Inclusion of at least one special character, e.g., ! @ # ?</li> */}
          </ul>
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
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          {/* FILTER MONTH */}
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 rounded-xl border shadow-sm text-sm"
          >
            <option value="all">📌 ทุกเดือน</option>
            {monthOptions.map((month, idx) => (
              <option key={idx} value={month}>
                {month}
              </option>
            ))}
          </select>

          {/* FILTER STATUS */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 rounded-xl border shadow-sm text-sm"
          >
            <option value="all">📌 ทุกสถานะ</option>
            {statusOptions.map((status, idx) => (
              <option key={idx} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      )}

      
      {mode === "current" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {finalData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500"
            >
              {/* MONTH HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{item.month}</h2>
                <span className="text-blue-600 font-bold">
                  {item.records.length} รายการ
                </span>
              </div>

              {/* RECORDS */}
              {item.records.length === 0 ? (
                <p className="text-gray-400 text-sm text-center">
                  ไม่มีข้อมูลใน filter นี้
                </p>
              ) : (
                <div className="space-y-2">
                  {item.records.map((rec, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-3 rounded-lg flex flex-col"
                    >
                      <span className="text-xs text-gray-500">
                        งวดที่ {rec.round} : {rec.date}
                      </span>

                      <div className="flex justify-between items-center mt-1">
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
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
