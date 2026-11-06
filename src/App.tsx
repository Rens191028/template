import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Home } from "@/pages/Home";
import { Diensten } from "@/pages/Diensten";
import { OverOns } from "@/pages/OverOns";
import { Contact } from "@/pages/Contact";
import { Privacybeleid } from "@/pages/Privacybeleid";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="diensten" element={<Diensten />} />
          <Route path="over-ons" element={<OverOns />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacybeleid" element={<Privacybeleid />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
