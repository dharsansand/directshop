


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* Set the title for the page */}
        <title>directshop</title>
        
        {/* Add Favicon */}
        <link rel="icon" href="/favicon.ico" />
        </head>
      <body >
        {children}
      </body>
    </html>
  );
}
