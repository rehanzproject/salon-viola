import Header from '../molecule/Header/Header.molecules'
import NavigationBar from '../molecule/NavigationBar/NavigationBar.molecules'
import CarouselPicture from '../atom/Carousel/Carousel.atom'
import Introduction from '../organism/Introduction/Introduction.organism'
import OurService from '../organism/OurService/OurService.organism'
import Beauty from '../organism/Beauty/Beauty.organism'
import OurExperienceSpecialist from '../organism/OurExperienceSpecialist/OurExperienceSpecialist.organism'
import OurProduct from '../organism/OurProduct/OurProduct.organism'
import OurSpecial from '../organism/OurSpecial/OurSpecial.organism'
import Footer from '../organism/Footer/Footer.organism'

function LandingPage() {
  return (
    <>
    <Header />
    <NavigationBar />
    <CarouselPicture />
    <Introduction />
    <OurService />
    <Beauty />
    <OurExperienceSpecialist />
    <OurProduct />
    <OurSpecial />
    <Footer />
    </>
  )
}

export default LandingPage