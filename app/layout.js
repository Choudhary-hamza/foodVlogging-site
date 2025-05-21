import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingHeader from "@/components/landingPages/Header";
import LoadingPageBackground from "@/components/landingPages/loadingPageBackground";
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingPageBackground/>
        <LandingHeader/>
        {children}
      </body>
    </html>
  );
}
