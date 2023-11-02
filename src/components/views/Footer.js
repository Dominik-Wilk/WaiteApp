const Footer = () => {
  const year = () => new Date().getFullYear();

  return (
    <p className='d-flex justify-content-center text-secondary mt-3'>
      Copyright © WaiterApp {year()}
    </p>
  );
};

export default Footer;
