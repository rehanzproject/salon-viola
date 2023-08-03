import cardproduct from '../../../assets/cardproduct.png'
function OurProduct() {
  return (
    <div className='p-5'>
      <h1>Our Exclusive Product</h1>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. remaining essentially
        unchanged. It was popularised in the with theLorem Ipsum is simply dummy
        text of the printing and eentially unchanged.
      </p>
      <img src={cardproduct} alt='Card' className=' img-fluid ' />
    </div>
  );
}

export default OurProduct;
