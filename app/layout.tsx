import "@/app/globals.scss";

export const metadata = {
  title: "Sep Weather",
  description:
    "Sep Weather is a weather web application that provides users with up-to-date weather information in a user-friendly interface.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
