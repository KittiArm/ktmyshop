import React, { useState, useEffect, useRef } from "react";

import { paymentData } from "./data/paymentData";
import { balanceData } from "./data/balanceData";

import ProgressBar from "./components/ProgressBar";
import ProgressTextRatio from "./components/ProgressTextRatio";
import ProgressText from "./components/ProgressText";
import { Alert, Button, notification } from "antd";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import html2canvas from "html2canvas";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import "dayjs/locale/th";

dayjs.extend(customParseFormat);
dayjs.extend(isSameOrBefore);
dayjs.locale("th");

function getStatusColor(status) {
	switch (status) {
		case "โอนแล้ว":
			return "bg-green-100 text-green-700 border-green-300";
		case "ล่าช้า":
			return "bg-red-100 text-red-700 border-red-300 animate-soft-blink";
		case "รอ":
			return "bg-yellow-100 text-yellow-700 border-yellow-300 animate-soft-blink";
		default:
			return "bg-red-100 text-red-700 border-red-300";
	}
}

export default function App() {
	const [showNotification, setShowNotification] = useState(true);
	const [mode, setMode] = useState("current");

	const cardRefs = useRef([]);

	const defaultWaitingIndex = paymentData.findIndex((month) =>
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

	const hasShown = useRef(false);

	const onClose = e => {
		console.log(e, 'I was closed.');
	};

	useEffect(() => {
		if (!hasShown.current) {
			let pendingList = [];

			paymentData.forEach((month) => {
				month.records.forEach((rec) => {

					if (rec.date === "ไม่ระบุ") return;

					const parts = rec.date.split(" ");
					const day = parts[0];
					const monthName = parts[1];
					const buddhistYear = parseInt(parts[2]);

					const christianYear = buddhistYear - 543;

					const formattedDate = `${day} ${monthName} ${christianYear}`;
					const recordDate = dayjs(formattedDate, "D MMMM YYYY");

					if (
						rec.status === "รอ" &&
						recordDate.isValid() &&
						recordDate.isSameOrBefore(dayjs(), "day")
					) {
						pendingList.push({
							month: month.month,
							...rec,
						});
					}
				});
			});

			const totalAmount = pendingList.reduce(
				(sum, item) => sum + item.amount,
				0
			);
			

			if (pendingList.length === 0) {
				notification.success({
					message: "ไม่มียอดคงค้าง",
					description: "ไม่มีรายการที่รอและเลยกำหนด",
					duration: 5,
					placement: "bottom",
				});
				hasShown.current = true;
				return;
			} else {
				notification.error({
					message: `มียอดคงค้าง ${pendingList.length} รายการ`,
					description: `ที่รอและเลยกำหนด รวมเป็นเงิน ${totalAmount.toLocaleString()} บาท`,
					duration: 5,
					placement: "bottom",
				});
				hasShown.current = true;
			}
		}
	}, []);

	const [selectedMonth, setSelectedMonth] = useState("all");
	const [selectedStatus, setSelectedStatus] = useState("all");

	const monthOptions = paymentData.map((item) => item.month);
	const statusOptions = ["รอ", "โอนแล้ว", "ล่าช้า"];

	const filteredData =
		selectedMonth === "all"
			? paymentData
			: paymentData.filter((item) => item.month === selectedMonth);

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

	const totalPaidAll = balanceData.reduce((sum, item) => {
		const paid = item.paid
			? item.paid.reduce((s, p) => s + p.paid, 0)
			: 0;

		return sum + paid;
	}, 0);

	const totalAll = balanceData.reduce(
		(sum, item) => sum + item.total,
		0
	);

	const [selectedPerson, setSelectedPerson] = useState("all");
	const personOptions = balanceData.map(item => item.name);
	const filteredBalanceData =
		selectedPerson === "all"
			? balanceData
			: balanceData.filter(item => item.name === selectedPerson);

	const generateInvoiceImage = async () => {
		let pendingList = [];

		paymentData.forEach((month) => {
			month.records.forEach((rec) => {

				if (rec.date === "ไม่ระบุ") return;

				const parts = rec.date.split(" ");
				const day = parts[0];
				const monthName = parts[1];
				const buddhistYear = parseInt(parts[2]);

				const christianYear = buddhistYear - 543;

				const formattedDate = `${day} ${monthName} ${christianYear}`;
				const recordDate = dayjs(formattedDate, "D MMMM YYYY");

				if (
					rec.status === "รอ" &&
					recordDate.isValid() &&
					recordDate.isSameOrBefore(dayjs(), "day")
				) {
					pendingList.push({
						month: month.month,
						...rec,
					});
				}
			});
		});

		if (pendingList.length === 0) {
			notification.warning({
				message: "ไม่มียอดคงค้าง",
				description: "ไม่มีรายการที่รอและเลยกำหนด",
			});
			return;
		}

		const totalAmount = pendingList.reduce(
			(sum, item) => sum + item.amount,
			0
		);

		createInvoiceDOM(pendingList, totalAmount);
	};


	const createInvoiceDOM = async (list, total) => {
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

		// 🔥 เปิดแท็บทันที (ยังไม่มี await)
		let newTab = null;
		if (isIOS) {
			newTab = window.open("", "_blank");
		}

		const container = document.createElement("div");

		container.style.width = "528px";
		container.style.height = "864px";
		container.style.padding = "40px";
		container.style.background = "white";
		container.style.fontFamily = "sans-serif";
		container.style.boxSizing = "border-box";
		container.style.position = "fixed";
		container.style.left = "-9999px";
		container.style.top = "0";

		container.innerHTML = `...`;

		document.body.appendChild(container);

		const canvas = await html2canvas(container, { scale: 2 });
		const dataUrl = canvas.toDataURL("image/png");

		if (isIOS && newTab) {
			newTab.document.write(`
				<html>
					<head><title>Invoice</title></head>
					<body style="margin:0">
						<img src="${dataUrl}" style="width:100%" />
					</body>
				</html>
			`);
		} else {
			const link = document.createElement("a");
			link.download = "invoice.png";
			link.href = dataUrl;
			link.click();
		}

		document.body.removeChild(container);
	};

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
				{/* <Button 
					className="flex text-sm text-gray-600 items-center bg-white px-2 py-1 rounded-full shadow cursor-pointer hover:bg-gray-100 focus:outline-none select-none"
					onClick={generateInvoiceImage}
				>
					<FontAwesomeIcon icon={faDownload} /> ยอดคงค้าง
				</Button> */}
			</div>

			{/* MODE DISPLAY */}
			{mode === "balance" && (
				<>
					<div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition mb-4">
						<h2 className="text-lg text-center font-bold text-orange-600 mb-3">
							ภาพรวมการคืนเงินทั้งระบบ
						</h2>
						
						<ProgressBar total={totalAll} paid={totalPaidAll} bgcolor="bg-orange-500" height="h-4" />
						{/* <ProgressText total={totalAll} paid={totalPaidAll} /> */}

						<div className="flex justify-between text-sm text-gray-600 mt-3">
							<span>ทั้งหมด {balanceData.length} คน</span>
							<span>
								{totalPaidAll.toLocaleString()} / {totalAll.toLocaleString()} ฿
							</span>
						</div>
						<div className="w-full mt-1">
							<select
								value={selectedPerson}
								onChange={(e) => setSelectedPerson(e.target.value)}
								className="w-full px-4 py-2 rounded-xl border shadow-sm text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
							>
								<option value="all">📌 ทุกคน</option>
								{personOptions.map((name, idx) => (
									<option key={idx} value={name}>
										{name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredBalanceData.map((item, index) => {
							const totalPaid = item.paid
								? item.paid.reduce((sum, p) => sum + p.paid, 0)
								: 0;
							const remaining = item.total - totalPaid;

							return (
								<div
									key={index}
									className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition"
								>
									<div className="flex items-top gap-2 w-full">
										<span className="text-xl font-bold text-purple-500 w-6 text-center pr-3">
											{index + 1}
										</span>

										<div className="flex flex-col flex-1 min-w-0 gap-1 items-top">
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
											<span className="text-blue-500 text-xs">
												เต็ม: {item.total.toFixed(2).toLocaleString()} ฿
											</span>
											<span className="text-green-500 text-xs">
												จ่ายแล้ว: {totalPaid.toLocaleString()} ฿
											</span>
											<span className="text-orange-600 font-bold text-md">
												เหลือ: {remaining.toLocaleString()} ฿
											</span>
										</div>

									</div>
									<div className="text-center mt-1">
										<span className="text-gray-400 text-xs">
											บัญชี: {item.account_number} / {item.bank}
										</span>
										<div className="flex items-center justify-center">
											<div className="w-[160px] mt-2">
												<ProgressBar total={item.total} paid={totalPaid} bgcolor="bg-green-500" height="h-2" />
												<div className="flex justify-between text-xs text-gray-400 mt-1 gap-1">
													<ProgressTextRatio total={item.total} paid={totalPaid} />
													<ProgressText total={item.total} paid={totalPaid} />
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}

			{mode === "current" && (
				<>
					<div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition mb-4">
						<h2 className="text-lg text-center font-bold text-orange-600 mb-3">
							ภาพรวมการคืนเงินทั้งระบบ
						</h2>
						
						<ProgressBar total={totalAll} paid={totalPaidAll} bgcolor="bg-orange-500" height="h-4" />
						{/* <ProgressText total={totalAll} paid={totalPaidAll} /> */}

						<div className="flex justify-between text-sm text-gray-600 mt-3">
							<span>ทั้งหมด {balanceData.length} คน</span>
							<span>
								{totalPaidAll.toLocaleString()} / {totalAll.toLocaleString()} ฿
							</span>
						</div>
						<div className="flex flex-row gap-3 justify-center items-center rounded-2xl max-w-fit mt-1">
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
					</div>
					
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
				</>
			)}
		</div>
	);
}
