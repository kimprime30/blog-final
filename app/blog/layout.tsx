import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
