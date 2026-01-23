'use client'
import React, { useContext } from 'react'
import { ProjectsData } from '../../Context/ProjectsData'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";

type pageParams = {
  params: Promise<{
    id: string
  }>
}

const page = ({ params }: pageParams) => {
  const { projectsItem } = useContext(ProjectsData)
  const { id } = React.use(params)
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const project = projectsItem.find((item: { id: string }) => { return item.id == id })
  const [thumbnail, setThumbnail] = React.useState(project.images[0]);
  const divRef = React.useRef(null);
  
  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };
  return (
    <div className='bg-white/10 w- text-white h-full rounded-lg p-5 m-5'>
      {/* <div className='m-5'>
        <div className="w-full flex flex-row justify-evenly items-center gap-5">
          <Image
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            src={project.image}
            property=''
            alt='project img'
            className='w-[50%] h-auto object-cover'
            width={600}
            height={50}
          />
          <span className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
            style={{
              top: position.y +10,
              left: position.x + 10,
              opacity: tooltipVisible ? 1 : 0,
              transform: tooltipVisible ? 'scale(1)' : 'scale(0.6)',
              transition: 'all 0s ease-out',
            }}
          >
            Author: John Doe
          </span>
          <div className='text-white'>
            <h1>Title : {project.title} </h1>
            <p>My Role : {project.role}</p>
            <p>Teck Stack : {project.tools}</p>
          </div>
        </div>
        <div className="my-2 py-2 text-white font-semibold">{project.description}</div>
      </div> */}
      {project && (
        <div className="max-w-8xl w-full px-6">

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {project.images.map((image: string, index: number) => (
                  <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                    <Image className='object-center' width={400} height={400} src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="border border-gray-500/30 max-w-100 bg-white rounded overflow-hidden">
                <span className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
                  style={{
                    top: position.y + 50,
                    left: position.x + 180,
                    opacity: tooltipVisible ? 1 : 0,
                    transform: tooltipVisible ? 'scale(1)' : 'scale(0.6)',
                    transition: 'all 0s ease-out',
                  }}
                >
                  {project.title}
                </span>
                <Image
                  ref={divRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setTooltipVisible(true)}
                  onMouseLeave={() => setTooltipVisible(false)}
                  width={400}
                  height={400}
                  src={thumbnail}
                  alt="Selected product"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <div className="text-3xl font-medium flex gap-5">
                <h1>
                  {project.title}
                </h1>
                {project.link &&
                <Link
                target="_blank"
                rel="noopener noreferrer"
                className='flex flex-row items-center  text-blue-500 underline'
                href={project.link}
                >
                <FaExternalLinkAlt size={25} />
                </Link>
                }
              </div>
              <div className="flex items-center gap-0.5 mt-1">
                {Array(5).fill('').map((_, i) => (
                  project.rating > i ? (
                    <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="#615fff" />
                    </svg>
                  ) : (
                    <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#615fff" fillOpacity="0.35" />
                    </svg>
                  )
                ))}
                <p className="text-base ml-2">({project.rating})</p>
              </div>

              <p className="text-base font-medium mt-6">About Product</p>
              <ul className="list-disc ml-4 text-gray-200/70 h-56 overflow-y-scroll [&::-webkit-scrollbar]:hidden" style={{ whiteSpace: "pre-line" }} >{project.description}</ul>

            </div>
          </div>
        </div>
      )}
      <section className="flex flex-col items-center justify-center mt-3 px-4 md:px-0 w-full">
        <h3 className="text-lg font-semibold text-white text-center">Teck Stack used -</h3>
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mt-5">
          <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-rotate-2 transition duration-200">
            <Image width={50} height={50} src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg" alt="Logo" />
          </div>
          <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-rotate-2 transition duration-200">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/airtable.svg"
              alt="Logo" />
          </div>
          <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-rotate-2 transition duration-200">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/miro.svg"
              alt="Logo" />
          </div>
          <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-rotate-2 transition duration-200">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg"
              alt="Logo" />
          </div>
          <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-rotate-2 transition duration-200">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/huawei.svg"
              alt="Logo" />
          </div>
          <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-rotate-2 transition duration-200">
            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/asana.svg"
              alt="Logo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page