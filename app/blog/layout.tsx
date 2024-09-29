import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div>
      <header>Header do Blog</header>
      <main>{children}</main>
      <footer>Footer do Blog</footer>
    </div>
  );
};

export default BlogLayout;
