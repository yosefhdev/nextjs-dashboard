import '@/app/ui/global.css';
import { spaceGrotesk } from '@/app/ui/fonts';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={`${spaceGrotesk.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
