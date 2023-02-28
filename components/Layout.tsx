import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='mx-auto max-w-5xl'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>this is footer</footer>
    </div>
  );
}
