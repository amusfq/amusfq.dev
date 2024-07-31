'use client';

import {Timeline, TimelineContent, TimelineItem, TimelinePoint} from "keep-react";
import clsx from "clsx";
import {ReactNode} from "react";
import {PlusSquare} from "@phosphor-icons/react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export type TitleProps = {
  title: string;
  icon: ReactNode;
  onAddClick?: () => void;
}

export const Title = ({title, icon, onAddClick}: TitleProps) => {
  return (
    <div className="flex flex-row item-center space-x-4 text-white">
      {icon}
      <h3 className='text-xl'>{title}</h3>
      {onAddClick && <button onClick={onAddClick}><PlusSquare size={24}/></button>}
    </div>
  )
}

export type EducationProps = {
  id: string;
  start_date: string;
  end_date: string | null;
  format: string;
  field_study: string;
  school: string;
  description: string,
  activities: string[]
}

export type EducationSectionProps = {
  timelines: EducationProps[];
  onAddClick?: () => void;
} & TitleProps

export const EducationSection = ({title, icon, timelines, onAddClick}: EducationSectionProps) => {
  return (
    <div className='w-full md:w-1/2 space-y-4'>
      <Title
        title={title}
        icon={icon}
        onAddClick={onAddClick}
      />
      <Timeline className='!border-gray-600'>
        {
          timelines.map((item, idx) => (
            <TimelineItem key={idx}>
              <TimelinePoint className={clsx(idx === 0 ? '!bg-blue-500' : '!bg-white')}/>
              <TimelineContent>
                <p className="text-body-5 font-normal leading-[1.4] text-metal-400">
                  {`${item.start_date} - ${item.end_date}`}
                </p>
                <h3 className="text-body-3 font-medium text-white">{item.school}</h3>
                <p className='text-gray-400 text-sm'>{item.field_study}</p>
                {
                  item.description && (
                    <p className="text-body-4 font-normal text-white">
                      {item.description}
                    </p>
                  )
                }
                <div className="flex flex-wrap items-center gap-1 ">
                  {
                    item.activities.map((activity, idy) => (
                      <p key={idy}
                         className='text-gray-400 text-xs bg-lighten px-2 py-1 rounded-full'>{activity}</p>
                    ))
                  }
                </div>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  )
}

export type ExperienceProps = {
  id: string;
  start_date: string;
  end_date: string | null;
  title: string;
  employment_type: string;
  location_type: string;
  company: string;
  location: string;
  description: string,
  skills: string[]
}

export type ExperienceSectionProps = {
  timelines: ExperienceProps[];
  onAddClick?: () => void;
} & TitleProps

export const ExperienceSection = ({title, icon, timelines, onAddClick}: ExperienceSectionProps) => {
  return (
    <div className='w-full md:w-1/2 space-y-4'>
      <Title
        title={title}
        icon={icon}
        onAddClick={onAddClick}
      />
      <Timeline className='!border-gray-600'>
        {
          timelines.map((item, idx) => (
            <TimelineItem key={idx}>
              <TimelinePoint className={clsx(idx === 0 ? '!bg-blue-500' : '!bg-white')}/>
              <TimelineContent>
                <p className="text-body-5 font-normal leading-[1.4] text-metal-400">
                  {`${item.start_date} - ${item.end_date} (${dayjs(item.end_date !== 'Present' ? item.end_date : undefined, item.end_date !== 'Present' ? 'MMM YYYY' : undefined).from(dayjs(item.start_date, 'MMM YYYY'), true)})`}
                </p>
                <h3 className="text-body-3 font-medium text-white">{item.title}</h3>
                <p className='text-gray-400 text-sm'>{`${item.company} · ${item.employment_type}`}</p>
                <p className='text-gray-400 text-sm'>{`${item.location} · ${item.location_type}`}</p>
                {
                  item.description && (
                    <p className="text-body-4 font-normal text-white">
                      {item.description}
                    </p>
                  )
                }
                <div className="flex flex-wrap items-center gap-1">
                  {
                    item.skills.map((skill, idy) => (
                      <p key={idy}
                         className='text-gray-400 text-xs bg-lighten px-2 py-1 rounded-full'>{skill}</p>
                    ))
                  }
                </div>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  )
}
