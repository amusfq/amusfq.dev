'use client'

import Image from 'next/image';
import {
  Button,
  Carousel, CarouselButtons, CarouselControl, CarouselIndicators, CarouselItem, CarouselNextButton, CarouselPrevButton,
  CarouselSlides,
  Modal,
  ModalAction,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter
} from "keep-react";

export type PortfolioProps = {
  id: string;
  order: number;
  type: string;
  title: string;
  description: string;
  images: string[];
  stacks: string[];
}

type CardProps = {
  data: PortfolioProps;
}

const Card = ({data}: CardProps) => {
  return (
    <Modal>
      <ModalAction asChild>
        <button>
          <div className='space-y-2 cursor-pointer'>
            <div className='w-full aspect-video rounded md:rounded-xl overflow-hidden shadow-md shadow-black'>
              <Image
                src={data.images[0]}
                alt='im'
                className='w-full aspect-video object-cover rounded md:rounded-xl hover:scale-110 hover:opacity-50 transition-all'
                width={300}
                height={150}
              />
            </div>
            <div>
              <h3 className='text-left text-white font-medium'>{data.title}</h3>
              <p className='text-left text-gray-500 text-sm capitalize'>{data.type.replace('-', ' ')}</p>
            </div>
          </div>
        </button>
      </ModalAction>
      <ModalBody>
        <ModalContent className='w-full max-w-7xl space-y-4'>
          <div>
            <Carousel options={{loop: true}}>
              <CarouselSlides>
                {data.images.map((slide, idx) => (
                  <CarouselItem key={slide}>
                    <div className="rounded md:rounded-xl">
                      <Image
                        src={slide}
                        alt={`${data.title} - ${idx + 1}`}
                        className='w-full aspect-video rounded md:rounded-xl object-cover'
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselSlides>
              <CarouselControl>
                <CarouselButtons>
                  <CarouselPrevButton/>
                  <CarouselNextButton/>
                </CarouselButtons>
                <CarouselIndicators/>
              </CarouselControl>
            </Carousel>
          </div>
          <ModalFooter>
            <div className="flex flex-row w-full items-end justify-between">
              <div className='space-y-2'>
                <div>
                  <h3 className='text-white font-medium'>{data.title}</h3>
                  <p className='text-gray-500 text-sm capitalize'>{data.type.replace('-', ' ')}</p>
                </div>
                <p className='text-white'>{data.description}</p>
                <div className="flex flex-wrap items-center gap-1">
                  {
                    data.stacks.map((stack, idx) => (
                      <p key={idx}
                         className='text-gray-400 text-xs bg-lighten px-2 py-1 rounded-full'>{stack}</p>
                    ))
                  }
                </div>
              </div>
              <ModalClose asChild>
                <Button size="sm" variant="outline" color="secondary">
                  Close
                </Button>
              </ModalClose>
            </div>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

export default Card;
