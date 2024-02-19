import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-3xl font-bold underline mb-6">
				Buraya ana maddelerinizi yazın.
			</h1>
			<textarea
				rows={15}
				className="text-l border w-3/5 rounded-xl p-6 text-black"></textarea>
		</main>
	)
}
