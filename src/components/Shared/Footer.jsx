const Footer = () => {
  return (
    <>
      <footer>
        <section className="contact bg-gray-100 p-20">
          <div className="container flex flex-col items-center gap-5">
            <h2 className="font-AlmaraiExtraBold text-4xl text-teal-500">
              اشترك لتصلك اخر العروض
            </h2>
            <h3 className="font-AlmaraiBold text-xl">
              سجل للحصول علي اخر العروض والمنتجات الحصرية
            </h3>
            <input
              type="email"
              placeholder="أكتب بريدك الالكتروني"
              className="p-3"
            />
          </div>
        </section>
        <section className="links"></section>
        <section className="social-media"></section>
        <section className="copyright"></section>
      </footer>
    </>
  );
};

export default Footer;
