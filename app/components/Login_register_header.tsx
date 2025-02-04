"use client";
import Image from "next/image";

export default function Login_register_header() {
	return (
		<main className="bg-[#F9DE4E] bg-cover bg-no-repeat bg-fixed h-[100vh] relative">
			<div className="">
				<div className="flex flex-col justify-center items-center pt-24">
					<h2 className="font-logo-header">COGIP</h2>

					<div>
						<h1 className="font-title-slogan absolute top-[290px] left-[136px] uppercase w-[595px] text-center leading-tight">
							Manage your customers and invoices easily
						</h1>

						<Image
							src="/Home_Header/hero-section_illustration.svg"
							alt="Illustration"
							width={530}
							height={530}
							className="w-[790px] h-auto absolute z-50 top-32 left-1/2"
						/>
					</div>

					<div className="flex flex-col justify-center items-center pt-[30%]">
						<h2 className="text-4xl font-semibold">Start now !</h2>
						<div>
						<a href="#form-section">
						<Image
							src="/Home_Header/arrow-curve-down-right.svg"
							alt="Illustration"
							width={530}
							height={530}
							className="w-[90px] pl-4  h-auto"
						/>
						</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
