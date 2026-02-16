import React, { useState, useEffect, useRef } from "react";

const data = [
	{
		month: "พฤศจิกายน 2568",
		total: 5000,
		records: [
			{
				round: "1-9/30",
				date: "1 พฤศจิกายน 2568",
				name: "กิตติพงษ์ จัน.",
				amount: 4500,
				status: "โอนแล้ว",
			},
			{
				round: "10/30",
				date: "1 พฤศจิกายน 2568",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "โอนแล้ว",
			},
		],
	},
	{
		month: "มกราคม 2569",
		total: 500,
		records: [
			{
				round: "11/30",
				date: "31 มกราคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "โอนแล้ว",
			},
		],
	},
	{
		month: "กุมภาพันธ์ 2569",
		total: 5000,
		records: [
			{
				round: "12-13/30",
				date: "24 กุมภาพันธ์ 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 1000,
				status: "รอ",
			},
			{
				round: "14-15/30",
				date: "25 กุมภาพันธ์ 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 1000,
				status: "รอ",
			},
			{
				round: "16-17/30",
				date: "26 กุมภาพันธ์ 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 1000,
				status: "รอ",
			},
			{
				round: "18-19/30",
				date: "27 กุมภาพันธ์ 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 1000,
				status: "รอ",
			},
			{
				round: "20-21/30",
				date: "28 กุมภาพันธ์ 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 1000,
				status: "รอ",
			},
		],
	},
	{
		month: "มีนาคม 2569",
		total: 15500,
		records: [
			{
				round: "22/30",
				date: "1 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "2 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "3 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "4 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "5 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "6 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "7 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "8 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "9 มีนาคม 2569",
				name: "กิตติพงษ์ จัน.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "10 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "11 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "12 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "13 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "14 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "15 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "16 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "17 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "18 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "19 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "20 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "21 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "22 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "23 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "24 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "25 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "26 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "27 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "28 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "29 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "30 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "31 มีนาคม 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "เมษายน 2569",
		total: 15000,
		records: [
			{
				round: "23/30",
				date: "1 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "2 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "3 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "4 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "5 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "6 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "7 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "8 เมษายน 2569",
				name: "ลัทธวรรณ อินทร์.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "9 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "10 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "11 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "12 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "13 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "14 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "15 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "16 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "17 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "18 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "19 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "20 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "21 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "22 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "23 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "24 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "25 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "26 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "27 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "28 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "29 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "30 เมษายน 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "พฤษภาคม 2569",
		total: 15500,
		records: [
			{
				round: "23/30",
				date: "1 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "2 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "3 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "4 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "5 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "6 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "7 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "8 พฤษภาคม 2569",
				name: "จุฑารัตน์ ทิพ.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "9 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "10 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "11 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "12 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "13 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "14 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "15 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "16 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "17 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "18 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "19 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "20 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "21 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "22 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "23 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "24 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "25 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "26 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "27 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "28 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "29 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "30 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "31 พฤษภาคม 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "มิถุนายน 2569",
		total: 15000,
		records: [
			{
				round: "24/30",
				date: "1 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "2 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "3 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "4 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "5 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "6 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "7 มิถุนายน 2569",
				name: "สรารัตน์ นน.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "8 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "9 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "10 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "11 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "12 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "13 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "14 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "15 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "16 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "17 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "18 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "19 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "20 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "21 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "22 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "23 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "24 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "25 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "26 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "27 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "28 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "29 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "30 มิถุนายน 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "กรกฎาคม 2569",
		total: 15500,
		records: [
			{
				round: "24/30",
				date: "1 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "2 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "3 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "4 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "5 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "6 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "7 กรกฎาคม 2569",
				name: "จุฑาทิพย์ ปร.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "8 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "9 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "10 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "11 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "12 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "13 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "14 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "15 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "16 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "17 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "18 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "19 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "20 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "21 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "22 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "23 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "24 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "25 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "26 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "27 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "28 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "29 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "30 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "31 กรกฎาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "สิงหาคม 2569",
		total: 15500,
		records: [
			{
				round: "25/30",
				date: "1 สิงหาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "2 สิงหาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "3 สิงหาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "4 สิงหาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "5 สิงหาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "6 สิงหาคม 2569",
				name: "อภิญญา มูล.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "7 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "8 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "9 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "10 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "11 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "12 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "13 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "14 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "15 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "16 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "17 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "18 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "19 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "20 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "21 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "22 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "23 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "24 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "25 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "26 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "27 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "28 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "29 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "30 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "31 สิงหาคม 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "กันยายน 2569",
		total: 15000,
		records: [
			{
				round: "26/30",
				date: "1 กันยายน 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "2 กันยายน 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "3 กันยายน 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "4 กันยายน 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "5 กันยายน 2569",
				name: "อารีรักษ์ นพ.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "6 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "7 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "8 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "9 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "10 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "11 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "12 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "13 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "14 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "15 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "16 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "17 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "18 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "19 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "20 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "21 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "22 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "23 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "24 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "25 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "26 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "27 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "28 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "29 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "30 กันยายน 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "ตุลาคม 2569",
		total: 15500,
		records: [
			{
				round: "26/30",
				date: "1 ตุลาคม 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "27/30",
				date: "2 ตุลาคม 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "3 ตุลาคม 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "4 ตุลาคม 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "5 ตุลาคม 2569",
				name: "สุภารัตน์ สง.",
				amount: 500,
				status: "รอ",
			},

			{
				round: "1/30",
				date: "6 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "2/30",
				date: "7 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "3/30",
				date: "8 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "4/30",
				date: "9 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "5/30",
				date: "10 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "6/30",
				date: "11 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "7/30",
				date: "12 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "8/30",
				date: "13 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "9/30",
				date: "14 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "10/30",
				date: "15 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "11/30",
				date: "16 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "12/30",
				date: "17 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "13/30",
				date: "18 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "14/30",
				date: "19 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "15/30",
				date: "20 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "16/30",
				date: "21 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "17/30",
				date: "22 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "18/30",
				date: "23 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "19/30",
				date: "24 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "20/30",
				date: "25 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "21/30",
				date: "26 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "22/30",
				date: "27 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "23/30",
				date: "28 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "24/30",
				date: "29 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "25/30",
				date: "30 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "26/30",
				date: "31 ตุลาคม 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
		],
	},
	{
		month: "พฤศจิกายน 2569",
		total: 2000,
		records: [
			{
				round: "27/30",
				date: "1 พฤศจิกายน 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "28/30",
				date: "2 พฤศจิกายน 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "29/30",
				date: "3 พฤศจิกายน 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
			{
				round: "30/30",
				date: "4 พฤศจิกายน 2569",
				name: "เศรษฐวัฒน์ ศรี.",
				amount: 500,
				status: "รอ",
			},
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
		paid: [{ date: "2 ธันวาคม 2568", paid: 15000 }],
	},
	{
		total: 33900,
		name: "อริสรา ยุ.",
		account_number: "119-8-31376-5",
		bank: "กสิกรไทย",
		status: "ยังไม่หมด",
		paid: [{ date: "2 ธันวาคม 2568", paid: 15000 }],
	},
	{
		total: 43650,
		name: "กมลวรรณ ใจ.",
		account_number: "052-8-44817-8",
		bank: "กสิกรไทย",
		status: "ยังไม่หมด",
		paid: [{ date: "2 ธันวาคม 2568", paid: 15000 }],
	},
	{
		total: 29400,
		name: "จินต์จุฑา พฤ.",
		account_number: "035-8-93153-7",
		bank: "กสิกรไทย",
		status: "ยังไม่หมด",
		paid: [{ date: "2 ธันวาคม 2568", paid: 15000 }],
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

const calculateProgress = () => {
  let paid = 0;
  let total = 0;

  data.forEach((month) => {
    total += month.total;

    month.records.forEach((rec) => {
      if (rec.status === "โอนแล้ว") {
        paid += rec.amount;
      }
    });
  });

  return {
    paid,
    total,
    percent: total > 0 ? Math.round((paid / total) * 100) : 0,
  };
};

const EnergyProgressBar = ({ paid, total, percent }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between text-sm font-medium mb-1">
        <span>การคืนเงิน</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-1">
        คืนแล้ว {paid.toLocaleString()} / {total.toLocaleString()} บาท
      </p>
    </div>
  );
};

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

	const cardRefs = useRef([]);

	const defaultWaitingIndex = data.findIndex((month) =>
		month.records.some((rec) => rec.status === "รอ"),
	);

	useEffect(() => {
		if (defaultWaitingIndex !== -1) {
			setTimeout(() => {
				cardRefs.current[defaultWaitingIndex]?.scrollIntoView({
					behavior: "smooth",
					inline: "center",
				});
			}, 300);
		}
	}, []);

	const [selectedMonth, setSelectedMonth] = useState("all");
	const [selectedStatus, setSelectedStatus] = useState("all");

	const monthOptions = data.map((item) => item.month);
	const statusOptions = ["รอ", "โอนแล้ว"];

	const filteredData =
		selectedMonth === "all"
			? data
			: data.filter((item) => item.month === selectedMonth);

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

	const progress = calculateProgress();

	return (
		<div className="min-h-screen p-4">
			<h1 className="text-2xl font-bold text-center">รอรับเงินคืน</h1>

			<div className="flex justify-center mt-4 mb-2">
				<div
					className="flex items-center bg-white p-1 rounded-full shadow cursor-pointer select-none"
					onClick={() => setMode(mode === "current" ? "balance" : "current")}
				>
					<div
						className={`px-4 py-1 text-sm rounded-full transition-all ${
							mode === "current" ? "bg-blue-500 text-white" : "text-gray-600"
						}`}
					>
						สถานะปัจจุบัน
					</div>
					<div
						className={`px-4 py-1 text-sm rounded-full transition-all ${
							mode === "balance" ? "bg-blue-500 text-white" : "text-gray-600"
						}`}
					>
						เช็คยอดคงเหลือ
					</div>
				</div>
			</div>

			<div className="px-4 rounded-xl shadow-md hover:shadow-lg transition">
			    <EnergyProgressBar
				      paid={progress.paid}
				      total={progress.total}
				      percent={progress.percent}
			    />
			</div>

			{/* MODE DISPLAY */}
			{mode === "balance" && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{data_balance.map((item, index) => {
						const totalPaid = item.paid
							? item.paid.reduce((sum, p) => sum + p.paid, 0)
							: 0;
						const remaining = item.total - totalPaid;

						return (
							<div
								key={index}
								className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition"
							>
								<div className="flex items-center gap-2 w-full">
									<span className="text-xl font-bold text-purple-500 w-6 text-center pr-3">
										{index + 1}
									</span>

									<div className="flex flex-col flex-1 min-w-0 gap-1">
										<span className="text-gray-800 font-medium truncate">
											{item.name}
										</span>
										<span
											className={`px-2 py-0.5 text-xs font-semibold rounded-full border w-max ${getStatusColor(
												item.status,
											)}`}
										>
											{item.status}
										</span>
									</div>

									<div className="flex flex-col items-end text-right whitespace-nowrap">
										<span className="text-gray-400 text-xs">
											เต็ม: {item.total.toLocaleString()} ฿
										</span>
										<span className="text-purple-600 font-bold text-lg">
											เหลือ: {remaining.toLocaleString()} ฿
										</span>
										<span className="text-gray-500 text-sm">
											จ่ายแล้ว: {totalPaid.toLocaleString()} ฿
										</span>
									</div>
								</div>
								<div className="text-center mt-1">
									<span className="text-gray-400 text-xs">
										บัญชี: {item.account_number} / {item.bank}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			)}

			{mode === "current" && (
				<div className="flex flex-row gap-3 justify-center items-center mb-2 bg-white p-4 rounded-2xl shadow-md border max-w-fit mx-auto">
					<select
						value={selectedMonth}
						onChange={(e) => setSelectedMonth(e.target.value)}
						className="px-4 py-2 rounded-xl border shadow-sm text-sm bg-white"
					>
						<option value="all">📌 ทุกเดือน</option>
						{monthOptions.map((month, idx) => (
							<option key={idx} value={month}>
								{month}
							</option>
						))}
					</select>

					<select
						value={selectedStatus}
						onChange={(e) => setSelectedStatus(e.target.value)}
						className="px-4 py-2 rounded-xl border shadow-sm text-sm bg-white"
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
				<div className="mt-2">
					<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
						{finalData.map((monthItem, index) => (
							<div
								key={index}
								ref={(el) => (cardRefs.current[index] = el)}
								className="min-w-[320px] max-w-[320px] snap-center bg-white rounded-2xl shadow-lg border p-4 flex-shrink-0"
							>
								<h2 className="text-lg font-bold text-blue-600">
									{monthItem.month}
								</h2>

								<p className="text-sm text-gray-500 mb-2">
									รวมเดือนนี้:{" "}
									<span className="font-semibold text-black">
										{monthItem.total.toLocaleString()} บาท
									</span>
								</p>

								<div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
									{monthItem.records.length === 0 ? (
										<p className="text-gray-400 text-sm text-center">
											ไม่มีข้อมูลตาม filter
										</p>
									) : (
										monthItem.records.map((rec, i) => (
											<div
												key={i}
												className="p-3 border rounded-xl flex justify-between items-center"
											>
												<div>
													<p className="text-sm font-medium">งวด {rec.round}</p>
													<p className="text-xs text-gray-500">{rec.date}</p>
													<p className="text-xs text-gray-500">{rec.name}</p>
												</div>

												<div className="text-right">
													<p className="font-semibold text-sm">
														{rec.amount.toLocaleString()}฿
													</p>
													<span
														className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(
															rec.status,
														)}`}
													>
														{rec.status}
													</span>
												</div>
											</div>
										))
									)}
								</div>
							</div>
						))}
					</div>
					<p className="text-center text-xs text-gray-400 mb-t">
						👈 ปัดซ้าย–ขวาเพื่อดูแต่ละเดือน
					</p>
				</div>
			)}
		</div>
	);
}
