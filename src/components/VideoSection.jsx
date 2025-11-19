import VideoGallery from './VideoGallery'
import { useTranslation } from 'react-i18next'
import { Trans } from "react-i18next";

function videoSection() {
  const {t} = useTranslation();
  return (
    <div className='w-full bg-background py-12  md:py-20 px-4  md:px-10 flex justify-center'>
      <div className='max-w-[1200px] w-full flex flex-col items-center text-center sm:space-y-6'>
            <div data-aos="fade-up" className="space-y-4">
          <h1 className=" text-2xl md:text-6xl font-bold font-myfont leading-tight text-gray-900">
            {t("video.title")}{" "}
            
            <span className="lg:block bg-accent bg-clip-text text-transparent animate-gradient-x">
              {t("video.subtitle")}
            </span>{" "}

          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="font-myfont text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
             <Trans i18nKey="video.description" />
          </p>
        </div>

     

        <div data-aos="fade-up" data-aos-delay="200">
          <VideoGallery />

        </div>
        </div>
    </div>
  )
}

export default videoSection