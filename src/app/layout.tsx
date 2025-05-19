import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Meu aplicativo",
    description: "Descrição do meu aplicativo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <h1 className="bg-red-500">Meu Primeiro App React
                    {children}
                </h1>
                <p>Rodapé - Meu Primeiro App React</p>
            </body>
        </html>
    );
}