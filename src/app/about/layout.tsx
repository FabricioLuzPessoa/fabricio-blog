export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>Olá oaoskoaksao</h1>
            { children }
        </>
        
    );
}
